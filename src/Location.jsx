import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ResidentInfo from './ResidentInfo';

const Location = () => {

    const [location, setLocation] = useState({});
    const [search, setSearch] = useState("");

    useEffect(() => {
        const random = Math.floor(Math.random() * 120) + 1;
        axios.get(`https://rickandmortyapi.com/api/location/${random}/`)
            .then((res) => setLocation(res.data));
    }, []);

    const searchType = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${search}/`)
            .then((res) => setLocation(res.data));
    }
    // location.residents


    console.log(location)
    return (

        <div className='contenedor-padre'>
            <div className='input'>
                <input className='input-text' type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className='button'>
                <button onClick={searchType}><i className="fa-solid fa-magnifying-glass" style={{ fontSize: "xx-large", color: "rgba(252, 3, 243, 0.621)" }} ></i> </button>
            </div>
            <div className='contenedor-hijo'>
                <br />
                <ul className='ul-main'>
                    <li>Name: <br />  {location.name}</li>
                    <li>Type: <br />  {location.type}</li>
                    <li>Dimension: <br />  {location.dimension}</li>
                    <li>Episodes: <br />  {
                        location.residents?.length}</li>
                </ul>
                <div className='cards'>
                    {location.residents?.map(character => (

                        <ResidentInfo character={character} key={character} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Location;