import { db } from "../firebase/firebase-config";

export const loadStudents = async (id) => {

    const studentsSnap = await db.collection(`students/`).get()
    const students = []

    studentsSnap.forEach(snapHijo => {
        students.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })

    return students
}