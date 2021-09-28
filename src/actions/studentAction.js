import { db } from "../firebase/firebase-config";
import { loadStudents } from "../helpers/loadHelp";
import { types } from "../types/types";
import { fileUpload } from "../helpers/fileUpload";
import Swal from "sweetalert2";

let fileUrl = [];

export const AddStudent = (student, typedoc, prog) => {
  return async (dispatch) => {
    const { name, lastName, document, email, finscrip } = student

    delete prog.id
    const newStudent = {  
      name,
      lastName,
      fullName: name + ' ' + lastName,
      typedoc: typedoc,
      document,
      email,
      finscrip,
      ...prog
    }

    console.log(newStudent);

    await db.collection('students').doc(document).set(newStudent)
    dispatch(addNewStudent(newStudent))
    startLoadingStudent()
  }
}
export const addNewStudent = (student) => ({
  type: types.addStudent,
  payload: {
    ...student,
  },
});

export const startLoadingStudent = () => {
  return async (dispatch) => {
    const student = await loadStudents()
    dispatch(setStudent(student))
  }
}

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

export const Edit = (newStudent) => {
  return async (dispatch) => {

    const studentF = { ...newStudent }
    delete studentF.id

    Swal.fire({
      title: 'actualizando...',
      text: 'Por favor, Espere ...',
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    })

    await db.doc(`students/${newStudent.id}`).update(studentF)
    console.log(studentF)

    Swal.fire('Guardado', studentF.fullName, 'success');
    dispatch(startLoadingStudent())
  }
}

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
  return async (dispatch) => {
    await db.doc(`students/${id}`).delete();

    dispatch(deleteStudent(id));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Estudiante Eliminado",
      showConfirmButton: false,
      timer: 1500,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
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

export const setCertificatesCode = async (document, code) => {
  try {
    await db.doc(`students/${document}`).set({ certificatesCode: code }, { merge: true })
    return true
  } catch (error) {
    console.error(error);
    return error
  }
}