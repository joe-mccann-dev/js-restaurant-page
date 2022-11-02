import showHome from './home';
import gitHubIcon from './images/github.png';
import instagramIcon from './images/instagram.png';
import yelpIcon from './images/yelp.svg';

export default function pageLoad(staticDiv, currentModule) {
  const navContainer = document.createElement('div');
  navContainer.classList.add('nav_container');
  const nav = document.createElement('nav');
  const homeLink = document.createElement('a');
  homeLink.textContent = 'Home'
  homeLink.setAttribute('id', 'home')
  homeLink.href = '#';
  nav.appendChild(homeLink);
  const menuLink = document.createElement('a');
  menuLink.textContent = 'Menu';
  menuLink.setAttribute('id', 'menu');
  menuLink.href = '#';
  nav.appendChild(menuLink);
  const contactLink = document.createElement('a');
  contactLink.textContent = 'Contact';
  contactLink.setAttribute('id', 'contact');
  contactLink.href = '#'
  nav.appendChild(contactLink);
  navContainer.appendChild(nav);
  staticDiv.appendChild(navContainer);

  const header = document.createElement('h1');
  header.textContent = "The Veggie Shack";
  header.classList.add('header');
  staticDiv.appendChild(header);

  showHome(staticDiv, currentModule)

  const footer = document.createElement('footer');

  const linkOne = document.createElement('a');
  linkOne.classList.add('footer_link');
  linkOne.href = 'https://github.com/joe-mccann-dev/js-restaurant-page';
  const gitHub = new Image(32, 32);
  gitHub.src = gitHubIcon;
  linkOne.appendChild(gitHub);
  footer.appendChild(linkOne);

  const linkTwo = document.createElement('a');
  linkTwo.classList.add('footer_link');
  linkTwo.href = '#';
  const instagram = new Image(32, 32);
  instagram.src = instagramIcon;
  linkTwo.appendChild(instagram);
  footer.appendChild(linkTwo);

  const linkThree = document.createElement('a');
  linkThree.href = '#';
  linkThree.classList.add('footer_link');
  const yelp = new Image(32, 32);
  yelp.src = yelpIcon;
  linkThree.appendChild(yelp);
  footer.append(linkThree);

  staticDiv.appendChild(footer);

  return staticDiv;
}
