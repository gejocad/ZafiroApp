import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "@hooks/useForm";
import { AddPrograma } from "@actions/programaAction";
import { Button } from "@components";

const Dates = ({ isActive }) => {
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
            Nombre de institución:
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              placeholder="Nombre de institución"
              name="nombre"
              value={nombre}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputName2" className="col-sm-2 col-form-label">
            Nombre de director:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre de director:"
              name="licencia"
              value={licencia}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputName2" className="col-sm-2 col-form-label">
            Nombre de secretaria
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre de secretaria"
              name="decreto"
              value={decreto}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
            Dirección:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Dirección"
              name="resolucion"
              value={resolucion}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Nro. de contácto:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Nro. de contácto"
              name="nombreS11"
              value={nombreS11}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSkills" className="col-sm-2 col-form-label">
            Correo de institución:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Correo de institución"
              name="codigoS11"
              value={codigoS11}
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

export default Dates;
