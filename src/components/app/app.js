import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';

import Row from "../row/row";
import ItemDetails, {Record} from "../item-details/item-details";
import SwapiService from "../../services/swapi-services";

import ItemList from '../item-list/item-list';
import './app.css';
import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from '../sw-components';

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

        const {
            getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage,
            getAllPeople,
            getAllPlanets
        } = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}>

                <Record field="gender" label="Gender"/>
                <Record field="eyeColor" label="Eye Color"/>
            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}>

                <Record field="model" label="Model"/>
                <Record field="length" label="Length"/>
                <Record field="costInCredits" label="Cost"/>
            </ItemDetails>
        );

        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header/>
                    <PersonList>
                        {({name}) => <span>{name}</span>}
                    </PersonList>
                    <PlanetList>
                        {({name}) => <span>{name}</span>}
                    </PlanetList>
                    <StarshipList>
                        {({name}) => <span>{name}</span>}
                    </StarshipList>
                    <PersonDetails itemId = {11}/>
                    <PlanetDetails itemId = {2}/>
                    <StarshipDetails itemId = {5}/>
                </div>
            </ErrorBoundry>
        );
    }
}
