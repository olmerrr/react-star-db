import React, {Component} from "react";
import Header from "../header/header";
import RandomPlanet from "../random-planet";
import SwapiService from './../../services/swapi-services';
import PeoplePage from './people-page/people-page';
import ErrorIndicator from '../error-indicator';

export default class App extends Component {
swapiService = new SwapiService();
    state = {
    selectedPerson: 2,
    hasError: false
};
componentDidCatch(){
    this.setState({
        hasError: true
    })
}

    render() {
        if(this.state.hasError){
            return <ErrorIndicator/>
        }
        return (
            <div>
                <Header/>
                <RandomPlanet/>
                <PeoplePage/>
            </div>
        )
    }
};
