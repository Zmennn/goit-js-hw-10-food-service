import productCardTemplate from './templates/template.hbs';
import dishCards from './menu.json';

const listElement = document.querySelector(".js-menu");

listElement.innerHTML = productCardTemplate(dishCards)