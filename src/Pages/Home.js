import React from "react";
import Sidebar from "../Components/Sidebar";
import DarkMode from "../Components/DarkMode";

import "../Styles/Home.css";

const Home = () => {
  return (
    <div>
      <div className="grid">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <div className="navSearch">
            <div className="main-chip__search">
              <img src="Img/search.svg" alt="" className="icon1" />
              <input
                type="text"
                className="main-chip__search_input"
                placeholder="Search Games"
              />
            </div>
            <DarkMode />
          </div>
          <div className="top">
            <div className="color">
              <div className="img">
                <img src="Img/forza.jpg" alt="" />
              </div>
              <div className="text">Forza Horizon 4</div>
            </div>
            <div className="color">
              <div className="img">
                <img src="Img/cyber.jpg" alt="" />
              </div>
              <div className="text">Cyberpunk 2077</div>
            </div>
            <div className="color">
              <div className="img">
                <img src="Img/fall.jpg" alt="" />
              </div>
              <div className="text">Fall Guys: Ultimate Knockout</div>
            </div>
          </div>
          <div className="bottom">
            <div className="color1">
              <div className="img1">
                <img src="Img/ass.jpg" alt="" />
              </div>
            </div>
            <div className="color2">
              <div className="img1">
                <img src="Img/3703677.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
