import { db } from "../firebase/firebase-config";
import { loadStudents } from "../helpers/loadHelp";
import { types } from "../types/types";
import { fileUpload } from "../helpers/fileUpload";
import Swal from "sweetalert2";

let fileUrl = [];

export const AddStudent = (student, typedoc, prog) => {
  return async (dispatch) => {
    const { name, lastName, document, email, finscrip } = student;

    const newStudent = {
      name,
      lastName,
      typedoc,
      document,
      email,
      finscrip,
      prog,
      programs: []
    };

    console.log(newStudent);

    await db.collection("students/").doc(document).set(newStudent);
    dispatch(addNewStudent(newStudent));
  };
};
export const addNewStudent = (student) => ({
  type: types.addStudent,
  payload: {
    ...student,
  },
});

export const startLoadingStudent = (id) => {
  return async (dispatch) => {
    const student = await loadStudents(id);
    dispatch(setStudent(student));
  };
};

export const setStudent = (student) => ({
  type: types.loadStudent,
  payload: student,
});

export const activeStudents = (id, student) => ({
  type: types.activeStudent,
  payload: {
    id,
    ...student,
  },
});

export const Edit = (student) => {
  return async (dispatch, getState) => {
    if (!student.url) {
      delete student.url;
    }

    const EditStudent = {
      image: fileUrl,
      tittle: student.tittle,
      description: student.description,
      year: student.year,
      categorie: student.categoria,
      duration: student.duracion,
      qualification: [],
      trailer: "fdgfd",
    };

    const studentF = { ...EditStudent };
    delete studentF.id;

    Swal.fire({
      title: "actualizando...",
      text: "Por favor, Espere ...",
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    await db.doc(`students/${studentF.id}`).update(EditStudent);
    console.log(EditStudent);

    Swal.fire("Guardado", student.title, "success");
    dispatch(startLoadingStudent(studentF.id));
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
    await db.doc(`students/${id}`).delete();

    dispatch(deleteStudent(id));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Pelicula Eliminada",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(startLoadingStudent());
  };
};

export const deleteStudent = (id) => ({
  type: types.studentDelete,
  payload: id,
});

export const listaSearch = (searchText) => {
  return async (dispatch) => {
    const studentsSnap = await db
      .collection(`students/`)
      .where("tittle", "==", searchText)
      .get();
    const studentsl = [];

    studentsSnap.forEach((snapHijo) => {
      studentsl.push({
        uid: snapHijo.id,
        ...snapHijo.data(),
      });
    });
    console.log(studentsl);
    dispatch(listarSe(studentsl));
  };
};

export const listarSe = (student) => {
  return {
    type: types.ListarBusqueda,
    payload: student,
  };
};

export const getStudent = async (document) => {
  try {
    const doc = await db.collection("students").doc(document).get();
    if (doc.exists) {
      return doc.data()
    } else {
      return null
    }
  } catch (error) {
    console.log(error);
  }
};
