import './style.css';
import pageLoad from './page_load';
import showHome from './home';


pageLoad();

const homeLink = document.querySelector('#home');
homeLink.addEventListener('click', showHome);