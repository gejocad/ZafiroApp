import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import IconButton from '@material-ui/core/IconButton';
import LoginAdmin from './LoginAdmin'
import LoginUser from './LoginUser'
import LogoZafiro from '../../img/LogoZafiro.png'
import Stack from '@material-ui/core/Button';


const Login = () => {
  const [userType, setUserType] = useState(null);
  return (
    <section className="login d-flex flex-column justify-content-start align-items-center">
      <div>
        <img
          src={LogoZafiro}
          alt="AdminLTE Logo"
          className="brand-image mx-auto mt-5"
          width="300"
          style={{ opacity: '.8' }}
        />
      </div>

      <div className="mt-5">
        <Stack spacing={2} direction="row">
          <Button variant="contained"
            className="mr-5"
            onClick={() => setUserType("user")}
          >Estudiante</Button>

          <Button variant="contained"
            onClick={() => setUserType("admin")}
          >Administrador</Button>
        </Stack>
      </div>

      <Dialog open={Boolean(userType)}>

        <div className="d-flex justify-content-end">

          <IconButton aria-label="close" onClick={() => setUserType(null)}>
            < CloseIcon />
          </IconButton>
        </div>

         {userType === "user" && <LoginUser />}
         {userType === "admin" && <LoginAdmin />}
      </Dialog>

    </section>
  )
}

export default Login
