import React from "react";
import { useState } from "react";
// import Axios 
import Axios from "axios";

type AppProps = {
  whereLog: any;
  setWhereLog: any;
};

function FormRegister( {whereLog ,setWhereLog}: AppProps ) {
  const [inputUsername  , setinputUsername] = useState<string >('');
  const [inputPassword  , setinputPassword] = useState<string >('');

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setinputUsername(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setinputPassword(event.target.value);
  };

  const AxiosInstance = Axios.create({ baseURL: "http://localhost:2345" });

  const submit = (e:any) => {
    
    // const headers = new Headers({
    //   "Content-Type": "application/x-www-form-urlencoded",
    //   "Authorization": "Basic " + btoa(inputUsername + ":" + inputPassword),
    // });


    const body = new URLSearchParams({
      username: inputUsername,
      password: inputPassword,
      type: 'Register'
    });

    AxiosInstance.post("/",
    {
      withCreditentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic " + btoa(inputUsername + ":" + inputPassword),
      },
      body: body,
      mode: "cors"
    })
    .then(response => {
      console.log(response);
      setWhereLog('Login');
    })
    .catch(err => console.log(err));

    e.preventDefault();  
  }
  const handleConnexion = (e:any) => {
    setWhereLog('Login');
  }

  return (
    <form onSubmit={submit} className="form-signin" style={{marginRight: '150px', marginLeft: '150px'}}>
      {/* form title Register */}
      <h1 className="h3 mb-3 font-weight-normal">Inscription</h1>
      <div className="form-group">
        <label  htmlFor="inputUsername">Username</label>
        <input type="text" className="form-control" id="inputUsername" onChange={handleUsername} required/>
      </div>
      <br/>
      <div className="form-group">
        <label htmlFor="inputPassword">Password</label>
        <input type="password" className="form-control" id="inputPassword" placeholder="Password"onChange={handlePassword} required/>
      </div>
      <br/>
      <br/>
      {/* margin */}
      {/* div flex  */}
      <div className="d-flex justify-content-between align-items-center">
        <button type="submit" className="btn btn-primary">S'inscrire</button>

        <button className="btn btn-primary" onClick={handleConnexion}>Se connecter ?</button>
      </div>
    </form>
    
  );
}

export default FormRegister;