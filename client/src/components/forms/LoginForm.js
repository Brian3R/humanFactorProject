import React from 'react';
import {useState} from 'react';
import SubmitButton from '../newitem/SubmitButton';


const LoginForm = () => {
    //state variables
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    //state change handlers
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const check = await fetch('http://localhost:8080/api/test/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, password})
            
        });
        const data = await check.json();
        if(data.success){
        try {
            const response = await fetch('http://localhost:8080/api/test/search/' + name, {
                /*
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },*/
                
            });
            let user = await response.json();
            setName('');
            setPassword('');
            localStorage.setItem('userid', user._id)
        }
        catch (error) {
            console.error(error);
        }
        window.location.reload(true);
        console.log("User Id: " + localStorage.getItem('userid'))
        }
        else{
            
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your Username:</label>
            <br/>
            <input type="text" value={name} onChange={handleNameChange}/>
            <br/>
            <label>Enter your Password:</label>
            <br/>
            <input type="text" value={password} onChange={handlePasswordChange}/>
            <br/>
            <SubmitButton/>
        </form>
    );
}

export default LoginForm;
