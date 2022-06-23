import React from 'react';
import Card from './Card.jsx';
import a from './Cards.module.css';


export default function Cards({cities, onClose}) {

  return ( 
  <div className={a.tarjetasCiudades}>
    {cities.map((ciudad) => (
      <Card 
      key={ciudad.id} 
      idCiudad={ciudad.id}
      name={ciudad.name}
      min={ciudad.min}
      max={ciudad.max}
      img={ciudad.img}
      onClose={() => onClose(ciudad.id)}
      />
    ))}
  </div>
  );
};