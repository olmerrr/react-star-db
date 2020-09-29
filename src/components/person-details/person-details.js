import React, { Component } from "react";
import './person-details.css';
import SwapiService from './../../services/swapi-services';
import Spinner from './../spinner';

export default class PersonDetails extends Component {

    swapiService = new SwapiService();
    state = {
    person: null
};
    componentWillMount(){
        this.updatePerson();
    };
    componentDidUpdate(prevProps){
        if(this.props.personId !== prevProps.personId){
            this.updatePerson()
        } 
    };
    updatePerson(){
        const  {personId} = this.props;
        if(!personId){
            return;
        }
        this.swapiService
        .getPerson(personId)
        .then((person)=> {
            this.setState({person})
        });
    };

    render() {
        if(!this.state.person){
            return <span>Select a person from list</span>
        };
        const {id,name,gender,hairColor,birthYear } = this.state.person;
        return (
            <div className="item-details card">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                    alt="img"
                    className="item-image" />

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">
                                Gender
                            </span>
                            <span>
                                {gender}
                            </span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">
                                Hair Color
                            </span>
                            <span>
                                {hairColor}
                            </span>
                        </li>

                        <li className="list-group-item">
                            <span className="term">
                                Birthday Year
                            </span>
                            <span>
                                {birthYear}
                            </span>
                        </li>
                   </ul>
                </div>
            </div>
        )
    }
}