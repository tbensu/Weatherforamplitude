import React from "react";
import Temperature from "./Temperature.js";
import a from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  const {
    max,
    min,
    name,
    img,
    onClose,
    primary,
    temp,
    pressure,
    humidity,
    wind,
    idCiudad,
  } = props;

  return (
    <div className={`${primary ? a.primary : ""}`}>
      <div className={primary && `${a.hijdeyuta}`}>
        <span className={!primary ? `${a.tarjetaCiudad}` : ''}>
          {
            <button className={a.botonCiudad} onClick={onClose}>
              X
            </button>
          }
          <Link to={`/city/${idCiudad}`}>
            <p className={a.nombreCiudad}>{name} </p>
          </Link>
          <div className={a.tempEspecial}>
            {primary && <Temperature tag="Temperature:" temp={Math.round(temp*10)/10}/>}
          </div>
          <div className={a.temperaturasCiudades}>
            <Temperature tag="Min:" temp={min} />
            <Temperature tag="Max:" temp={max} />
          </div>
          <div className={a.parametrosEsp}>
            <p>
              {" "}
              Pressure: <br /> {pressure} hPa{" "}
            </p>
            <p>
              {" "}
              Wind: <br /> {wind} m/s{" "}
            </p>
            <p>
              {" "}
              Humidity: <br /> {humidity} %{" "}
            </p>
          </div>
          <img
            className={!primary ? `${a.imagenCiudad}` : ''}
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt="'Weather Icon'"
          />
        </span>
      </div>
    </div>
  );
}
