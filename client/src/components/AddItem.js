import React from 'react';
import Navbar from './Navbar';
import NewItemForm from './newitem/NewItemForm';

const AddItem = () => {
    return(
        <div style={{height:'100vh',width:'100vw',backgroundColor:'#a9d1cc'}}>
            <div style={{width: '700px', margin: '0 auto'}}>
                <Navbar/>
                <h1>
                    Add Item!
                </h1>
                <NewItemForm/>
            </div>
        </div>
    );
}

export default AddItem;