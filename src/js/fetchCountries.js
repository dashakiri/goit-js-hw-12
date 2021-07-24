import { Notify } from 'notiflix';
import countryInfoCardTpl from '../templates/countryInfoCard.hbs';
import countryList from '../templates/countryList.hbs';

const ulRef = document.querySelector('.country-list');
const divRef = document.querySelector('.country-info');

export default function fetchCountries(country) {
    return fetch(`https://restcountries.eu/rest/v2/name/${country}?fields=name;capital;population;flag;languages`)
        .then(response => {
            if (!response.ok) {
                Notify.Failure('Oops, there is no country with that name');
                throw new error(response.status);                
            };
           return response.json();
        })
        .then(data => {
            clearMarkup();
            console.log(data);
            countryRender(data)
        })
};


function countryRender(country) {
    if (country.length === 1) {
        divRef.innerHTML = countryInfoCardTpl(country);
    };
    if (country.length > 1 && country.length <= 10) {
        ulRef.innerHTML = countryList(country);
    };
    if (country.length > 10) {
        Notify.Info('Too many matches found. Please enter a more specific name.');
    };
};

function clearMarkup() {
    divRef.innerHTML = '';
    ulRef.innerHTML = '';
}
