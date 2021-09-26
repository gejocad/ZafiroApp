import { types } from "../types/types";

const initialState = {
  student: [],
  active: {
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
    codigoS36: "",
  },
};

export const programaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addPrograma:
      return {
        ...state,
        programa: [action.payload, ...state.programa],
      };
    case types.loadPrograma:
      return {
        ...state,
        programa: [...action.payload],
      };
    case types.activePrograma:
      return {
        ...state,
        active: { ...action.payload },
      };
    case types.updatePrograma:
      return {};

    default:
      return state;
  }
};
