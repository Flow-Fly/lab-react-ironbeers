import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import ListBeers from './Pages/ListBeers/ListBeers';
import SingleBeer from './Pages/SingleBeer/SingleBeer';
import RandomBeer from './Pages/RandomBeer/RandomBeer';
import NewBeer from './Pages/NewBeer/NewBeer';

// https://ih-beers-api2.herokuapp.com/beers
//   GET	/	[beers]	Get all
// GET	/:id	{ beer }	Get a single
// GET	/random	{ beer }
// POST	/new	{ message: "New beer successfully saved to database!"}	Create a new beer (the fields are specified in the instructions)
// GET	/search?q={query}	[beers]	Get beers from the DB whose name contains the search term. For example /search?q=lager searches for all beers with lager in the name.
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={ListBeers} />
        <Route exact path="/beer/:id" component={SingleBeer} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />

        <Route path="/" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
