import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
import setDrink from './setDrink.js';
import { showLoading } from './toggleLoading.js';
const presentDrinks = async (url) => {
  // fetch drinks
  showLoading();
  const data = await fetchDrinks(url);

  // display drinks
  const section = await displayDrinks(data);
  if (section) {
    setDrink(section);
  }
};
export default presentDrinks;
