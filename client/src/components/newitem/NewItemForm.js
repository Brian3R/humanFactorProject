import React from 'react';
import {useState} from 'react';
import GarmentTypeSelector from './GarmentTypeSelector';
import ColorDropdown from './dropdowns/ColorDropdown';
import SubmitButton from './SubmitButton';
import HatDropdown from './dropdowns/HatDropdown';
import OuterwearDropdown from './dropdowns/OuterwearDropdown';
import TopDropdown from './dropdowns/TopDropdown';
import BottomDropdown from './dropdowns/BottomDropdown';
import ShoeDropdown from './dropdowns/ShoeDropdown';

const NewItemForm = () => {
    const [garmentName, setGarmentName] = useState('');
    const [garmentType, setGarmentType] = useState('');
    const [garmentSubtype, setGarmentSubtype] = useState('');
    const [garmentColor, setGarmentColor] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(garmentName);
        console.log(garmentType);
        console.log(garmentSubtype);
        console.log(garmentColor)
    }
    const handleNameChange = (event) => {
        setGarmentName(event.target.value);
    }
    const handleTypeChange = (type) => {
        setGarmentType(type);
    }
    const handleSubtypeChange = (subtype) => {
        setGarmentSubtype(subtype);
    }
    const handleColorChange = (color) => {
        setGarmentColor(color);
    }
    const renderSubcategoryDropdown = () => {
        switch(garmentType) {
            case "Hat":
                return <HatDropdown onChange={handleSubtypeChange}/>
            case "Outerwear":
                return <OuterwearDropdown onChange={handleSubtypeChange}/>
            case "Top":
                return <TopDropdown onChange={handleSubtypeChange}/>
            case "Bottom":
                return <BottomDropdown onChange={handleSubtypeChange}/>
            case "Shoe":
                return <ShoeDropdown onChange={handleSubtypeChange}/>
            default:
                return <div></div>;
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your garment name:</label>
            <br/>
            <input type="text" value={garmentName} onChange={handleNameChange}/>
            <br/>
            <label>Select your garment type:</label>
            <GarmentTypeSelector onChange={handleTypeChange}/>
            {garmentType && <label>Select your garment subtype:</label>}
            {renderSubcategoryDropdown()}
            <label>Select your garment's color:</label>
            <ColorDropdown onChange={handleColorChange}/>
            <SubmitButton/>
        </form>
    );
}

export default NewItemForm;