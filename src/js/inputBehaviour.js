import fetchCountries from "./fetchCountries";

const _ = require('lodash');
const DEBOUNCE_DELAY = 300;
const inputRef = document.getElementById('search-box');

inputRef.addEventListener('input', _.debounce(onInputSearch, DEBOUNCE_DELAY));

export default function onInputSearch(e) {
    let typedCountry = e.target.value.trim();   
    const inputResult = fetchCountries(typedCountry);
    return inputResult;
};

