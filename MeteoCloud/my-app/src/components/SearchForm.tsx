import React from 'react';


function SearchForm(props: { inputForm: string, setMeteo: React.Dispatch<React.SetStateAction<any[any]>>, setinputForm: React.Dispatch<React.SetStateAction<string>> }) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // on la passe a la props
        let key : string = "f3dff119f4f541708d7134027220404"
        let url :string ="http://api.weatherapi.com/v1/current.json?key="+key+"&q="+props.inputForm+"&aqi=no"
        fetch(url)
        .then(response => response.json())
        .then(data => {
            props.setMeteo(data)
            console.log(data)
        })
    }
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value;
        props.setinputForm(inputValue)
    }   
  return (
      // input qui change le state
    <div>
        <input type="text" id = "name" onChange={handleInput}/>
        <button  onClick={handleClick}>Rechercher</button>
    </div>
    
  );
}

export default SearchForm;