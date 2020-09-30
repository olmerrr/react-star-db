import React, {Component} from "react";
import './item-details.css';
import SwapiService from './../../services/swapi-services';
import Spinner from './../spinner';

export default class PersonDetails extends Component {

    swapiService = new SwapiService();
    state = {
        item: null,
        image: null
    };

    componentWillMount() {
        this.updatePerson();
    };

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updatePerson()
        }
    };

    updatePerson() {
        const {itemId, getData, getImageUrl} = this.props;
        if (!itemId) {
            return;
        }
        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item)
                })
            });
    };

    render() {
        if (!this.state.item) {
            return <span>Select a person from list</span>
        }
        ;
        const {id, name, image, gender, hairColor, birthYear} = this.state.item;
        return (
            <div className="item-details card">
                <img src={image}
                     alt="img"
                     className="item-image"/>

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