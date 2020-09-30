import React, {Component} from "react";
import Header from "../header/header";
import RandomPlanet from "../random-planet";
import SwapiService from './../../services/swapi-services';
import PeoplePage from '../people-page/people-page';
import ErrorIndicator from '../error-indicator';
import ItemDetails, {Record} from './../item-details/item-details';
import ItemList from './../item-list/item-list';
import Row from './../row';
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
        const {getPerson, getStarship,
            getPersonImage,getStarshipImage} = this.swapiService;
        const personDetails = (
            <ItemDetails
                getData = {getPerson}
                itemId = {1}
                getImageUrl={getPersonImage}
            >
                <Record field="gender" label="Gender"/>
                <Record field="birthYear" label="Birth Year"/>
                <Record field="eyeColor" label="Eye Color"/>
            </ItemDetails>
        );
        const starshipDetails = (
            <ItemDetails
                getData = {getStarship}
                itemId = {5}
                getImageUrl={getStarshipImage}
            >
                <Record field="model" label="Model"/>
                <Record field="length" label="Length"/>
                <Record field="crew" label="Crew"/>
            </ItemDetails>
        );

        return (
            <div>
                <Header/>
                <Row
                    left={personDetails}
                    right={starshipDetails}
                />
                {/*<RandomPlanet/>*/}
                {/*<PeoplePage/>*/}
                {/* <div className="row mb2">
                  <div className="col-md-6">
                    <ItemList
                      getData={this.swapiService.getAllPlanets}
                      onItemSelected={this.onPersonSelected}
                      renderItem={
                        ({name,population}) => (<span>{name},{population} 
                        <button>Add</button></span>)}
                      />
                  </div>
                  <div className="col-md-6">
                    <PersonDetails  />
                  </div>
                 </div>
        
                 <div className="row mb2">
                  <div className="col-md-6">
                    <ItemList
                      getData={this.swapiService.getAllStarships}
                      onItemSelected={this.onPersonSelected}
                      renderItem={({name, crew, costInCredits}) =>
                      <ul className="item-list list-group">
                        <li className="list-group-item">Name: {name}</li>
                        <li className="list-group-item"> Crew: {crew}</li>
                        <li className="list-group-item">Cost In Credits: {costInCredits}<input type="checkbox"/></li>
                      </ul>}
                      />
                  </div>
                  <div className="col-md-6">
                    <PersonDetails  />
                  </div>
                 </div>*/}
           </div> 
        )
    }
};
