import React from "react";
import Sidebar from "../Components/Sidebar";
import DarkMode from "../Components/DarkMode";
import "../Styles/Product.css";
import PaypalCheckoutButton from "../Components/PaypalCheckoutButton";

const GameView = () => {
  const order = {
    customer: "123456",
    total: "20.40",
    items: [
      {
        sku: "Prueba128",
        name: "SpiderMan",
        price: "20.40",
        quantity: 1,
        currency: "USD",
      },
    ],
  };

  return (
    <>
      <div className="main-home__grid">
        <div className="main-home__sidebar">
          <Sidebar />
        </div>
        <div className="main-home__shadow">
          <div className="main-game__content">
            <img src="Img/font.jpg" className="main-game__content_img" alt="" />
            <div className="main-game__info">
              <div className="main-game__shadow">
                <img src="Img/spider.jpg" alt="" className="imgGame1" />
                <p>
                  Marvel's Spider-Man: Miles Morales es un videojuego de acción
                  y aventuras desarrollado por Insomniac Games y publicado por
                  Sony Interactive Entertainment para PlayStation 4 y
                  PlayStation 5.
                </p>
                <PaypalCheckoutButton order={order} />
                <div className="plataformContent">
                  <p className="plataform">PLATAFORMA:</p>
                  <img src="Img/windows.svg" alt="" className="plataformImg" />
                </div>
              </div>
              <div className="optionTheme">
                <div className="darkTheme">
                  <DarkMode />
                </div>
                <div className="logo">
                  <img src="Img/ESRB.svg" alt="" className="esrb" />
                </div>
              </div>
            </div>
            {/* <div className="contenidoProd">
                <img src="Img/spider.jpg" alt="" />
                <p>
                  Marvel's Spider-Man: Miles Morales es un videojuego de acción
                  y aventuras desarrollado por Insomniac Games y publicado por
                  Sony Interactive Entertainment para PlayStation 4 y
                  PlayStation 5.
                </p>
                <div className="paid">
                  <PaypalCheckoutButton order={order} />
                </div>
                <div className="plataformaDiv">
                  <p className="plataform">PLATAFORMA: Windows</p>
                </div>
              </div> */}
          </div>
          <div className="ProductOptions"></div>
        </div>
      </div>
    </>
  );
};

export default GameView;
