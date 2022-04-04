import React from 'react';
import '../CSS/App.css';
import SearchForm from './SearchForm';
import ShowMeteo from './ShowMeteo';

function App() {
  return (
      <div className='container'>
        <div className='form'>
          <SearchForm />
        </div>
        <div className='text-row'>
          <ShowMeteo />
        </div>
      </div>
  );
}

export default App;
