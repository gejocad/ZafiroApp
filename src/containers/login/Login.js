import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import LoginAdmin from "./LoginAdmin";
import LoginUser from "./LoginUser";
import LogoZafiro from "../../img/LogoZafiro.png";
import Stack from "@material-ui/core/Button";
import libros from "../../img/Libros.png";

const Login = () => {
  const [userType, setUserType] = useState(null);
  return (
    <section className="login d-flex justify-content-between align-items-center">
      <div className="ml-5">
        <div>
          <img
            src={LogoZafiro}
            alt="AdminLTE Logo"
            className="brand-image mx-auto mt-5"
            width="300"
            style={{ opacity: ".8" }}
          />
          <h3 className="slogan text-center">Menos tiempo y más fácil</h3>
        </div>

        <div className="mt-5">
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              color="primary"
              className="mr-5"
              onClick={() => setUserType("user")}
            >
              Estudiante
            </Button>

            <Button
              color="primary"
              variant="contained"
              onClick={() => setUserType("admin")}
            >
              Administrador
            </Button>
          </Stack>
        </div>

        <Dialog open={Boolean(userType)}>
          <div className="d-flex justify-content-end">
            <IconButton aria-label="close" onClick={() => setUserType(null)}>
              <CloseIcon />
            </IconButton>
          </div>

          {userType === "user" && <LoginUser />}
          {userType === "admin" && <LoginAdmin />}
        </Dialog>
      </div>
      <img src={libros} width="900" alt="librero"/>
    </section>
  );
};

export default Login;