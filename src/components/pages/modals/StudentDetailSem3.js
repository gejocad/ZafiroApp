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

export default function StudentDetailSem3(showDetail, setShowDetail) {

  const classes = useStyles();
  const handleClose = () => {
    setShowDetail(false);
  };


  
  const { active } = useSelector(state => state.student)

  const [formValue, handleInputChange, reset] = useForm(active)
  const dispatch = useDispatch()
  const { nombreS31, nombreS32, nombreS33, nombreS34, nombreS35, nombreS36, notaS31, notaS32, notaS33, notaS34, notaS35, notaS36 } = formValue;

  const activeId = useRef(active.id)

  useEffect(() => {
    if (active.id !== activeId.current) {
      reset(active)
    }
    activeId.current = active.id
  }, [active, reset])

  

    const handleEditStudent = (e) => {
      e.preventDefault();
      const newStudent = {...active}
      newStudent.nombreS31 = nombreS31;
      newStudent.nombreS32 = nombreS32;
      newStudent.nombreS33 = nombreS33;
      newStudent.nombreS34 = nombreS34;
      newStudent.nombreS35 = nombreS35;
      newStudent.nombreS36 = nombreS36;
      newStudent.notaS31 = notaS31;
      newStudent.notaS32 = notaS32;
      newStudent.notaS33 = notaS33;
      newStudent.notaS34 = notaS34;
      newStudent.notaS35 = notaS35;
      newStudent.notaS36 = notaS36;
      
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
                id="notaS31"
                label={nombreS31}
                placeholder="Ingresar Documento"
                variant="outlined"
                name="notaS31"
                value={notaS31}
                onChange={handleInputChange}
              />
              <TextField
                required
                id="notaS32"
                label={nombreS32}
                placeholder="Ingresar Documento"
                variant="outlined"
                name="notaS32"
                value={notaS32}
                onChange={handleInputChange}
              />
            </div>
            <div>
              
            <TextField
                required
                id="notaS33"
                label={nombreS33}
                placeholder="Ingresar Documento"
                variant="outlined"
                name="notaS33"
                value={notaS33}
                onChange={handleInputChange}
              />
              <TextField
                required
                id="notaS34"
                label={nombreS34}
                placeholder="Ingresar Documento"
                variant="outlined"
                name="notaS34"
                value={notaS34}
                onChange={handleInputChange}
              />
            </div>
            <div>
              
            <TextField
                required
                id="notaS35"
                label={nombreS35}
                placeholder="Ingresar Documento"
                variant="outlined"
                name="notaS35"
                value={notaS35}
                onChange={handleInputChange}
              />
              <TextField
                required
                id="notaS36"
                label={nombreS36}
                placeholder="Ingresar Documento"
                variant="outlined"
                name="notaS36"
                value={notaS36}
                onChange={handleInputChange}
              />
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
