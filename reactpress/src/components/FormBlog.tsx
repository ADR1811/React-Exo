import React from 'react';
import {useState} from 'react';

function FormBlog(props: any ) {
    const [inputTitre  , setinputTitre] = useState<string >('');
    const [inputContenu  , setinputContenu] = useState<string >('');

    const handleTitre = (event: React.ChangeEvent<HTMLInputElement>) => {
        setinputTitre(event.target.value);
    };
    const handleContenu = (event: React.ChangeEvent<HTMLInputElement>) => {
        setinputContenu(event.target.value);
    };
    const submit = (e:any) => {
        e.preventDefault();
        fetch('http://localhost:2345/createArticles.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({ 
                titre: inputTitre,
                contenu: inputContenu,
            }),
            mode : 'cors'
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));


    }
    

  return (
    <form onSubmit={submit} className="form-signin" style={{marginRight: '150px', marginLeft: '150px'}}>
        {/* form title Login */}
        <h1 className="h3 mb-3 font-weight-normal">Créer un article</h1>
        <div className="form-group">
            <label  htmlFor="inputTitle">Titre</label>
            <input type="text" className="form-control" id="inputTitle" onChange={handleTitre} required/>
        </div>
        <br/>
        <div className="form-group">
            <label htmlFor="inputContent">Contenu</label>
            <input className="form-control" id="inputContent" onChange={handleContenu} required/>
        </div>
        <br/>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Créer</button>
    </form>

  );
}

export default FormBlog;
