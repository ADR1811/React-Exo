import React from 'react';


function FetchData(props: { inputForm: string, setMeteo: React.Dispatch<React.SetStateAction<object>> , meteo: object }) {
    let key : string = "f3dff119f4f541708d7134027220404"
    let url :string ="http://api.weatherapi.com/v1/current.json?key="+key+"&q="+props.inputForm+"&aqi=no"
    fetch(url)
    .then(response => response.json())
    .then(data => {
        props.setMeteo(data)
        console.log(data)
    })
    .catch(error => console.log(error))
    // return response.json()
    return(
        <span></span>
    );
}

export default FetchData;