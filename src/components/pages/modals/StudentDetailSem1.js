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

export default function StudentDetailSem1(showDetail, setShowDetail) {

  const classes = useStyles();
  const handleClose = () => {
    setShowDetail(false);
  };


  
  const { active } = useSelector(state => state.student)

  const [formValue, handleInputChange, reset] = useForm(active)
  const dispatch = useDispatch()
  const { nombreS11, nombreS12, nombreS13, nombreS14, nombreS15, nombreS16, notaS11, notaS12, notaS13, notaS14, notaS15, notaS16 } = formValue;

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
      newStudent.nombreS11 = nombreS11;
      newStudent.nombreS12 = nombreS12;
      newStudent.nombreS13 = nombreS13;
      newStudent.nombreS14 = nombreS14;
      newStudent.nombreS15 = nombreS15;
      newStudent.nombreS16 = nombreS16;
      newStudent.notaS11 = notaS11;
      newStudent.notaS12 = notaS12;
      newStudent.notaS13 = notaS13;
      newStudent.notaS14 = notaS14;
      newStudent.notaS15 = notaS15;
      newStudent.notaS16 = notaS16;
      
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
                id="notaS11"
                label={nombreS11}
                placeholder="Ingresar Documento"
                variant="outlined"
                name="notaS11"
                value={notaS11}
                onChange={handleInputChange}
              />
              <TextField
                required
                id="notaS11"
                label={nombreS12}
                placeholder="Ingresar Documento"
                variant="outlined"
                name="notaS12"
                value={notaS12}
                onChange={handleInputChange}
              />
            </div>
            <div>
              
            <TextField
                required
                id="notaS11"
                label={nombreS13}
                placeholder="Ingresar Documento"
                variant="outlined"
                name="notaS13"
                value={notaS13}
                onChange={handleInputChange}
              />
              <TextField
                required
                id="notaS11"
                label={nombreS14}
                placeholder="Ingresar Documento"
                variant="outlined"
                name="notaS14"
                value={notaS14}
                onChange={handleInputChange}
              />
            </div>
            <div>
              
            <TextField
                required
                id="notaS11"
                label={nombreS15}
                placeholder="Ingresar Documento"
                variant="outlined"
                name="notaS15"
                value={notaS15}
                onChange={handleInputChange}
              />
              <TextField
                required
                id="notaS11"
                label={nombreS16}
                placeholder="Ingresar Documento"
                variant="outlined"
                name="notaS16"
                value={notaS16}
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
