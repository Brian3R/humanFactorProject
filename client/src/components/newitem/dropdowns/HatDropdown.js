import React from 'react';
import {useState} from 'react';

const HatDropdown = (props) => {
    const subtypes = ["Baseball Cap","Cowboy Hat","Beanie","Bucket Hat"]
    const handleChange = (event) => {
        props.onChange(event.target.value);
    }
    return (
        <div>
            <select onChange={handleChange}>
                <option value="">Select a subtype of hat</option>
                {subtypes.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

export default HatDropdown;