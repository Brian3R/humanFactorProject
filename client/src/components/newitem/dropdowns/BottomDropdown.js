import React from 'react';
import {useState} from 'react';

const BottomDropdown = (props) => {
    const subtypes = ["Jeans","Sweatpants","Athletic Shorts","Slacks","Cargo Pants"]
    const handleChange = (event) => {
        props.onChange(event.target.value);
    }
    return (
        <div>
            <select onChange={handleChange}>
                <option value="">Select a subtype of bottom</option>
                {subtypes.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

export default BottomDropdown;