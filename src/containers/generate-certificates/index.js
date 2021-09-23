import React, { useEffect, useState } from 'react'
import { getStudent } from "src/actions/studentAction";
import { jsPDF } from "jspdf";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import FolderIcon from '@material-ui/icons/Folder';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

const GenerateCertificates = () => {
  const { id } = useParams()
  const [student, setStudent] = useState(null)

  useEffect(() => {
    const document = id.split('-')[1]
    getStudent(document).then(result => {
      console.log(result.programs)
      setStudent(result)
    })
  }, [id, setStudent])

  const downloadCertificate = () => {
    const doc = new jsPDF();
    const html = `
      <div>
        <h1>Certificado</h1>
      </div>
    `
    doc.html(html, {
      callback: function (doc) {
        doc.save();
      },
      x: 10,
      y: 10
    });
  }

  if (!student) {
    return <h5>No hay datos</h5>
  }

  return (
    <section className="d-flex flex-column align-items-center justify-content-center">
      <h3>Hola, {student.name}</h3>
      <h5>Descarga tus certificados disponibles</h5>
      {student.programs ? (
        <List sx={{ width: '200px', maxWidth: 360 }}>
          {
            student.programs.map(p => {
              return (
                <ListItem>
                  <ListItemAvatar>
                    <FolderIcon />
                  </ListItemAvatar>
                  <ListItemText primary={p} />
                  <Button variant="contained" className="mx-3" onClick={downloadCertificate}>Descargar</Button>
                </ListItem>
              )
            })
          }
        </List>
      ) : (
        <h5>No tienes certificados disponibles</h5>
      )}
    </section>
  )
}

export default GenerateCertificates
