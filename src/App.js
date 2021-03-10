import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeScene from './scenes/HomeScene';
import MoviesScene from './scenes/MoviesScene';
import SeriesScene from './scenes/SeriesScene';
import '../assets/css/main.scss';

const App = () => {
  return (
    <>
      <Header />

      <main>
        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/">
                <HomeScene />
              </Route>
              <Route path="/movies">
                <MoviesScene />
              </Route>
              <Route path="/series">
                <SeriesScene />
              </Route>
            </Switch>
          </Router>
        </div>

      </main>

      <Footer />
    </>
  );
};

export default App;
