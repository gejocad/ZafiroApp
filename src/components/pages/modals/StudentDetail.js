import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "src/hooks/useForm";
import { Edit } from "src/actions/studentAction";
import { useDispatch, useSelector } from "react-redux";


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
  closeButton: {
    position: "absolute",
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
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
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
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
}));

export default function StudentDetail(showDetail, setShowDetail) {

  const classes = useStyles();
  const handleClose = () => {
    setShowDetail(false);
  };
  const tiposdoc = [
    {
      value: "CC",
      label: "C??dula",
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

  
  const { active } = useSelector(state => state.student)
  const [TipoDocumento, setTipoDocumento] = React.useState(active.typedoc);

  const [formValue, handleInputChange, reset] = useForm(active)
  const dispatch = useDispatch()
  const { name, lastName, email, document, finscrip } = formValue;

  const activeId = useRef(active.id)

  useEffect(() => {
    if (active.id !== activeId.current) {
      setTipoDocumento(active.typedoc)
      reset(active)
    }
    activeId.current = active.id
  }, [active, reset])

  const handleChange = (event) => {
    setTipoDocumento(event.target.value);
  };

    const handleEditStudent = (e) => {
      e.preventDefault();
      const newStudent = {...active}
      newStudent.name = name;
      newStudent.lastName = lastName;
      newStudent.finscrip = finscrip;
      newStudent.email = email;
      newStudent.document = document;
      newStudent.fullName = name + ' ' + lastName;
      dispatch(Edit(newStudent))
      handleClose()
    }; 

  return (
    <div>
      <Dialog
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={showDetail}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {active.fullName}
        </DialogTitle>

        <form
          className={classes.root}
          onSubmit={handleEditStudent}
          noValidate
          autoComplete="off"
        >
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
                placeholder="Ingresar Fecha de Inscripci??n"
                variant="outlined"
                name="finscrip"
                value={finscrip}
                onChange={handleInputChange}
              />
              <TextField
                id="prog"
                disabled
                label="Programa"
                value={active.nombre}
                name="prog"
              >
                  {active.nombre}
              </TextField>
            </div>
            <div className="space"></div>
          </DialogContent>
          <DialogActions>
            <Button autoFocus type="submit " color="primary">
              Actualizar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
