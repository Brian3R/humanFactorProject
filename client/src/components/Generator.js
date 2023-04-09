import React from 'react';
import Navbar from './Navbar';
import {useState, useEffect} from 'react';
import generation from '../functions/generation';
import outfitScoreChanger from '../functions/outfitScoreChanger';


const Generator = () => {
    const [inventory, setInventory] = useState([]);
    const [indexes, setIndexes] = useState(null);
    const [alreadyLiked, setAlreadyLiked] = useState(false);
    useEffect(() => {
        fetchInventory();
    },[]);
    const fetchInventory = async () => {
        const response = await fetch('http://localhost:8080/api/test/'+ sessionStorage.getItem('userid'));
        const responseParsed = await response.json();
        setInventory(responseParsed.inventory);
    }
    const handleGeneration = () => {
        setIndexes(generation(inventory));
        setAlreadyLiked(false);
    }
    const handleLike = () => {
        if(!alreadyLiked) {
            outfitScoreChanger(indexes.top,indexes.bottom,indexes.shoes,true);
            setAlreadyLiked(true);
        }
    }
    const handleDislike = async () => {
        await outfitScoreChanger(indexes.top,indexes.bottom,indexes.shoes,false);
        window.location.reload(true);
    }
    const translateType = (type) => {
        switch(type) {
            case 'ls_tee': return 'Long-Sleeve Tee';
            case 'ss_tee': return 'Short-Sleeve Tee';
            case 'jeans': return 'Jeans';
            case 'shorts': return 'Shorts';
            case 'sweatpants': return 'Sweatpants';
            case 'running_shoes': return 'Running Shoes';
            case 'high_tops': return 'High-top Sneakers';
            case 'low_tops': return 'Low-top Sneakers';
            default: return type;
        }
    }
    const tableStyle = {
        borderCollapse: 'collapse',
    };

    const cellStyle = {
        width: '150px',
        border: '2px solid black',
        padding: '8px',
        backgroundColor:'#ffffff'
    };
    if(!localStorage.getItem('userid')) {
        return (
            <div style={{height:'100vh',width:'100vw',backgroundColor:'#a9d1cc'}}>
                <div style={{width: '800px', margin: '0 auto'}}>
                    <Navbar/>
                    <p>Please log in!</p>
                </div>
            </div>
        );
    }
    if(!(inventory && inventory[1] && inventory[2] && inventory[3])) {
        return (
            <div style={{height:'100vh',width:'100vw',backgroundColor:'#a9d1cc'}}>
                <div style={{width: '800px', margin: '0 auto'}}>
                    <Navbar/>
                    <p>Please put at least one item in each category (top, bottom, shoes)</p>
                </div>
            </div>
        );
    }
    return (
        <div style={{height:'100vh',width:'100vw',backgroundColor:'#a9d1cc'}}>
            <div style={{width: '800px', margin: '0 auto'}}>
                <Navbar/>
                <h1>
                    Generator!
                </h1>
                <button onClick={handleGeneration}>Make me an outfit</button>
                <br/>
                <h2>Outfit:</h2>
                {indexes && inventory &&
                    <div>
                        <table style={tableStyle}>
                            <thead>
                                <tr>
                                    <th style={cellStyle}>Name</th>
                                    <th style={cellStyle}>Type</th>
                                    <th style={cellStyle}>Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr key={inventory[0][indexes.top].title}>
                                    <td style={cellStyle}>{inventory[0][indexes.top].title}</td>
                                    <td style={cellStyle}>{translateType(inventory[0][indexes.top].clothing_type)}</td>
                                    <td style={cellStyle}>{inventory[0][indexes.top].color}</td>                                
                                </tr>
                                <tr key={inventory[1][indexes.bottom].title}>
                                    <td style={cellStyle}>{inventory[1][indexes.bottom].title}</td>
                                    <td style={cellStyle}>{translateType(inventory[1][indexes.bottom].clothing_type)}</td>
                                    <td style={cellStyle}>{inventory[1][indexes.bottom].color}</td>                                
                                </tr>
                                <tr key={inventory[2][indexes.shoes].title}>
                                    <td style={cellStyle}>{inventory[2][indexes.shoes].title}</td>
                                    <td style={cellStyle}>{translateType(inventory[2][indexes.shoes].clothing_type)}</td>
                                    <td style={cellStyle}>{inventory[2][indexes.shoes].color}</td>                                
                                </tr>
                            </tbody>
                        </table>
                        {!alreadyLiked && <button onClick={handleLike}>I like this outfit</button>}
                        {!alreadyLiked && <button onClick={handleDislike}>I don't like this outfit</button>}
                    </div>
                }
            </div>
        </div>
    );
}

export default Generator;