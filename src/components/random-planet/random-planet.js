import React, {Component} from "react";
import './random-planet.css';
import SwapiService from "../../services/swapi-services";
import Spinner from "../spinner";

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();
    state = {
        planet: {},
        loading: true
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })

    };

    updatePlanet() {
        const id = Math.floor(Math.random() * 25 + 2);
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
    }

    render() {
        const { planet, loading } = this.state;
        const spinner = loading ? <Spinner/> : null;
        const content = !loading ? <PlanetViev planet={planet}/> : null;

        // if (loading) {
        //     return <Spinner/>
        // };
        return (
            <div className="random-planet jumbotron rounded">
                {spinner}
                {content}

            </div>
        )
    }
}
const PlanetViev = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet;
    return (
        <React.Fragment>
            <img
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt="planet" className="planet-image"/>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                        <span className="term">
                            Population
                        </span>
                    <span>
                            {population}
                        </span>
                </li>
                <li className="list-group-item">
                        <span className="term">
                            Rotation Period
                        </span>
                    <span>
                            {rotationPeriod}
                        </span>
                </li>
                <li className="list-group-item">
                        <span className="term">
                            Diameter
                        </span>
                    <span>
                            {diameter}
                        </span>
                </li>
            </ul>
        </React.Fragment>
    )
};