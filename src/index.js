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
homeLink.addEventListener('click', ()=> {
  currentModule.replaceChildren();
  showHome(staticDiv, currentModule);
});

const menuLink = document.querySelector('#menu');
menuLink.addEventListener('click', () => {
  currentModule.replaceChildren();
  showMenu(staticDiv, currentModule);
});

const contactLink = document.querySelector('#contact');
contactLink.addEventListener('click', () => {
  currentModule.replaceChildren();
  showContacts(staticDiv, currentModule)
});
