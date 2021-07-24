import '../css/card-list.css';
import Notiflix from 'notiflix';
import countryInfoCardTpl from '../templates/countryInfoCard.hbs';
import countryList from '../templates/countryList.hbs';

const ulRef = document.querySelector('.country-list');
const divRef = document.querySelector('.country-info');

export default function fetchCountries(name) {
    return fetch(`https://restcountries.eu/rest/v2/name/${name}?fields=name;capital;population;flag;languages`)
        .then(response => {
            if (!response.ok) {
                Notiflix.Notify.failure('Oops, there is no country with that name');
                throw new error(response.status);                
            };
           return response.json();
        })
        .then(data => {
            clearMarkup();
            countryRender(data)
        })
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

// очищает список или блок при новом поиске

function clearMarkup() {
    divRef.innerHTML = '';
    ulRef.innerHTML = '';
}
