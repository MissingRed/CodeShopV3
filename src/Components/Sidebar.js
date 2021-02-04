import React from "react";
import "../Styles/Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebarS">
        <div>
          <h2>CODESHOP</h2>
          <div className="options">
            <ul>
              <li>
                <img src="Img/shopping-bag.svg" alt="" />
                <p className="selected">Store</p>
              </li>
              <li>
                <img src="Img/bookmark.svg" alt="" />
                <p> Favorites</p>
              </li>
              <li>
                <img src="Img/user.svg" alt="" />
                <p>Profile</p>
              </li>
              <li>
                <img src="Img/shopping-cart.svg" alt="" />
                <p>Purchases</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="userItem">
          <p>Usuario</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
