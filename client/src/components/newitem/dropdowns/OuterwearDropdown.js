import React from 'react';
import {useState} from 'react';

const OuterwearDropdown = (props) => {
    const subtypes = ["Hoodie","Bomber Jacket","Puffer","Blazer","Flannel","Windbreaker"]
    const handleChange = (event) => {
        props.onChange(event.target.value);
    }
    return (
        <div>
            <select onChange={handleChange}>
                <option value="">Select a subtype of outerwear</option>
                {subtypes.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

export default OuterwearDropdown;