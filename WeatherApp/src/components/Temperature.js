import React from 'react'

function Temperature({tag, temp}) {
    return (
        <div>
        <span>{tag}
        <br/>
        {temp}°C</span>
      </div>
    );   
  };
  
export default Temperature;

