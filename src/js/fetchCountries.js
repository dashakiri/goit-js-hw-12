import '../css/card-list.css';
import Notiflix from 'notiflix';
import { ulRef, divRef } from './refs';
import countryInfoCardTpl from '../templates/countryInfoCard.hbs';
import countryList from '../templates/countryList.hbs';

export default function fetchCountries(name) {
    return fetch(`https://restcountries.eu/rest/v2/name/${name}?fields=name;capital;population;flag;languages`)
        .then(response => {
            if (!response.ok) {                
                throw new error(response.status);                
            };
           return response.json();
        })
        .then(data => {
            countryRender(data)
        })
        .catch(error => Notiflix.Notify.failure('Oops, there is no country with that name'))
};

// рендерит карточки с инфо о стране по условию 

function countryRender(country) {
    if (country.length === 1) {
        divRef.innerHTML = countryInfoCardTpl(country);
    };
    if (country.length > 1 && country.length <= 10) {
        ulRef.innerHTML = countryList(country);
    };
    if (country.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    };
};
