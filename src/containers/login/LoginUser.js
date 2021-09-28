import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { getStudent, setCertificatesCode } from "src/actions/studentAction";
import emailjs from 'emailjs-com'

const LoginUser = () => {
  const [document, setDocument] = useState(null);
  const [resultMessage, setResultMessage] = useState('')
  const [student, setStudent] = useState({});

  const handleChange = (e) => setDocument(e.target.value)

  const search = async (e) => {
    const response = await getStudent(document);
    setStudent(response);
  };
  

  function sendEmail() {
    const urlId = new Date().getTime().toString(15)
    const certificateUrl = `${window.location.origin}/mis-certificados/${urlId}-${student.document}`
    try {
      const service_id = 'service_5xyb25m'
      const template_id = 'template_vyux5d9'
      const user_id = 'user_qC5Ej7PEzabeK2d0WuCSQ'
      const templateParams = {
        to_name: student.name,
        to_email: student.email,
        message: `Ingresa a este link para obtener tus certificados: ${certificateUrl}`,
      };

      emailjs.send(service_id, template_id, templateParams, user_id)
        .then( async (response) => {
          if (response.status === 200) {
            const result = setCertificatesCode(document, urlId)
            if (result === true) {
              setResultMessage('Enlace enviado. Por favor revisa tu bandeja')
            }
          }
        }, function (error) {
          console.log('FAILED...', error);
          setResultMessage('No pudimos enviar el correo. Por favor intenta más tarde')
        });

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="px-5">
      <h4>Para ver tus certificados ingresa tu tipo y numero de documento</h4>
      <div className="d-flex align-items-center justify-content-center">
        <TextField
          label="Documento"
          type="number"
          variant="outlined"
          className="mr-3"
          onChange={handleChange}
        />
        <Button variant="contained" onClick={search}>
          Buscar
        </Button>
      </div>

      {student?.name &&
        <div>
          <h5>Hola, {student.name}</h5>
          <p>Enviaremos un enlace a tu correo electronico <strong>{student.email}</strong> <br /> así podrás descargar tus certificados</p>
          <Button variant="contained" onClick={sendEmail}>
            Enviar certificados
          </Button>
        </div>
      }
      {student === null && <p>No se encontró</p>}

      <h4 className="mt-2">{ resultMessage }</h4>
    </div>
  );
};

export default LoginUser;
