import React, { useContext } from "react";
import "../Styles/Sidebar.css";
// import app from "../Database/Base.js";
import { AuthContext } from "../Database/Auth";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <div className="sidebarS">
        <div>
          <h2>CODESHOP</h2>
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
