import React from 'react';
import '../App.css';
import FormRegister from './Form';
import FormLogin from './FormLogin';
import {useState} from 'react';

function App() {
  const [Form, setForm] = useState<string>('Login');
  // si le localstorage a un username on mets blog
  return (
    <>
    {/* ternaire pour affichier FormLogin ou FormRegister ou div oui */}
    {Form === 'Login' ? <FormLogin setForm={setForm} Form={Form}  />  : Form === 'Register' ? <FormRegister setForm={setForm} Form={Form} /> : <div>oui</div>}
      
    </>
  );
}

export default App;
