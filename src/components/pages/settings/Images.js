import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "@hooks/useForm";
import { AddPrograma } from "@actions/programaAction";
import { Button } from "@components";

const Images = ({ isActive }) => {
  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    nombre: "",
    licencia: "",
    decreto: "",
    resolucion: "",
    nombreS11: "",
    notaS11: 0,
    codigoS11: "",
    nombreS12: "",
    notaS12: 0,
    codigoS12: "",
    nombreS13: "",
    notaS13: 0,
    codigoS13: "",
    nombreS14: "",
    notaS14: 0,
    codigoS14: "",
    nombreS15: "",
    notaS15: 0,
    codigoS15: "",
    nombreS16: "",
    notaS16: 0,
    codigoS16: "",
    nombreS21: "",
    notaS21: 0,
    codigoS21: "",
    nombreS22: "",
    notaS22: 0,
    codigoS22: "",
    nombreS23: "",
    notaS23: 0,
    codigoS23: "",
    nombreS24: "",
    notaS24: 0,
    codigoS24: "",
    nombreS25: "",
    notaS25: 0,
    codigoS25: "",
    nombreS26: "",
    notaS26: 0,
    codigoS26: "",
    nombreS31: "",
    notaS31: 0,
    codigoS31: "",
    nombreS32: "",
    notaS32: 0,
    codigoS32: "",
    nombreS33: "",
    notaS33: 0,
    codigoS33: "",
    nombreS34: "",
    notaS34: 0,
    codigoS34: "",
    nombreS35: "",
    notaS35: 0,
    codigoS35: "",
    nombreS36: "",
    notaS36: 0,
    codigoS36: "" 
  });

  const {
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
  } = values;

  const handleAddPrograma = (e) => {
    e.preventDefault();

    dispatch(
      AddPrograma(
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
      )
    );
    reset();
  };

  return (
    <div className={`tab-pane ${isActive ? "active" : ""}`}>
      <form className="form-horizontal">
        <div className="form-group row">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">
            Nombre
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              placeholder="Name"
              name="nombre"
              value={nombre}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputName2" className="col-sm-2 col-form-label">
            licencia
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Licencia"
              name="licencia"
              value={licencia}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputName2" className="col-sm-2 col-form-label">
            Decreto
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Decreto"
              name="decreto"
              value={decreto}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
            Resolucion
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Resolucion"
              name="resolucion"
              value={resolucion}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Materia 1 de semestre 1
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="materia 1 S1"
              name="nombreS11"
              value={nombreS11}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Codigo de materia 1 de semestre 1
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="codigo 1 S1"
              name="codigoS11"
              value={codigoS11}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Materia 2 de semestre 1
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="materia 2 S1"
              name="nombreS12"
              value={nombreS12}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Codigo de materia 2 de semestre 1
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="codigo 2 S1"
              name="codigoS12"
              value={codigoS12}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Materia 3 de semestre 1
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="materia 3 S1"
              name="nombreS13"
              value={nombreS13}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Codigo de materia 3 de semestre 1
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="codigo 3 S1"
              name="codigoS13"
              value={codigoS13}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Materia 4 de semestre 1
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="materia 4 S1"
              name="nombreS14"
              value={nombreS14}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Codigo de materia 4 de semestre 1
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="codigo 4 S1"
              name="codigoS14"
              value={codigoS14}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Materia 5 de semestre 1
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="materia 5 S1"
              name="nombreS15"
              value={nombreS15}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Codigo de materia 5 de semestre 1
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="codigo 5 S1"
              name="codigoS15"
              value={codigoS15}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Materia 6 de semestre 1
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="materia 6 S1"
              name="nombreS16"
              value={nombreS16}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Codigo de materia 6 de semestre 1
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="codigo 6 S1"
              name="codigoS16"
              value={codigoS16}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Materia 1 de semestre 2
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="materia 1 S2"
              name="nombreS21"
              value={nombreS21}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Codigo de materia 1 de semestre 2
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="codigo 1 S2"
              name="codigoS21"
              value={codigoS21}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Materia 2 de semestre 2
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="materia 2 S2"
              name="nombreS22"
              value={nombreS22}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Codigo de materia 2 de semestre 2
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="codigo 2 S2"
              name="codigoS22"
              value={codigoS22}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Materia 3 de semestre 2
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="materia 3 S2"
              name="nombreS23"
              value={nombreS23}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Codigo de materia 3 de semestre 2
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="codigo 3 S2"
              name="codigoS23"
              value={codigoS23}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Materia 4 de semestre 2
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="materia 4 S2"
              name="nombreS24"
              value={nombreS24}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Codigo de materia 4 de semestre 2
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="codigo 4 S1"
              name="codigoS24"
              value={codigoS24}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Materia 5 de semestre 2
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="materia 5 S2"
              name="nombreS25"
              value={nombreS25}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Codigo de materia 5 de semestre 2
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="codigo 5 S2"
              name="codigoS25"
              value={codigoS25}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Materia 6 de semestre 2
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="materia 6 S2"
              name="nombreS26"
              value={nombreS26}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Codigo de materia 6 de semestre 2
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="codigo 6 S2"
              name="codigoS26"
              value={codigoS26}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Materia 1 de semestre 3
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="materia 1 S3"
              name="nombreS31"
              value={nombreS31}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Codigo de materia 1 de semestre 3
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="codigo 1 S3"
              name="codigoS31"
              value={codigoS31}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Materia 2 de semestre 3
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="materia 2 S3"
              name="nombreS32"
              value={nombreS32}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Codigo de materia 2 de semestre 3
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="codigo 2 S3"
              name="codigoS32"
              value={codigoS32}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Materia 3 de semestre 3
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="materia 3 S3"
              name="nombreS33"
              value={nombreS33}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Codigo de materia 3 de semestre 3
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="codigo 3 S3"
              name="codigoS33"
              value={codigoS33}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Materia 4 de semestre 3
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="materia 4 S3"
              name="nombreS34"
              value={nombreS34}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Codigo de materia 4 de semestre 3
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="codigo 4 S3"
              name="codigoS34"
              value={codigoS34}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Materia 5 de semestre 3
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="materia 5 S3"
              name="nombreS35"
              value={nombreS35}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Codigo de materia 5 de semestre 3
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="codigo 5 S3"
              name="codigoS35"
              value={codigoS35}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Materia 6 de semestre 3
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="materia 6 S3"
              name="nombreS36"
              value={nombreS36}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Codigo de materia 6 de semestre 3
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="codigo 6 S3"
              name="codigoS36"
              value={codigoS36}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="offset-sm-2 col-sm-10">
            <Button type="submit" onClick={handleAddPrograma} theme="danger">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Images;
