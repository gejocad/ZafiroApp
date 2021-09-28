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
import { AddStudent } from "src/actions/studentAction";
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

export default function StudentDetailSem1(showDetail, setShowDetail) {

  const classes = useStyles();
  const handleClose = () => {
    setShowDetail(false);
  };
  
  

  const { active } = useSelector(state => state.student)
  const [TipoDocumento, setTipoDocumento] = React.useState('CC');
  const [TipoProg, setTipoProg] = React.useState('Medicina');
  const [formValue, handleInputChange, reset] = useForm(active)
  const dispatch = useDispatch()
  const { name, lastName, email, notaS11} = formValue;

  const activeId = useRef(active.id)

  useEffect(() => {
    if (active.id !== activeId.current) {
      setTipoDocumento(active.document)
      setTipoProg(active.prog)
      reset(active)
    }
    activeId.current = active.id
  }, [active, reset])




  const handleNewStudent = (e) => {
    e.preventDefault();
    console.log(formValue, TipoDocumento, TipoProg);
    dispatch(AddStudent(formValue, TipoDocumento, TipoProg));
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
          onSubmit={handleNewStudent}
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
                required
                id="Documento"
                label="Documento"
                placeholder="Ingresar Documento"
                variant="outlined"
                name="notaS11"
                value={notaS11}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="space"></div>
          </DialogContent>
          <DialogActions>
            <Button autoFocus type="submit " color="primary">
              Save changes
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
