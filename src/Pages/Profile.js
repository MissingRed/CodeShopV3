import React, { useContext } from "react";
import Sidebar from "../Components/Sidebar";
import "../Styles/Profile.css";
import DarkMode from "../Components/DarkMode";
import { AuthContext } from "../Database/Auth";
import Swal from "sweetalert2";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  const buttonVerified = () => {
    currentUser
      .sendEmailVerification()
      .then(function () {
        Swal.fire(
          "Correo enviado!",
          "Revisa la bandeja de entrada de: " + currentUser.email,
          "success"
        );
      })
      .catch(function (error) {
        Swal.fire("Error", "Error inesperado", "error");
      });
  };

  return (
    <>
      <div>
        <div className="main-home__grid">
          <div className="main-home__sidebar">
            <Sidebar />
          </div>
          <div className="contentProfile">
            <div className="topProfile">
              <div>
                <h2>Profile</h2>
              </div>
              <DarkMode />
            </div>
            <div className="data">
              <div className="imgProfile">
                <div className="img5">
                  <img
                    src={
                      currentUser.photoURL === null
                        ? "Img/defaultUser_img.png"
                        : currentUser.photoURL
                    }
                    alt="User"
                  />
                </div>
                <div className="info-edit">
                  <p className="negrillaul">Last Connection</p>
                  <p className="tiempo">
                    {currentUser.metadata.lastSignInTime}
                  </p>
                </div>
              </div>
              <div className="personalInfo">
                <p>Personal information</p>
                <input
                  type="text"
                  name=""
                  placeholder={currentUser.displayName}
                />
                <input type="email" name="" placeholder={currentUser.email} />
                <p>Contact information</p>
                <input type="number" placeholder="Phone Number" />
                <div className="verifiacion">
                  <p className="negrilla">Email Verification</p>
                  <div>
                    {currentUser.emailVerified === false ? (
                      <button
                        onClick={buttonVerified}
                        className="main-profile__button"
                      >
                        <img src="Img/alert.svg" alt="Alert" />
                        Send verification email
                      </button>
                    ) : (
                      <div className="verificado">
                        <span>Email Verified</span>
                        <img src="Img/check-circle.svg" alt="Check" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="progressInfo">
                <p>Progress</p>
              </div>
              {/* <div className="img5">
                <img
                  src={
                    currentUser.photoURL === null
                      ? "Img/defaultUser_img.png"
                      : currentUser.photoURL
                  }
                  alt="User"
                />
              </div>
              <div className="name">
                <p>User</p>
                <p>{currentUser.displayName}</p>
              </div>

              <div className="email">
                <p className="negrilla">EMail</p>
                <p>{currentUser.email}</p>
              </div>
              <div className="verifiacion">
                <p className="negrilla">Email Verification</p>
                <div>
                  {currentUser.emailVerified === false ? (
                    <button
                      onClick={buttonVerified}
                      className="main-profile__button"
                    >
                      <img src="Img/alert.svg" alt="Alert" />
                      Send verification email
                    </button>
                  ) : (
                    <div className="verificado">
                      <span>Verified Email</span>
                      <img src="Img/check-circle.svg" alt="Check" />
                    </div>
                  )}
                </div>
              </div>

              <div className="conexion">
                <div className="info-edit">
                  <p className="negrillaul">Last Connection</p>
                  <p className="tiempo">
                    {currentUser.metadata.lastSignInTime}
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
