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

export default function StudentDetailSem2(showDetail, setShowDetail) {

  const classes = useStyles();
  const handleClose = () => {
    setShowDetail(false);
  };


  
  const { active } = useSelector(state => state.student)

  const [formValue, handleInputChange, reset] = useForm(active)
  const dispatch = useDispatch()
  const { nombreS21, nombreS22, nombreS23, nombreS24, nombreS25, nombreS26, notaS21, notaS22, notaS23, notaS24, notaS25, notaS26 } = formValue;

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
      newStudent.nombreS21 = nombreS21;
      newStudent.nombreS22 = nombreS22;
      newStudent.nombreS23 = nombreS23;
      newStudent.nombreS24 = nombreS24;
      newStudent.nombreS25 = nombreS25;
      newStudent.nombreS26 = nombreS26;
      newStudent.notaS21 = notaS21;
      newStudent.notaS22 = notaS22;
      newStudent.notaS23 = notaS23;
      newStudent.notaS24 = notaS24;
      newStudent.notaS25 = notaS25;
      newStudent.notaS26 = notaS26;
      
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
                id="notaS21"
                label={nombreS21}
                placeholder="Ingresar Documento"
                variant="outlined"
                name="notaS21"
                value={notaS21}
                onChange={handleInputChange}
              />
              <TextField
                required
                id="notaS22"
                label={nombreS22}
                placeholder="Ingresar Documento"
                variant="outlined"
                name="notaS12"
                value={notaS22}
                onChange={handleInputChange}
              />
            </div>
            <div>
              
            <TextField
                required
                id="notaS23"
                label={nombreS23}
                placeholder="Ingresar Documento"
                variant="outlined"
                name="notaS23"
                value={notaS23}
                onChange={handleInputChange}
              />
              <TextField
                required
                id="notaS24"
                label={nombreS24}
                placeholder="Ingresar Documento"
                variant="outlined"
                name="notaS24"
                value={notaS24}
                onChange={handleInputChange}
              />
            </div>
            <div>
              
            <TextField
                required
                id="notaS25"
                label={nombreS25}
                placeholder="Ingresar Documento"
                variant="outlined"
                name="notaS25"
                value={notaS25}
                onChange={handleInputChange}
              />
              <TextField
                required
                id="notaS26"
                label={nombreS26}
                placeholder="Ingresar Documento"
                variant="outlined"
                name="notaS26"
                value={notaS26}
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
