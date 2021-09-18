import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'src/hooks/useForm';
import { AddStudent } from 'src/actions/studentAction';
import { useDispatch } from 'react-redux'


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));



export default function StudentAddModal(showAddStudent, setShowAddStudent) {

  const classes = useStyles();
  const handleClose = () => {
    setShowAddStudent(false);
  };
  const tiposdoc = [
    {
      value: 'CC',
      label: 'Cédula',
    },
    {
      value: 'TI',
      label: 'Tarjeta de Identidad',
    },
    {
      value: 'PSPRT',
      label: 'Pasaporte',
    },
    {
      value: 'PEP',
      label: 'PEP',
    },
  ];

  const tiposprog = [
    {
      value: 'Medicina',
      label: 'Medicina',
    },
    {
      value: 'Programación',
      label: 'Programación',
    },
    {
      value: 'Administración',
      label: 'Administración',
    },
    {
      value: 'Atención al Cliente',
      label: 'Atención al Cliente',
    },
  ];

  const [TipoDocumento, setTipoDocumento] = React.useState('CC');
  const [TipoProg, setTipoProg] = React.useState('');
  const [formValue, handleInputChange] = useForm([])
  const dispatch = useDispatch()

  const { name, lastName, email, document, finscrip } = formValue

  const handleChange = (event) => {
    setTipoDocumento(event.target.value);
  };

  const handleProgChange = (event) => {
    setTipoProg(event.target.value);
    console.log(event.target.value);
  };

  const handleNewStudent = (e) => {
    e.preventDefault() 
    console.log(formValue, TipoDocumento, TipoProg)
    dispatch(AddStudent(formValue, TipoDocumento, TipoProg))
  }


  return (
    <div>

      <Dialog maxWidth='md' onClose={handleClose} aria-labelledby="customized-dialog-title" open={showAddStudent}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Añadir Estudiante
        </DialogTitle>

        <form className={classes.root} onSubmit={handleNewStudent} noValidate autoComplete="off">
          <DialogContent dividers>

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
                {tiposprog.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </div>
            <div>
              <br />
              <br />
              <br /><br /> <br />
            </div>
          </DialogContent>
          <DialogActions>
            <Button autoFocus type="submit "color="primary">
              Save changes
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
