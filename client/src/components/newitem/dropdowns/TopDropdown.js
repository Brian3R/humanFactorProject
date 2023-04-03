import React from 'react';
import {useState} from 'react';

const TopDropdown = (props) => {
    const subtypes = ["Short Sleeve Tee","Long Sleeve Tee","Dress Shirt","Hawaiian Shirt","Polo Shirt"]
    const handleChange = (event) => {
        props.onChange(event.target.value);
    }
    return (
        <div>
            <select onChange={handleChange}>
                <option value="">Select a subtype of top</option>
                {subtypes.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

export default TopDropdown;