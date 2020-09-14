import React, {Component} from "react";
import Header from "../header/header";
import ItemList from "../item-list";
import RandomPlanet from "../random-planet";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";

export default class App extends Component {
state = {
    selectedPerson: 2,
    hasError: false
};
componentDidCatch(){
    this.setState({
        hasError: true
    })
}
onPersonSelected = (id) => {
    this.setState({
        selectedPerson: id
    });
};
    render() {
        if(this.state.hasError){
            return <ErrorIndicator/>
        }
        return (
            <div>
                <Header/>
                <RandomPlanet/>
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected = {this.onPersonSelected}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId = {this.state.selectedPerson}/>
                    </div>

                </div>
            </div>
        )
    }
};
