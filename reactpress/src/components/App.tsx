import React from 'react';
import '../App.css';

import ControllerLogin from './ControllerLogin';
import FormBlog from './FormBlog';
import AllArticles from './AllArticles';
import {useState} from 'react';

function App() {
  const [Form, setForm] = useState<string>('Login');
  // si le localstorage a un username on mets blog
  // if cookie token setForm('Blog')
  if (document.cookie.includes("token=")) {
    setForm('Blog');
  }
  return (
    // si aucun cookie token n'existe on affiche <FormLogin>  
    <>
      {/* {Form === 'Login' ? <ControllerLogin setForm={setForm} Form={From} /> : null}
      {Form === 'Blog' ? <FormBlog setForm={setForm}/> : null} */}
      <ControllerLogin setForm={setForm} Form={Form} />
      <AllArticles/>
    </>
  );
}

export default App;
