import { db } from "../firebase/firebase-config";
import { loadProgramas } from "../helpers/loadHelp";
import { types } from "../types/types";
import { fileUpload } from "../helpers/fileUpload";
import Swal from "sweetalert2";

let fileUrl = [];

export const AddPrograma = (
  nombre,
  licencia,
  decreto,
  resolucion,
  nombreS11,
  nombreS12,
  nombreS13,
  nombreS14,
  nombreS15,
  nombreS16,
  notaS11,
  notaS12,
  notaS13,
  notaS14,
  notaS15,
  notaS16,
  codigoS11,
  codigoS12,
  codigoS13,
  codigoS14,
  codigoS15,
  codigoS16,
  nombreS21,
  nombreS22,
  nombreS23,
  nombreS24,
  nombreS25,
  nombreS26,
  notaS21,
  notaS22,
  notaS23,
  notaS24,
  notaS25,
  notaS26,
  codigoS21,
  codigoS22,
  codigoS23,
  codigoS24,
  codigoS25,
  codigoS26,
  nombreS31,
  nombreS32,
  nombreS33,
  nombreS34,
  nombreS35,
  nombreS36,
  notaS31,
  notaS32,
  notaS33,
  notaS34,
  notaS35,
  notaS36,
  codigoS31,
  codigoS32,
  codigoS33,
  codigoS34,
  codigoS35,
  codigoS36
) => {
  return async (dispatch) => {
    const newPrograma = {
      nombre,
  licencia,
  decreto,
  resolucion,
  nombreS11,
  nombreS12,
  nombreS13,
  nombreS14,
  nombreS15,
  nombreS16,
  notaS11,
  notaS12,
  notaS13,
  notaS14,
  notaS15,
  notaS16,
  codigoS11,
  codigoS12,
  codigoS13,
  codigoS14,
  codigoS15,
  codigoS16,
  nombreS21,
  nombreS22,
  nombreS23,
  nombreS24,
  nombreS25,
  nombreS26,
  notaS21,
  notaS22,
  notaS23,
  notaS24,
  notaS25,
  notaS26,
  codigoS21,
  codigoS22,
  codigoS23,
  codigoS24,
  codigoS25,
  codigoS26,
  nombreS31,
  nombreS32,
  nombreS33,
  nombreS34,
  nombreS35,
  nombreS36,
  notaS31,
  notaS32,
  notaS33,
  notaS34,
  notaS35,
  notaS36,
  codigoS31,
  codigoS32,
  codigoS33,
  codigoS34,
  codigoS35,
  codigoS36
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

export const activePrograma = (id, programa) => ({
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

    await db.doc(`programa/${programaF.id}`).update(EditPrograma);
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
