import React from 'react';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div style={{height:'100vh',width:'100vw',backgroundColor:'#a9d1cc'}}>
            <div style={{width: '700px', margin: '0 auto'}}>
                <Navbar/>
                <h1>
                    Home!
                </h1>
            </div>
        </div>
    );
}

export default Home;