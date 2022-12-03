import './css/styles.css';
import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce';

const input = document.querySelector('input#search-box');

const DEBOUNCE_DELAY = 300;

const selectCountries = event => {
  const countryRemove = document
    .querySelectorAll('ul.country-list>div')
    .forEach(country => country.remove());
  fetchCountries(event.target.value);
};

input.addEventListener('input', debounce(selectCountries, DEBOUNCE_DELAY));
