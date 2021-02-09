import React from "react";
import Sidebar from "../Components/Sidebar";
import DarkMode from "../Components/DarkMode";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

const Home = () => {
  return (
    <>
      <div className="main-home__grid">
        <div className="main-home__sidebar">
          <Sidebar />
        </div>
        <div className="main-home__shadow">
          <div className="main-home__content">
            <div className="main-home__search_grid">
              <div className="main-home__search_bar-container">
                <img src="Img/search.svg" alt="" className="icon1" />
                <input
                  type="text"
                  className="main-home__search_input"
                  placeholder="Search Games"
                />
              </div>
              <DarkMode />
            </div>
            <div className="main-home__top_content">
              <div className="main-home__top_item">
                <div className="main-home__top_item-img">
                  <img src="Img/forza.jpg" alt="" />
                </div>
                <div className="main-home__top_item-text">Forza Horizon 4</div>
              </div>
              <div className="main-home__top_item">
                <div className="main-home__top_item-img">
                  <img src="Img/cyber.jpg" alt="" />
                </div>
                <div className="main-home__top_item-text">Cyberpunk 2077</div>
              </div>
              <div className="main-home__top_item">
                <div className="main-home__top_item-img">
                  <img src="Img/fall.jpg" alt="" />
                </div>
                <div className="main-home__top_item-text">
                  Fall Guys: Ultimate Knockout
                </div>
              </div>
            </div>
            <div className="main-home__bottom">
              <div className="main-home__bottom_item-1">
                <div className="main-home__bottom_item-img">
                  <img src="Img/ass.jpg" alt="" />
                </div>
              </div>
              <div className="main-home__bottom_item-2">
                <div className="main-home__bottom_item-img">
                  <img src="Img/3703677.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="main-home__items_container">
            <h2>Others</h2>
            <div className="main-home__items_container-grid">
              <Link className="main-home__items_container-game" to="/GameView">
                <div className="main-home__items_container-game_img">
                  <img
                    src="Img/spider.jpg"
                    alt=""
                    className="main-home__items_container-game_img-image"
                  />
                </div>
                <p className="main-home__items_container-game_title">
                  Spider-Man: Miles Morales
                </p>
                <p className="main-home__items_container-game_price">
                  US$ 61.49
                </p>
              </Link>
              <div className="main-home__items_container-game">
                <div className="main-home__items_container-game_img">
                  <img
                    src="https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Portrait_640x854-640x854-288120c5573756cb988b6c1968cebd86.png?h=854&resize=1&w=640"
                    alt=""
                    className="main-home__items_container-game_img-image"
                  />
                </div>
                <p className="main-home__items_container-game_title">
                  Assassin's Creed Valhalla
                </p>
                <p className="main-home__items_container-game_price">
                  US$ 75.30
                </p>
              </div>
              <div className="main-home__items_container-game">
                <div className="main-home__items_container-game_img">
                  <img
                    src="https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDO_Standalone_EGS_PortraitProductImage_1200x1600_Deliverable-1200x1600-b59e0f9eaa6ef53e8e4e62515aabadc2.jpg?h=854&resize=1&w=640"
                    alt=""
                    className="main-home__items_container-game_img-image"
                  />
                </div>
                <p className="main-home__items_container-game_title">
                  Red Dead Redemption 2
                </p>
                <p className="main-home__items_container-game_price">
                  US$ 32.14
                </p>
              </div>
              <div className="main-home__items_container-game">
                <div className="main-home__items_container-game_img">
                  <img
                    src="https://cdn1.epicgames.com/ca93b6d41a4e41af864942d8f0a2a826/offer/uno-ult-store-portrait-1200x1600-1200x1600-068853fa8ff2-1200x1600-96a1e051d1b1ed8a9eb3c1625b08f624.jpg?h=854&resize=1&w=640"
                    alt=""
                    className="main-home__items_container-game_img-image"
                  />
                </div>
                <p className="main-home__items_container-game_title">
                  UNO® Ultimate Edition
                </p>
                <p className="main-home__items_container-game_price">
                  US$ 20.00
                </p>
              </div>
              <div className="main-home__items_container-game">
                <div className="main-home__items_container-game_img">
                  <img
                    src="https://cdn1.epicgames.com/cd14dcaa4f3443f19f7169a980559c62/offer/EGS_SidMeiersCivilizationVI_FiraxisGames_S2-860x1148-bffad83909595b7c5c60489a17056a59.jpg?h=854&resize=1&w=640"
                    alt=""
                    className="main-home__items_container-game_img-image"
                  />
                </div>
                <p className="main-home__items_container-game_title">
                  Civilization VI
                </p>
                <p className="main-home__items_container-game_price">
                  US$ 45.31
                </p>
              </div>
              <div className="main-home__items_container-game">
                <div className="main-home__items_container-game_img">
                  <img
                    src="https://cdn1.epicgames.com/catnip/offer/BL3TallNologo-1200x1440-c1200ae70b5e054025e296746d1987a8.jpg?h=854&resize=1&w=640"
                    alt=""
                    className="main-home__items_container-game_img-image"
                  />
                </div>
                <p className="main-home__items_container-game_title">
                  Borderlands 3
                </p>
                <p className="main-home__items_container-game_price">
                  US$ 57.00
                </p>
              </div>
              <div className="main-home__items_container-game">
                <div className="main-home__items_container-game_img">
                  <img
                    src="https://cdn1.epicgames.com/58dfcd1952ee48c1a1fa31c6ace5fe3d/offer/EGS_TheLongDark_HinterlandStudioInc_S6-1200x1600-3debfeb01e511b9e1221f973b6bb1fe7.jpg?h=854&resize=1&w=640"
                    alt=""
                    className="main-home__items_container-game_img-image"
                  />
                </div>
                <p className="main-home__items_container-game_title">
                  The Long Dark
                </p>
                <p className="main-home__items_container-game_price">
                  US$ 21.74
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
