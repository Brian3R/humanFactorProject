import React from 'react';
import {useState} from 'react';

const BottomDropdown = () => {
    const subtypes = ["Jeans","Sweatpants","Athletic Shorts","Slacks","Cargo Pants"]
    const [subtype, setSubtype] = useState('');
    const handleChange = (event) => {
        setSubtype(event.target.value);
    }
    return (
        <div>
            <select value={subtype} onChange={handleChange}>
                <option value="">Select a subtype of bottom</option>
                {subtypes.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

export default BottomDropdown;