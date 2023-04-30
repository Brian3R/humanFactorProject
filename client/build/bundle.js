import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../src/App';
import Home from '../src/components/Home';
import SignUp from '../src/components/SignUp';
import Login from '../src/components/Login';
import AddItem from '../src/components/AddItem';
import Inventory from '../src/components/Inventory';
import Generator from '../src/components/Generator';
const routing = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/additem" component={AddItem} />
      <Route path="/inventory" component={Inventory} />
      <Route path="/generator" component={Generator} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App>{routing}</App>, document.getElementById('root'));