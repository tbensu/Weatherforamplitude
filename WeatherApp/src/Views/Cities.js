import React from 'react'
import Cards from '../components/Cards.jsx';
import SearchBar from '../components/SearchBar.jsx';
import Card from '../components/Card.jsx';
import a from '../Views/Cities.module.css';

function Cities({data, onSearch, handleOnClose}) {
    return (
        <>
        <div>
          <SearchBar
            onSearch={onSearch}/>
        </div>
          <div className={a.cartitas}>
            <div>
                {(data.length > 0) && <Card 
                  primary
                  temp={data[0].temp}
                  max={data[0].max}
                  min={data[0].min}
                  name={data[0].name}
                  img={data[0].img}
                  wind={data[0].wind}
                  idCiudad={data[0].id}
                  pressure={data[0].pressure}
                  humidity={data[0].humidity}
                  timezone={data[0].timezone}
                  onClose={() => handleOnClose(data[0].id)}
                />}
              </div>
              <div>
            {<Cards cities={data.filter(ciudad => ciudad.name !== data[0].name)} onClose={handleOnClose}/>}
          </div>
        </div>
        </>
    )
}

export default Cities
