import React, { useState, useContext, useRef } from "react";
import "../Styles/Sidebar.css";
// import app from "../Database/Base.js";
import { AuthContext } from "../Database/Auth";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { currentUser } = useContext(AuthContext);
  const [openSidebar, setOpenSidebar] = useState(false);
  const sidebarMobile = useRef();

  const handleClose = () => {
    sidebarMobile.current.style.animation = "animation_nav_reverse 0.5s";
    sidebarMobile.current.addEventListener("animationend", () =>
      setOpenSidebar(false)
    );
  };
  return (
    <>
      <div className="sidebarS">
        <div className="navcontent">
          <div className="contenedorBar">
            <img
              src="Img/menu.svg"
              alt=""
              onClick={() => setOpenSidebar(!openSidebar)}
            />
            {openSidebar ? (
              <div className="sidebar-menu" ref={sidebarMobile}>
                <div className="sidebarS1">
                  <img src="Img/x.svg" alt="" onClick={handleClose} />
                  <div className="space">
                    <div className="navcontent1">
                      <div className="options1">
                        <ul>
                          <li>
                            <img src="Img/shopping-bag.svg" alt="" />
                            <NavLink
                              activeClassName="selected"
                              className="link"
                              to="/Store"
                            >
                              Store
                            </NavLink>
                          </li>
                          <li>
                            <img src="Img/bookmark.svg" alt="" />
                            <NavLink
                              activeClassName="selected"
                              className="link"
                              to="/Favorites"
                            >
                              Favorites
                            </NavLink>
                          </li>
                          <li>
                            <img src="Img/user.svg" alt="" />
                            <NavLink
                              activeClassName="selected"
                              className="link"
                              to="/Profile"
                            >
                              Profile
                            </NavLink>
                          </li>
                          <li>
                            <img src="Img/shopping-cart.svg" alt="" />
                            <NavLink
                              className="link"
                              to="/Purchases"
                              activeClassName="selected"
                            >
                              Purchases
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="userItem1">
                      <img src={currentUser.photoURL} alt="" />
                      <p>{currentUser.displayName}</p>
                      {/* <button onClick={() => app.auth().signOut()}>Cerrar Sesión</button> */}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            <h2>CODESHOP</h2>
            <span />
          </div>
          <div className="options">
            <ul>
              <li>
                <img src="Img/shopping-bag.svg" alt="" />
                <NavLink
                  activeClassName="selected"
                  className="link"
                  to="/Store"
                >
                  Store
                </NavLink>
              </li>
              <li>
                <img src="Img/bookmark.svg" alt="" />
                <NavLink
                  activeClassName="selected"
                  className="link"
                  to="/Favorites"
                >
                  Favorites
                </NavLink>
              </li>
              <li>
                <img src="Img/user.svg" alt="" />
                <NavLink
                  activeClassName="selected"
                  className="link"
                  to="/Profile"
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <img src="Img/shopping-cart.svg" alt="" />
                <NavLink
                  className="link"
                  to="/Purchases"
                  activeClassName="selected"
                >
                  Purchases
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="userItem">
          <img src={currentUser.photoURL} alt="" />
          <p>{currentUser.displayName}</p>
          {/* <button onClick={() => app.auth().signOut()}>Cerrar Sesión</button> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
