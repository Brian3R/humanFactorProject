import React from 'react';
import Navbar from './Navbar';

//example json


const Generator = () => {
    const handleGeneration = () => {

    }
    return (
        <div>
            <Navbar/>
            <h1>
                Generator!
            </h1>
            <button onClick={handleGeneration}>Make me an outfit</button>
        </div>
    );
}

export default Generator;