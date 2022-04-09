import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


function AllArticles() {
    // use effect pour fetch les articles
    const [articles, setArticles] = useState<any>([]);
    useEffect(() => {
        fetch('http://localhost:2345/articles.php')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(err => console.log(err));
    }, []);

    

  return (
    <>
    <h1>Liste des articles</h1>
    <ul>
        {articles.map((article: any) => (
            <li key={article.id}>
                <h2>{article.titre}</h2>
                <p>{article.contenu}</p>
                <span>{article.date}</span>
            </li>
        ))}
    </ul>
    </>
  );
}

export default AllArticles;
