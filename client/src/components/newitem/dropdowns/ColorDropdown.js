import React from 'react';
import {useState} from 'react';

const ColorDropdown = (props) => {
    const colors = ["Red","Blue","Green","Yellow","Orange","Black","White"];
    const handleChange = (event) => {
        props.onChange(event.target.value);
    }
    return(
        <div>
            <label>Select color:</label>
            <select onChange = {handleChange}>
                <option value = "">Select a color</option>
                {colors.map((color) =>(
                    <option key={color} value={color}>{color}</option>
                ))}
            </select>
        </div>
    );
}

export default ColorDropdown;