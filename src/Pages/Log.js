import React, { useState } from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";

const Log = () => {
  const [register, setRegister] = useState(false);
  return (
    <>
      <div className="main-log">
        <div className="main-log__container">
          <div className="mani-log__container-margin">
            <div className="main-log__container-top">
              <div className="main-log_container-logo">
                <img
                  src="Img/Logo.svg"
                  alt=""
                  className="main-log__container-img"
                />
                <h3 className="main-log__container-title">CODESHOP</h3>
              </div>
              <div className="main-log_container-form">
                {register ? <Register state={register} /> : <Login />}
              </div>
            </div>
            <div className="main-log__container-apart">
              <hr className="main-log__container-apart_hr" />
              <div className="main-log__container-apart_text">
                <p>O</p>
              </div>
              <hr className="main-log__container-apart_hr" />
            </div>
            <div className="main-log__container-create_account">
              <button
                className="main-log__container-create_account_button"
                onClick={() => setRegister(!register)}
              >
                {register ? (
                  <p>Ya tienes cuenta? Inicia Sesión!</p>
                ) : (
                  <p>Crear mi cuenta CodeShop !</p>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="main-log__wallpaper">
          <div className="main-log__wallpaper-gradient"></div>
        </div>
      </div>
    </>
  );
};

export default Log;
