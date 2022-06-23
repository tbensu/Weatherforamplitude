import React from "react";
import "./normalize.css";
import "./index.css";
import a from "./components/App.module.css";
import fetchCity from "./Services/fetchCity";
import fetchCoord from "./Services/fetchCoord";
import { Route } from "react-router-dom";
import Cities from "./Views/Cities";
import CityDetail from "./Views/CityDetail";
import About from "./Views/About";
import Nav from "./components/Nav.js";

function App() {
  const [data, setData] = React.useState([]);

  function onSearch(ciudad) {
    if (data.length > 6) {
      alert("Máximo de Ciudades Alcanzado");
    } else {
      fetchCity(ciudad, setData);
    }
  }

  function handleOnClose(id) {
    setData((prevData) => {
      return prevData.filter((ciudad) => ciudad.id !== id);
    });
  }
  
  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        fetchCoord(pos.coords.latitude, pos.coords.longitude, setData);
      });
    }
  }, []);

  return (
    <div className={a.app}>
      <span className={a.tituloAPP}>Tori Weather</span>
      <div className={a.bkg} />
      <div className={a.container}>
        <Route path="/" exact strict>
          <Cities
            data={data}
            handleOnClose={handleOnClose}
            onSearch={onSearch}
          />
        </Route>
        <Route path="/about" exact strict>
          <About />
        </Route>
        <Route
          path="/city/:id"
          exact
          render={({ match, history }) => {
            const id = parseInt(match.params.id);
            return (
              <CityDetail id={id} onBack={history.goBack} />
            );
          }}
        />
      </div>
      <Route path="/" component={Nav} />
      <span className={a.fechayhora} id="ct"></span>
    </div>
  );
}

export default App;
