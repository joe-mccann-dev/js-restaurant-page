import './style.css';
import pageLoad from './page_load';
import showHome from './home';

const content = document.querySelector('#content');
const container = document.createElement('div');
container.classList.add('container');
pageLoad(content, container);

const homeLink = document.querySelector('#home');
homeLink.addEventListener('click', ()=> {
  showHome(content, container);
});
