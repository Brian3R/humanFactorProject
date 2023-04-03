
import './App.css';

//function change

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import AddItem from './components/AddItem';
import Generator from './components/Generator';
import Inventory from './components/Inventory';

function App() {

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
