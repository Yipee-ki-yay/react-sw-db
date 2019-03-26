import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import PeoplePage from '../people-page';
import ErrorBoundry from "../error-boundry";
import Row from '../row'
import ItemDetails from '../item-details'


import './app.css';
import SwapiService from '../../services/swapi-service';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

    const itemDetails = (
      <ItemDetails 
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      />
    );

    const starshipDetails = (
      <ItemDetails 
        itemId={5} 
        getData={getStarship}
        getImageUrl={getStarshipImage}
      />
    );

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />
          {/* { planet }

          <div className="row mb2 button-row">
            <button
              className="toggle-planet btn btn-warning btn-lg"
              onClick={this.toggleRandomPlanet}>
              Toggle Random Planet
            </button>
            <ErrorButton />
          </div>

          <PeoplePage /> */}
          <Row 
            left={itemDetails}
            right={starshipDetails}
          />

        </div>
      </ErrorBoundry>
    );
  }
}
