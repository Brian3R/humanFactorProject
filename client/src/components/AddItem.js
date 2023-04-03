import React from 'react';
import Navbar from './Navbar';
import NewItemForm from './newitem/NewItemForm';

const AddItem = () => {
    
    return(
        <div>
            <Navbar/>
            <h1>
                Add Item!
            </h1>
            <NewItemForm/>
        </div>
    );
}

export default AddItem;