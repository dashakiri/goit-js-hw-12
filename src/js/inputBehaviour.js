import fetchCountries from "./fetchCountries";

export default function onInputSearch(e) {
    let typedCountry = e.target.value.trim();   
    const inputResult = fetchCountries(typedCountry);
    return inputResult;
};

