import './css/styles.css';
import './js/fetchCountries';
import onInputSearch from './js/inputBehaviour';

const _ = require('lodash');
const DEBOUNCE_DELAY = 300;
const inputRef = document.getElementById('search-box');
inputRef.addEventListener('input', _.debounce(onInputSearch, DEBOUNCE_DELAY));
