import React from 'react';
import Navbar from './Navbar'
import {useState} from 'react';

//example json:
let userDataJSON = '{"inventory": [ [{"title": "Red Shirt with square","clothing_type": "shirt","body_region": 0,"color": "Red","favorability": 2}],'+
'[{"title": "jeans","clothing_type": "pants","body_region": 1,"color": "blue","favorability": 2},'+
'{"title": "jeans","clothing_type": "pants","body_region": 1,"color": "blue","favorability": 2}],'+
'[{"title": "boots","clothing_type": "shoes","body_region": 2,"color": "blue","favorability": 2}]]}'

const Inventory = () => {
    const [data,setData] = useState([]);

    useState(() => {
        setData(JSON.parse(userDataJSON).inventory);
    },[]);

    const tableStyle = {
        borderCollapse: 'collapse',
    };

    const cellStyle = {
        width: '150px',
        border: '2px solid black',
        padding: '8px'
    };

    return (
        <div>
            <Navbar/>
            <h1>
                Inventory!
            </h1>
            <h2>
                Tops:
            </h2>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={cellStyle}>Name</th>
                        <th style={cellStyle}>Type</th>
                        <th style={cellStyle}>Color</th>
                        <th style={cellStyle}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {data[0] && data[0].map((item) => (
                            <tr key={item.title}>
                                <td style={cellStyle}>{item.title}</td>
                                <td style={cellStyle}>{item.clothing_type}</td>
                                <td style={cellStyle}>{item.color}</td>
                                <td style={cellStyle}>{item.description}</td>
                            </tr>
                    ))}
                </tbody>
            </table>
            <h2>
                Bottoms:
            </h2>
            <table>
                <thead>
                    <tr>
                        <th style={cellStyle}>Name</th>
                        <th style={cellStyle}>Type</th>
                        <th style={cellStyle}>Color</th>
                        <th style={cellStyle}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {data[1] && data[1].map((item) => (
                            <tr key={item.title}>
                                <td style={cellStyle}>{item.title}</td>
                                <td style={cellStyle}>{item.clothing_type}</td>
                                <td style={cellStyle}>{item.color}</td>
                                <td style={cellStyle}>{item.description}</td>
                            </tr>
                    ))}
                </tbody>
            </table>
            <h2>
                Shoes:
            </h2>
            <table>
                <thead>
                    <tr>
                        <th style={cellStyle}>Name</th>
                        <th style={cellStyle}>Type</th>
                        <th style={cellStyle}>Color</th>
                        <th style={cellStyle}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {data[2] && data[2].map((item) => (
                            <tr key={item.title}>
                                <td style={cellStyle}>{item.title}</td>
                                <td style={cellStyle}>{item.clothing_type}</td>
                                <td style={cellStyle}>{item.color}</td>
                                <td style={cellStyle}>{item.description}</td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Inventory;