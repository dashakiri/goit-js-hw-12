import { Notify } from 'notiflix';
import countryInfoCardTpl from '../templates/countryInfoCard.hbs';

import countryList from '../templates/countryList.hbs';

const ulRef = document.querySelector('.country-list');
const divRef = document.querySelector('.country-info');

export default function fetchCountries(country) {
    return fetch(`https://restcountries.eu/rest/v2/name/${country}?fields=name;capital;population;flag;languages`)
        .then(response => {
            if (!response.ok) {
                throw new error(response.status);
            };
           return response.json();
        })
        .then(data => {
            console.log(data);
            countryRender(data)
        })
};


function countryRender(country) {

    if (country.length === 1) {
        divRef.innerHTML = countryInfoCardTpl(country);
    } else if (country.length > 1 && country.length <= 10) {
        clearMarkup();
        ulRef.innerHTML = countryList(country);
    } else if (country.length > 10) {
        Notiflix.Notify.Info("Too many matches found. Please enter a more specific name.");
    } else {
        Notiflix.Notify.Failure("Oops, there is no country with that name");
    }
};

function clearMarkup() {
    divRef.innerHTML = '';
    ulRef.innerHTML = '';
}
