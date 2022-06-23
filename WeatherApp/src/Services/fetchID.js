const apiKey = process.env.REACT_APP_APIKEY;

export default function fetchID(id, setData) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`)
    .then((r) => r.json())
    .then((recurso) => {
      if (recurso.main !== undefined) {
        
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          pressure: recurso.main.pressure,
          humidity: recurso.main.humidity,
          temp: recurso.main.temp,
          feelslike: recurso.main.feels_like,
          img: recurso.weather[0].icon,
          weather: recurso.weather[0].main,
          weatherdesc: recurso.weather[0].description,
          id: recurso.id,
          wind: recurso.wind.speed,
          winddegree: recurso.wind.deg,
          name: recurso.name,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon,
          visibility: recurso.visibility,
          timezone: recurso.timezone,
          country: recurso.sys.country,
          sunrise: recurso.sys.sunrise,
          sunset: recurso.sys.sunset,
        };
        setData(ciudad);
      } else {
        setData((prevData) => {
          return prevData;
        });
      }
    });
}
