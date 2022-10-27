import './style.css';
import pageLoad from './page_load';
import showHome from './home';
import showMenu from './menu';

const content = document.querySelector('#content');
const container = document.createElement('div');
container.classList.add('container');
pageLoad(content, container);

const homeLink = document.querySelector('#home');
homeLink.addEventListener('click', ()=> {
  container.replaceChildren();
  showHome(content, container);
});

const menuLink = document.querySelector('#menu');
menuLink.addEventListener('click', () => {
  container.replaceChildren();
  showMenu(content, container);
});