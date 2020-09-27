import React, {Component} from "react";
import Header from "../header/header";
import RandomPlanet from "../random-planet";
import SwapiService from './../../services/swapi-services';
import PeoplePage from './people-page/people-page';
import ErrorIndicator from '../error-indicator';
import PersonDetails from './../person-details/person-details';
import ItemList from './../item-list/item-list';
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
                <div className="row mb2">
                  <div className="col-md-6">
                    <ItemList
                      getData={this.swapiService.getAllPlanets}
                      onItemSelected={this.onPersonSelected}
                      />
                  </div>
                  {/* <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                  </div> */}
                 </div>
        
                 <div className="row mb2">
                  <div className="col-md-6">
                    <ItemList
                      getData={this.swapiService.getAllStarships}
                      onItemSelected={this.onPersonSelected}
                      />
                  </div>
                  {/* <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                  </div> */}
                 </div>
            </div>
        )
    }
};
