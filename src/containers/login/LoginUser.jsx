import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { getStudent } from "src/actions/studentAction";
import emailjs from 'emailjs-com'

const LoginUser = () => {
  const [document, setDocument] = useState(null);
  const [student, setStudent] = useState({});

  const handleChange = (e) => {
    setDocument(e.target.value);
  };

  const search = async (e) => {
    const response = await getStudent(document);
    setStudent(response);
  };

  function sendEmail() {
    try {
      const service_id = 'service_5xyb25m'
      const template_id = 'template_vyux5d9'
      const user_id = 'user_qC5Ej7PEzabeK2d0WuCSQ'
      const templateParams = {
        from_name: 'Diego',
        to_name: 'Wil',
        to_email: 'digitalentodo@gmail.com'
      };

      emailjs.send(service_id, template_id, templateParams, user_id)
        .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
          console.log('FAILED...', error);
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
        <Button variant="contained" onClick={sendEmail}>
          Correo
        </Button>
      </div>
      {student && <div>{student.name}</div>}
    </div>
  );
};

export default LoginUser;
