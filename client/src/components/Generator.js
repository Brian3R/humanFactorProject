import React from 'react';
import Navbar from './Navbar';
import {useState} from 'react';


const Generator = () => {
    const [outfit, setOutfit] = useState(null);
    const handleGeneration = () => {
        setOutfit(/*result of generator function*/)
    }
    return (
        <div>
            <Navbar/>
            <h1>
                Generator!
            </h1>
            <button onClick={handleGeneration}>Make me an outfit</button>
            <br/>
            <h2>Outfit:</h2>
            {outfit &&
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={cellStyle}>Name</th>
                        <th style={cellStyle}>Type</th>
                        <th style={cellStyle}>Color</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={outfit.top.title}>
                        <td style={cellStyle}>{outfit.top.title}</td>
                        <td style={cellStyle}>{translateType(outfit.top.clothing_type)}</td>
                        <td style={cellStyle}>{outfit.top.color}</td>                                
                    </tr>
                    <tr key={item.title}>
                        <td style={cellStyle}>{item.title}</td>
                        <td style={cellStyle}>{translateType(item.clothing_type)}</td>
                        <td style={cellStyle}>{item.color}</td>                                
                    </tr>
                    <tr key={item.title}>
                        <td style={cellStyle}>{item.title}</td>
                        <td style={cellStyle}>{translateType(item.clothing_type)}</td>
                        <td style={cellStyle}>{item.color}</td>                                
                    </tr>
                </tbody>
            </table>}
        </div>
    );
}

export default Generator;