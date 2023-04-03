import React from 'react';
import {useState} from 'react';

const ShoeDropdown = (props) => {
    const subtypes = ["Sneaker","Dress Shoe","Running Shoe","Sandal","Boot"];
    const handleChange = (event) => {
        props.onChange(event.target.value);
    }
    return (
        <div>
            <select onChange={handleChange}>
                <option value="">Select a subtype of shoe</option>
                {subtypes.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

export default ShoeDropdown;