import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '@hooks/useForm';
import {Button} from '@components';
import TextField from "@material-ui/core/TextField";
import { AddStudent } from '@actions/studentAction';



const Registro = ({isActive}) => {  

  const { programa } = useSelector(state => state.programa)
    
    const tiposdoc = [
      {
        value: "CC",
        label: "Cédula",
      },
      {
        value: "TI",
        label: "Tarjeta de Identidad",
      },
      {
        value: "PSPRT",
        label: "Pasaporte",
      },
      {
        value: "PEP",
        label: "PEP",
      },
    ];
    
  
    const [TipoDocumento, setTipoDocumento] = React.useState("CC");
    const [TipoProg, setTipoProg] = React.useState(programa[0].id);
    const [formValue, handleInputChange] = useForm([]);
    const dispatch = useDispatch();
  
    const { name, lastName, email, document, finscrip } = formValue;
  
    const handleChange = (event) => {
      setTipoDocumento(event.target.value);
    };
  
    const handleProgChange = (event) => {
      setTipoProg(event.target.value);
      
    };
  
    const handleNewStudent = (e) => {
      e.preventDefault();
      programa.map(item => {
        return TipoProg === item.id? dispatch(AddStudent(formValue, TipoDocumento, item)) : ''
      })
      
      ;
    };
  
    return (
      <div className={`tab-pane ${isActive ? 'active' : ''}`}>
        <div
          aria-labelledby="customized-dialog-title"
        >
  
          <form
            className="formAddStudent"
            onSubmit={handleNewStudent}
            noValidate
            autoComplete="off"
          >
            <div dividers>
              <div>
                <TextField
                  required
                  id="Nombres"
                  label="Nombres"
                  placeholder="Ingresar Nombres"
                  variant="outlined"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                />
                <TextField
                  required
                  id="Apellidos"
                  label="Apellidos"
                  placeholder="Ingresar Apellidos"
                  variant="outlined"
                  name="lastName"
                  value={lastName}
                  onChange={handleInputChange}
                />
                <TextField
                  required
                  id="Email"
                  label="Email"
                  type="email"
                  placeholder="Ingresar Email"
                  variant="outlined"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <TextField
                  id="tipodoc"
                  select
                  label="Tipo de Documento"
                  value={TipoDocumento}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                  name="typedocument"
                >
                  {tiposdoc.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
                <TextField
                  required
                  id="Documento"
                  label="Documento"
                  placeholder="Ingresar Documento"
                  variant="outlined"
                  name="document"
                  value={document}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <TextField
                  required
                  id="Fecha"
                  label="Fecha"
                  type="date"
                  placeholder="Ingresar Fecha de Inscripción"
                  variant="outlined"
                  name="finscrip"
                  value={finscrip}
                  onChange={handleInputChange}
                />
                <TextField
                  id="prog"
                  select
                  label="Programa"
                  value={TipoProg}
                  onChange={handleProgChange}
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                  name="prog"
                >
                  {programa.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.nombre}
                    </option>
                  ))}
                </TextField>
              </div>
              <div>
                <br />
                <br />
                <br />
                <br /> <br />
              </div>
            </div>
            <div>
              <Button autoFocus type="submit " color="primary">
                Registrar
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Registro