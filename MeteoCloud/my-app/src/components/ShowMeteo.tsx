import React from 'react';


function ShowMeteo( props: { meteo: any[any] } ) {
    console.log(props.meteo)
  return (
      <div>
          {props.meteo.hasOwnProperty('current') && 
            <div>
                <h1>{props.meteo.location.name} {props.meteo.location.country}</h1>
                <h1>{props.meteo.current.temp_c}</h1>
                
            </div>  }
          
      </div>
  );
}

export default ShowMeteo;