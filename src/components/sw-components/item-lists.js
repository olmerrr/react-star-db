import React from 'react';
import {withData} from '../hoc-helpers';
import ItemList from '../../components/item-list'
import SwapiService from '../../services/swapi-services';

const swapiService = new SwapiService();
const {getAllPeople, getAllStarships, getAllPlanets} = swapiService;

const PersonList = withData(ItemList, getAllPeople);
const PlanetList = withData(ItemList, getAllPlanets);
const StarshipList = withData(ItemList, getAllStarships);
export  {
    PersonList,
    PlanetList,
    StarshipList
};
