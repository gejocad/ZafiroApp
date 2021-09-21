import { types } from "../types/types";

const initialState = {
    student: [],
    active: {
        nombre: '',
        resolucion: '',
        codigo: '',
        semestres: {
          semestre1: {
            competencia1: {
              nombreS11: '',
              codigoS11: ''
            },
            competencia2: {
              nombreS12: '',
              codigoS12: ''
            },
            competencia3: {
              nombreS13: '',
              codigoS13: ''
            },
            competencia4: {
              nombreS14: '',
              codigoS14: ''
            },
            competencia5: {
              nombreS15: '',
              codigoS15: ''
            },
            competencia6: {
            nombreS16: '',
            codigoS16: ''
            }
          },
          semestre2: {
            competencia1: {
              nombreS21: '',
              codigoS21: ''
            },
            competencia2: {
              nombreS22: '',
              codigoS22: ''
            },
            competencia3: {
              nombreS23: '',
              codigoS23: ''
            },
            competencia4: {
              nombreS24: '',
              codigoS24: ''
            },
            competencia5: {
              nombreS25: '',
              codigoS25: ''
            },
          competencia6: {
            nombreS26: '',
            codigoS26: ''
            }
          },
          semestre3: {
            competencia1: {
              nombreS31: '',
              codigoS31: ''
            },
            competencia2: {
              nombreS32: '',
              codigoS32: ''
            },
            competencia3: {
              nombreS33: '',
              codigoS33: ''
            },
            competencia4: {
              nombreS34: '',
              codigoS34: ''
            },
            competencia5: {
              nombreS35: '',
              codigoS35: ''
            },
          competencia6: {
            nombreS36: '',
            codigoS36: ''
            }
          }
        }
      }
}

export const programaReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addPrograma:
            return {
                ...state,
                programa: [action.payload, ...state.programa]
            }
        case types.loadPrograma:
            return {
                ...state,
                programa: [...action.payload]
            }
        case types.activePrograma:
            return {
                ...state,
                active: {...action.payload}
            }
        case types.updatePrograma:
            return {}

        default:
            return state
            
    }
        
}