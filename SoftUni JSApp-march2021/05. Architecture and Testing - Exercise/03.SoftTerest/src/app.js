import { setupHome } from './views/home.js'

const main = document.querySelector('main');
const nav = document.querySelector('nav')

const views = {};
const links = {};

const navigation = {
    goTo
};

registerView('home', document.getElementById('home-page'), setupHome, 'homeLink')

setupNavigation();

goTo('home');

function registerView(name, section, setup, linkId) {
    const view = setup(section, navigation);
    views[name] = view;
    if(linkId){
        links[linkId] = name;
    }
}

async function goTo(name, ...params) {
    main.innerHTML = ''
    const view = vews[name];
    const section = await view(...params);
    main.appendChild(section);
}

function setupNavigation() {
    setUserNav();

    nav.addEventListener('click', (ev) => {
        const viewName = links[ev.target.id];
        if(viewName){
            ev.preventDefault();
            goTo(viewName);
        }
    })
}

function setUserNav() {
    const token = sessionStorage.getItem('authToken');
    if (token != null) {
        [...nav.querySelectorAll('.user-nav')].forEach(e => e.style.display = 'list-item');
        [...nav.querySelectorAll('.guest-nav')].forEach(e => e.style.display = 'none');
    } else {
        [...nav.querySelectorAll('.user-nav')].forEach(e => e.style.display = 'none');
        [...nav.querySelectorAll('.guest-nav')].forEach(e => e.style.display = 'list-item');
    }
}