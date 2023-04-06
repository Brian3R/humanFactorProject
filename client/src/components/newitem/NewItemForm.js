import React from 'react';
import {useState} from 'react';

import SubmitButton from './SubmitButton';

const NewItemForm = () => {
    //state variables
    const [name, setName] = useState('');
    const [region, setRegion] = useState(-1);
    const [type, setType] = useState('');
    const [color, setColor] = useState('');
    const [description, setDescription] = useState('');
    //state change handlers
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleRegionChange = (event) => {
        setRegion(parseInt(event.target.value));
        console.log(region)
    }
    const handleTypeChange = (event) => {
        setType(event.target.value);
    }
    const handleColorChange = (event) => {
        setColor(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(name);
        console.log(region);
        console.log(type);
        console.log(color);
        console.log(description);
        try {
            const response = await fetch('http://localhost:8080/api/test/642dc9ec198dd112318461c1');
            const user = await response.json();
            const newItem = {
                title: name,
                clothing_type: type,
                body_region: region,
                color: color,
                favorability: 2
            };
            user.inventory[region].push(newItem);
            const updateResponse = await fetch('http://localhost:8080/api/test/642dc9ec198dd112318461c1', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const updatedUser = await updateResponse.json();
            console.log(updatedUser);
            setName('');
            setType('');
            setRegion(-1);
            setColor('');
        }
        catch (error) {
            console.error(error);
        }
    }
    const renderTypeDropdown = () => {
        switch(region) {
            case 0:
                return (
                    <select onChange={handleTypeChange}>
                        <option value={''}>Select a type</option>
                        <option value={'ss_tee'}>Short Sleeve Tee</option>
                        <option value={'ls_tee'}>Long Sleeve Tee</option>
                    </select>
                )
            case 1:
                return (
                    <select onChange={handleTypeChange}>
                        <option value={''}>Select a type</option>
                        <option value={'shorts'}>Shorts</option>
                        <option value={'jeans'}>Jeans</option>
                        <option value={'sweatpants'}>Sweatpants</option>
                    </select>
                )
            case 2:
                return (
                    <select onChange={handleTypeChange}>                        
                        <option value={''}>Select a type</option>
                        <option value={'running_shoes'}>Running Shoes</option>
                        <option value={'low_tops'}>Low Top Sneakers</option>
                        <option value={'high_tops'}>High Top Sneakers</option>
                    </select>
                )
            default:
                return null;
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your garment name:</label>
            <br/>
            <input type="text" value={name} onChange={handleNameChange}/>
            <br/>
            <label>Select your item's body region:</label>
            <br/>
            <select onChange={handleRegionChange}>
                <option value={'-1'}>Select a region</option>
                <option value={'0'}>Top</option>
                <option value={'1'}>Bottom</option>
                <option value={'2'}>Shoes</option>
            </select>
            <br/>
            {region !== -1 && <label>Select your item's type:</label>}
            <br/>
            {renderTypeDropdown()}
            <br/>
            <label>Select your garment's color:</label>
            <br/>
            <select onChange={handleColorChange}>
                <option value={''}>Select a color</option>
                <option value={'red'}>Red</option>
                <option value={'orange'}>Orange</option>
                <option value={'yellow'}>Yellow</option>
                <option value={'green'}>Green</option>
                <option value={'blue'}>Blue</option>
                <option value={'purple'}>Purple</option>
                <option value={'white'}>White</option>
                <option value={'gray'}>Gray</option>
                <option value={'black'}>Black</option>
            </select>
            <br/>
            <SubmitButton/>
        </form>
    );
}

export default NewItemForm;