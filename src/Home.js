
//Componente inicial 
import './Home.css'
import { useEffect } from 'react'
import React, { useState } from 'react';

export default function Home () {

    let getData= async () => {

        let API_KEY= ''
        let URI = 'https://api.themoviedb.org/3/genre/tv/list?api+key'+API_KEY


        let data = await fetch(URI)

        let result = data.json()
        
        return result
        
    }

    useEffect( async () =>{
        getData(). then((data)=>{
        console.log(data)
        setTVs(data)
        })

    },[])


    letshowTvs = () => {
        let html= []

        tvs.genre.array.forEach(element => {
            html.push(<pre key={element.id}>
                            <label>Id:</label> <p>{element.id}</p>
                            <label>Name:</label> <p>{element.name}</p>
                     </pre>
                     )
        });
    }
    return (

       

        <div>


        <h1>Teste</h1>
        {showTvs()}

        </div>
    )
}