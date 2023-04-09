import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{paddingTop:'30px',paddingBottom:'30px'}}>
            <ul style={{display:'flex',listStyle:'none'}}>
                <li style={{marginRight:'30px'}}><Link to="/">Home</Link></li>
                <li style={{marginRight:'30px'}}><Link to="/additem">Add Item</Link></li>
                <li style={{marginRight:'30px'}}><Link to="/generator">Generator</Link></li>
                <li style={{marginRight:'30px'}}><Link to="/inventory">Inventory</Link></li>
                <li style={{marginRight:'30px'}}><Link to="/signUp">Sign UP</Link></li>
                <li style={{marginRight:'30px'}}><Link to="/login">Login</Link></li>
                <li style={{marginRight:'30px'}}>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeZD0URjf3DPHifbo9XJ31qVJtI39PFpCiI5qz_bF5_WernDQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                        User Survey
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;