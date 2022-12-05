import './css/styles.css';
import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const input = document.querySelector('input#search-box');
const inputStyle = (input.onkeydown = event => {
  if (/[a-z\s]/i.test(event.key) === true) {
    return /[a-z\s]/i.test(event.key);
  } else {
    Notiflix.Notify.info('Sorry! You can use only letters and spaces!');
    return false;
  }
});

const DEBOUNCE_DELAY = 300;

const selectCountries = event => {
  const countryRemove = document
    .querySelectorAll('ul.country-list>div')
    .forEach(country => country.remove());
  fetchCountries(event.target.value);
};

input.addEventListener('input', debounce(selectCountries, DEBOUNCE_DELAY));
