import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const displayDrinks = ({ drinks }) => {
  const section = get('.section-center');
  const title = get('.title');

  if (!drinks) {
    hideLoading();
    section.innerHTML = null;
    title.textContent = 'Sorry, No Drinks Matched your Search';
    return;
  }
  const newDrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrinkThumb: image, strDrink: name } = drink;
      return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join('');

  title.textContent = '';
  section.innerHTML = newDrinks;
  hideLoading();

  return section;
};
export default displayDrinks;
