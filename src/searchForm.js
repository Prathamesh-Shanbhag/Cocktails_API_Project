import presentDrinks from './presentDrinks.js';
import get from './getElement.js';
const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const form = get('.search-form');
const input = get('[name="drink"]');

form.addEventListener('keyup', function (e) {
  e.preventDefault();
  const value = input.value;
  if (!value) return;
  console.log(`${baseURL}${value}`);
  return presentDrinks(`${baseURL}${value}`);
});
