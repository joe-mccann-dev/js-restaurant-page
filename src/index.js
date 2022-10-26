import './style.css';
import pageLoad from './page_load';
import showHome from './home';

const content = document.querySelector('#content');
pageLoad(content);

const homeLink = document.querySelector('#home');
homeLink.addEventListener('click', ()=> {
  showHome(content);
});
