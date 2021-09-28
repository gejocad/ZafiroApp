import React, { useEffect, useState } from "react";
import { getStudent } from "src/actions/studentAction";
import { jsPDF } from "jspdf";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import FolderIcon from "@material-ui/icons/Folder";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import "../../assets/css/certificateStyle.css";
import logo_ag from "../../img/Logo-AG-2021.png";

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
      doc.addImage(img, "JPEG", 15, 40, 180, 180);
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
          <p className="text-right">
            licencia: <strong> {student.licencia}</strong>, decreto:{" "}
            <strong>{student.decreto}</strong>
          </p>
          <p className="title">Constancia de egresado</p>
          <p className="principal text-center">
            El director de la oficina central de registro, que suscribe
            <br />
            hace constar:
          </p>
          <p>
            Que, <strong>{student.fullName}</strong>; con tipo documento{" "}
            <strong>{student.typedoc}</strong> N°{" "}
            <strong>{student.document}</strong>, con fecha de inscripción de{" "}
            <strong>{student.finscrip}</strong>, aprobó satisfactoriamente las
            asignaturas la competencia de <strong>{student.nombre}</strong>{" "}
            acuerdo a su plan de estudios y se encuentra en condición de{" "}
            <strong>Egresado (A)</strong>
          </p>
          <p>
            Se expide la presente a solicitud del interesado, para los fines que
            estime conveniente
          </p>
          <p className="text-right">
            {today.day}/{today.month}/{today.year}.
          </p>
          <p>
            Resolucion: <strong>{student.resolucion}</strong>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default GenerateCertificates;
