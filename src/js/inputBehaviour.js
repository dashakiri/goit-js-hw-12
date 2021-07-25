import fetchCountries from "./fetchCountries";
import { inputRef, ulRef, divRef } from "./refs";

const _ = require('lodash');
const DEBOUNCE_DELAY = 300;

inputRef.addEventListener('input', _.debounce(onInputSearch, DEBOUNCE_DELAY));

export default function onInputSearch(e) {
    clearMarkup();

    let typedCountry = e.target.value.trim();
    
    if (typedCountry === '') {
        return;
    };
    
    const inputResult = fetchCountries(typedCountry);
    return inputResult;
};

function clearMarkup() {
    divRef.innerHTML = '';
    ulRef.innerHTML = '';
}