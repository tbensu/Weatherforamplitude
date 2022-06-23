import React from "react";
import fetchID from "../Services/fetchID";
import a from "../Views/CityDetail.module.css";
import Temperature from "../components/Temperature";
// import fetchCoord from "../Services/fetchCoord"

function CityDetail({ id, onBack }) {
  // const [data, setData] = React.useState([]);
  const [ciudad, setCiudad] = React.useState();

  React.useEffect(() => {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition((pos) => {
    //     fetchCoord(pos.coords.latitude, pos.coords.longitude, setData);
    //   });
    // }
    fetchID(id, setCiudad);
  }, [id, setCiudad]);

  function dameElNombreLisa(code) {
    let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    return regionNames.of(code);
  }

  // function convertTZ (ctz, ltz) {
  //   if(ctz === undefined) return false;
  //   else if (ctz === ltz) return 0;
  //   else return Math.abs((ctz - ltz));
  // }

  function devuelveBien(unixtime) {
    let date = new Date(unixtime * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let formattedTime = hours + ":" + minutes.substr(-2);
    return formattedTime;
  }

  function devuelveTimeZone(tz) {
    let timezone = tz / 3600;
    let negativo = false;
    if (timezone < 0) {
      negativo = true;
    }
    if (negativo === false) {
      if (timezone < 10 && timezone >= 0) {
        timezone = "+0" + timezone;
      }
    } else {
      timezone = -timezone;
      if (timezone < 10 && timezone >= 0) {
        timezone = "-0" + timezone;
      }
    }
    return timezone + ":00";
  }

  function orientacionViento(d) {
    if ((d >= 0 && d < 22.5) || (d >= 337.5 && d < 360)) return "North";
    else if (d >= 22.5 && d < 67.5) return "(North-East)";
    else if (d >= 67.5 && d < 112.5) return "(East)";
    else if (d >= 112.5 && d < 157.5) return "(South-East)";
    else if (d >= 157.5 && d < 202.5) return "(South)";
    else if (d >= 202.5 && d < 247.5) return "(South-West)";
    else if (d >= 247.5 && d < 292.5) return "(West)";
    else if (d >= 292.5 && d < 337.5) return "(North-West)";
  }

  return (
    <>
      <button onClick={onBack} className={a.botonDetail}>
        Go Back
      </button>
      <div className={a.tarjetaCiudadEsp}>
        {ciudad === undefined && <h2>Loading...</h2>}
        {ciudad === null && <h2>City not found</h2>}
        {ciudad && (
          <>
            <div className={a.nombreCiudad}>{ciudad.name}</div>
            <span className={a.pais}>
              <span className={a.paisito}>
                <div className={a.paisito_pais}>
                  Country: {dameElNombreLisa(ciudad.country)}
                </div>
                <div>Country Code: {ciudad.country}</div>
              </span>

              <span className={a.peque}>
                <div>Latitude: {ciudad.latitud}</div>
                <div>Longitude: {ciudad.longitud}</div>
              </span>
            </span>
            <div className={a.temperaturaaaas}>
              <span className={a.temperaturasPro}>
                <div className={a.tempEspecial}>
                  <Temperature
                    tag="Temperature:"
                    temp={Math.round(ciudad.temp * 10) / 10}
                  />
                </div>
                <div className={a.tempEspeciale}>
                  <Temperature
                    tag="Feels Like:"
                    temp={Math.round(ciudad.feelslike * 10) / 10}
                  />
                </div>
              </span>
              <span className={a.temperaturasPro}>
                <div className={a.temperaturasCiudades}>
                  <Temperature tag="Min:" temp={ciudad.min} />
                  <Temperature tag="Max:" temp={ciudad.max} />
                </div>
              </span>
            </div>
            <span className={a.parametrosEsp}>
              <div>Pressure: {ciudad.pressure} hPa</div>
              <div>Humidity: {ciudad.humidity} %</div>
              <div>Wind: {ciudad.wind} m/s</div>
              <span className={a.centratelokita}>
                <div>Degree: {ciudad.winddegree} °</div>
                <div>{orientacionViento(ciudad.winddegree)}</div>
              </span>
            </span>
            <div className={a.riseset}>
              <span className={a.centratelokitasun}>
                <span className={a.centratelokita}>
                  <div>Sunrise (LTZ): </div>
                  {/* <div>{console.log(ctz)}</div> */}
                  {/* <div>{devuelveBien(ciudad.sunrise+convertTZ(data[0].timezone,ciudad.timezone))}</div> */}
                </span>
                <span className={a.centratelokita}>
                  <div>Sunset (LTZ): </div>
                  {/* <div>{devuelveBien(ciudad.sunset+convertTZ(data[0].timezone,ciudad.timezone))}</div> */}
                </span>
              </span>
            </div>
            <span className={a.pequetz}>
              <div>Time Zone: </div>
              <div>{devuelveTimeZone(ciudad.timezone)}</div>
            </span>
            <div className={a.riseset2}>
              <span className={a.centratelokitasun}>
                <span className={a.centratelokita}>
                  <div>Sunrise (CTZ): </div>
                  <div>{devuelveBien(ciudad.sunrise)}</div>
                </span>
                <span className={a.centratelokita}>
                  <div>Sunset (CTZ): </div>
                  <div>{devuelveBien(ciudad.sunset)}</div>
                </span>
              </span>
            </div>
            <div>
              <img
                className={a.imagenCiudad}
                src={`http://openweathermap.org/img/wn/${ciudad.img}@2x.png`}
                alt="'Weather Icon'"
              />
              <div className={a.weatherCiudad}>
                <div>{ciudad.weather}</div>
                <div>
                  {" ("}
                  {ciudad.weatherdesc.replace(/\w\S*/g, (w) =>
                    w.replace(/^\w/, (c) => c.toUpperCase())
                  )}
                  {")"}
                </div>
                <div>Clouds: {ciudad.clouds} %</div>
              </div>
              <div className={a.visibility}>
                Visibility: {ciudad.visibility} m
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CityDetail;
