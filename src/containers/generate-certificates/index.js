import React, { useEffect, useState } from "react";
import { getStudent } from "src/actions/studentAction";
import { jsPDF } from "jspdf";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "../../assets/css/certificateStyle.css";
import logo_ag from "../../img/Logo-AG-2021.png";
import firma from "../../img/images.png";

const GenerateCertificates = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  const date = new Date();
  const today = {
    day: date.getDate(),
    month: 0 + "" + (date.getMonth() + 1),
    year: date.getFullYear(),
  };

  useEffect(() => {
    const [certificatesCode, document] = id.split("-");
    console.log(id)
    getStudent(document).then((result) => {
      console.log(result);

      if (certificatesCode === result?.certificatesCode) {
        setStudent(result);
      }
    });
  }, [id, setStudent]);

  const downloadCertificate = () => {
    const html = document.getElementById("certificate");
    // eslint-disable-next-line no-undef
    html2canvas(html).then(function (canvas) {
      const img = canvas.toDataURL();
      var doc = new jsPDF();
      doc.addImage(img, "JPEG", 15, 10, 180, 250);
      doc.save(`certificado_${student?.fullName}.pdf`);
    });
  };

  if (!student) {
    return (
      <section className="text-center">
        <h5>No hay datos disponibles para estes usuario</h5>
      </section>
    );
  }

  return (
    <section className="d-flex flex-column align-items-center justify-content-center">
      <h4>Hola, {student.name}</h4>
      <h5>Descarga tus certificados disponibles</h5>
      {student.nombre ? (
        <p>
          Tienes certificados disponibles: <br />{" "}
          <strong>{student.nombre}</strong>
        </p>
      ) : (
        <p>No tienes certificados disponibles</p>
      )}

      <Button
        variant="contained"
        className="mx-3"
        onClick={downloadCertificate}
      >
        Descargar certificado
      </Button>

      {/* CERTIFICADO  NO VISIBLE*/}
      <div id="certificate">
        <div className="row institution-info">
          <div className="logo col-2">
            <img src={logo_ag} width="100" alt="logo" />
          </div>
          <div className="institution col text-center">
            <p className="institution-name">Academia Geek</p>
            <p>Cede centro</p>
          </div>
        </div>
        <div className="certificate-text">
         
          <p className="title">Constancia de notas</p>
          <p className="principal text-center">
            El director de la oficina central de registro, que suscribe
            <br />
            hace constar:
          </p>
          <p>
            Que, <strong>{student.fullName}</strong> con tipo documento{" "}
            <strong>{student.typedoc}</strong> N°{" "}
            <strong>{student.document}</strong> de Arauca, cursa el tercer semestre del programa <strong>{student.nombre}</strong>.
            En nuestra sede educativa con licencia de funcionamiento Nro. <strong>{student.licencia}</strong> 
            segun decreto educativo ETDH <strong>{student.decreto}</strong>, con resolución <strong>{student.resolucion}</strong>
           </p>
          <table className="table">

            <tr>

              <th className="th">Competencia</th>

              <th className="th">Codigo</th>

              <th className="th">Promedio</th>

            </tr>

            <tr>

              <td className="td">{student.nombreS31}</td>

              <td className="td">{student.codigoS31}</td>

              <td className="td">{student.notaS31}</td>

            </tr>

            <tr>

            <td className="td">{student.nombreS32}</td>

            <td className="td">{student.codigoS32}</td>

            <td className="td">{student.notaS32}</td>

            </tr>

            <tr>

            <td className="td">{student.nombreS33}</td>

            <td className="td">{student.codigoS33}</td>

            <td className="td">{student.notaS33}</td>

            </tr>

            <tr>

              <td className="td">{student.nombreS34}</td>

              <td className="td">{student.codigoS34}</td>

              <td className="td">{student.notaS34}</td>

            </tr>

            <tr>

            <td className="td">{student.nombreS35}</td>

            <td className="td">{student.codigoS35}</td>

            <td className="td">{student.notaS35}</td>

            </tr>

            <tr>

            <td className="td">{student.nombreS36}</td>

            <td className="td">{student.codigoS36}</td>

            <td className="td">{student.notaS36}</td>

            </tr>

          </table>
          <br />
          <p>
            Se expide la presente a solicitud del interesado, para los fines que
            estime conveniente el {today.day}/{today.month}/{today.year}.
          </p>
          <div className="text-right">
            <div  className="institution-name text-center">
            <img src={firma} width="200" alt="logo" />
            <p>__________________</p>
            <p>Firma del director</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default GenerateCertificates;
