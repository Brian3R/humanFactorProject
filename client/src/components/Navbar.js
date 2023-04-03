import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/additem">Add Item</Link></li>
                <li><Link to="/generator">Generator</Link></li>
                <li><Link to="/inventory">Inventory</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;