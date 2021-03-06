import React from "react";
import { useState } from "react";

function FormLogin( props: any ) {
    
    const [inputUsername  , setinputUsername] = useState<string >('');
    const [inputPassword  , setinputPassword] = useState<string >('');

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setinputUsername(event.target.value);
    };
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setinputPassword(event.target.value);
    };

    const handleInscription = (e:any) => {
        props.setForm('Register');
    };

    const submit = (e:any) => {
        const headers = new Headers({
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic " + btoa(inputUsername + ":" + inputPassword),
        });
        const body = new URLSearchParams({
            username: inputUsername,
            password: inputPassword,
            type: props.Form,
        });

        fetch("http://localhost:2345", {
            method: "POST",
            headers: headers,
            body: body,
            mode: "cors"
        })
            .then(response => response.json())
            //set date to localStorage in username
            .then(data => localStorage.setItem('username', data.username))
            .catch(err => console.log(err));
            
            e.preventDefault();
            if(localStorage.getItem('username')){
                props.setForm('Blog');
            }
            console.log(localStorage);
    };
    return (
        <form onSubmit={submit} className="form-signin" style={{marginRight: '150px', marginLeft: '150px'}}>
            {/* form title Login */}
            <h1 className="h3 mb-3 font-weight-normal">Connexion</h1>
            <div className="form-group">
                <label  htmlFor="inputUsername">Username</label>
                <input type="text" className="form-control" id="inputUsername" onChange={handleUsername} required/>
            </div>
            <br/>
            <div className="form-group">
                <label htmlFor="inputPassword">Password</label>
                <input type="password" className="form-control" id="inputPassword" onChange={handlePassword} required/>
            </div>
            <br/>
            <div className="d-flex justify-content-between align-items-center">
                <button type="submit" className="btn btn-primary">Se connecter</button>
                <button className="btn btn-primary" onClick={handleInscription}>S'inscrire ?</button>
            </div>
            
        </form>
    );
}

export default FormLogin;