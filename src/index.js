import productCardTemplate from './templates/template.hbs';
import dishCards from './menu.json';

const listElement = document.querySelector(".js-menu");
const themeToggleElement = document.querySelector("#theme-switch-toggle");
const allScreen = document.querySelector('body')
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};


allScreen.classList.add(localStorage.getItem('theme'));
if (localStorage.getItem('theme') === Theme.DARK) {
    themeToggleElement.checked = true
};

themeToggleElement.addEventListener(`change`, onThemeToggle);

function onThemeToggle(event) {

    if (themeToggleElement.checked) {
        localStorage.setItem('theme', Theme.DARK);
        allScreen.classList.remove(Theme.LIGHT)
        allScreen.classList.add(Theme.DARK)
    } else {
        localStorage.setItem('theme', Theme.LIGHT);
        allScreen.classList.remove(Theme.DARK)
        allScreen.classList.add(Theme.LIGHT)
    }
}



listElement.innerHTML = productCardTemplate(dishCards);