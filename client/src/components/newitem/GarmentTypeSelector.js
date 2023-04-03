import React from 'react';
import {useState} from 'react';
import TopDropdown from './dropdowns/TopDropdown';
import BottomDropdown from './dropdowns/BottomDropdown';
import ShoeDropdown from './dropdowns/ShoeDropdown';
import HatDropdown from './dropdowns/HatDropdown';
import OuterwearDropdown from './dropdowns/OuterwearDropdown';

const GarmentTypeSelector = (props) => {
    const types = ["Hat","Outerwear","Top","Bottom","Shoe"];
    const handleChange = (event) => {
        props.onChange(event.target.value);
    }
    return (
        <div>
            <select onChange={handleChange}>
                <option value = "">Select a garment type</option>
                {types.map((type) => (
                    <option key={type} value={type}>{type}</option>
                ))}
            </select>
        </div>
    );
}

export default GarmentTypeSelector;