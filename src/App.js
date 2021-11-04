import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Add from './Pages/Add';
import View from './Pages/View';
import Header from './Components/Header';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Header></Header>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/add" component={Add}></Route>
          <Route path="/view/:id" component={View}></Route>

        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
