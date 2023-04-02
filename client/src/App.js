
import './App.css';
import {useState, useEffect} from "react";
//function change
import { getTest } from "./functions/test";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import AddItem from './components/AddItem';
import Generator from './components/Generator';
import Inventory from './components/Inventory';

function App() {
  /*
  const [data, setData] = useState('Hello World!');

  useEffect(() =>{
    getTest()
    .then((res) => {
      setData(res.message);
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>{data}</h1>
     
    </div>
  );*/
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/additem" element={<AddItem/>}/>
        <Route path="/generator" element={<Generator/>}/>
        <Route path="/inventory" element={<Inventory/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
