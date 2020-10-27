//React
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home'
import Header from './components/Header'
import SearchPage from './components/SearchPage'

function App() {
  return (
    <div>
     <Router>
        <Header />
        
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ Router>
    </div>
  );
}

export default App;
