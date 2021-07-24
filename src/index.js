import './css/styles.css';
import './js/inputBehaviour';
import './js/fetchCountries';
import onInputSearch from './js/inputBehaviour';
import countryInfoCard from './templates/countryInfoCard.hbs';
import countryList from './templates/countryList.hbs';


const _ = require('lodash');
const DEBOUNCE_DELAY = 300;
const inputRef = document.getElementById('search-box');
// const ulRef = document.querySelector('.country-list');
// const divRef = document.querySelector('.country-info');

// function onCountryRender(arrayOfCountries) {
//     if (arrayOfCountries.length > 10) {
//         Notiflix.Notify.Info("Too many matches found. Please enter a more specific name.");
//         return;
//     };
// }

inputRef.addEventListener('input', _.debounce(onInputSearch, DEBOUNCE_DELAY));

