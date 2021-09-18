import { db } from "../firebase/firebase-config";
import { loadProgramas } from "../helpers/loadHelp";
import { types } from "../types/types";
import { fileUpload } from "../helpers/fileUpload";
import Swal from "sweetalert2";

let fileUrl = [];

export const AddPrograma = (
  nombre,
  resolucion,
  codigo,
  nombreS11,
  nombreS12,
  nombreS13,
  nombreS14,
  nombreS15,
  nombreS16,
  codigoS11,
  codigoS12,
  codigoS13,
  codigoS14,
  codigoS15,
  codigoS16
) => {
  return async (dispatch) => {
    const newPrograma = {
      image: fileUrl,
      nombre,
      resolucion,
      codigo,
      semestres: {
        semestre1: {
          competencia1: {
            nombreS11,
            codigoS11
          },
          competencia2: {
            nombreS12,
            codigoS12
          },
          competencia3: {
            nombreS13,
            codigoS13
          },
          competencia4: {
            nombreS14,
            codigoS14
          },
          competencia5: {
            nombreS15,
            codigoS15
          }
        },
        competencia6: {
          nombreS16,
          codigoS16
        }
      }
    };

    console.log(newPrograma);

    await db.collection("programa/").add(newPrograma);
    dispatch(addNewPrograma(newPrograma));
    dispatch(startLoadingPrograma("Programa"));
  };
};
export const addNewPrograma = (programa) => ({
  type: types.addPrograma,
  payload: {
    ...programa,
  },
});

export const startLoadingPrograma = (id) => {
  return async (dispatch) => {
    const programa = await loadProgramas(id);
    dispatch(setPrograma(programa));
  };
};

export const setPrograma = (programa) => ({
  type: types.loadPrograma,
  payload: programa,
});

export const activeProgramas = (id, programa) => ({
  type: types.activePrograma,
  payload: {
    id,
    ...programa,
  },
});

export const Edit = (programa) => {
  return async (dispatch, getState) => {
    if (!programa.url) {
      delete programa.url;
    }

    const EditPrograma = {
      image: fileUrl,
      tittle: programa.tittle,
      description: programa.description,
      year: programa.year,
      categorie: programa.categoria,
      duration: programa.duracion,
      qualification: [],
      trailer: "fdgfd",
    };

    const programaF = { ...EditPrograma };
    delete programaF.id;

    Swal.fire({
      title: "actualizando...",
      text: "Por favor, Espere ...",
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    await db.doc(`programas/${programaF.id}`).update(EditPrograma);
    console.log(EditPrograma);

    Swal.fire("Guardado", programa.title, "success");
    dispatch(startLoadingPrograma(programaF.id));
  };
};

export const startUploading = (file) => {
  return async (dispatch) => {
    Swal.fire({
      title: "Uploading...",
      text: "Please wait ...",
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    fileUrl = await fileUpload(file);
    console.log(fileUrl);
    Swal.close();
    return fileUrl;
  };
};

export const Delete = (id) => {
  return async (dispatch, getState) => {
    await db.doc(`programas/${id}`).delete();

    dispatch(deletePrograma(id));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Pelicula Eliminada",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(startLoadingPrograma());
  };
};

export const deletePrograma = (id) => ({
  type: types.programaDelete,
  payload: id,
});

export const listaSearch = (searchText) => {
  return async (dispatch) => {
    const programasSnap = await db
      .collection(`programa/`)
      .where("tittle", "==", searchText)
      .get();
    const programasl = [];

    programasSnap.forEach((snapHijo) => {
      programasl.push({
        uid: snapHijo.id,
        ...snapHijo.data(),
      });
    });
    console.log(programasl);
    dispatch(listarSe(programasl));
  };
};

export const listarSe = (programa) => {
  return {
    type: types.ListarBusqueda,
    payload: programa,
  };
};
