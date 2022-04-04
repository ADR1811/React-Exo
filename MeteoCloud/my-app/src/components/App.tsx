import React from 'react';
import '../CSS/App.css';
import SearchForm from './SearchForm';
import ShowMeteo from './ShowMeteo';
import FetchData from './FetchData';
import {useEffect} from "react";
import {useState} from "react";

function App() {
  const [inputForm  , setinputForm] = useState<string >('');
  const [meteo, setMeteo] = useState<any[any]>([]);


  return (
      <div className='container'>
        <div className='form'>
          <SearchForm inputForm = {inputForm} setMeteo= {setMeteo}  setinputForm={setinputForm}/>
        </div>
        
        <div className='text-row'>
          <ShowMeteo meteo = {meteo}/>
        </div>
      </div>
  );
}

export default App;
