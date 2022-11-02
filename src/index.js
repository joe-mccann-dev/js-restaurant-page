import './style.css';
import pageLoad from './page_load';
import showHome from './home';
import showMenu from './menu';
import showContacts from './contact';

const staticDiv = document.querySelector('#static');
const currentModule = document.querySelector('#current_module');
currentModule.classList.add('container');
pageLoad(staticDiv, currentModule);

const homeLink = document.querySelector('#home');
const menuLink = document.querySelector('#menu');
const contactLink = document.querySelector('#contact');

homeLink.addEventListener('click', ()=> {
  currentModule.replaceChildren();
  showHome(staticDiv, currentModule);
  addAndRemoveActiveClass(homeLink, [menuLink, contactLink])
});


menuLink.addEventListener('click', () => {
  currentModule.replaceChildren();
  showMenu(staticDiv, currentModule);
  addAndRemoveActiveClass(menuLink, [homeLink, contactLink]);
});


contactLink.addEventListener('click', () => {
  currentModule.replaceChildren();
  showContacts(staticDiv, currentModule)
  addAndRemoveActiveClass(contactLink, [menuLink, homeLink]);
});

function addAndRemoveActiveClass(link, otherLinks) {
  link.classList.add('active');
  otherLinks.forEach((link) => { link.classList.remove('active') });
}