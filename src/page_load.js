import showHome from './home';

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

  return staticDiv;
}
