import mainImage from './images/restaurant.jpg'

export default function pageLoad(content) {

  const container = document.createElement('div');
  container.classList.add('container');

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

  content.appendChild(nav);


  const welcomeHeader = document.createElement('h1');
  welcomeHeader.textContent = "The Veggie Shack";
  welcomeHeader.classList.add('header');
  content.appendChild(welcomeHeader);

  const image = new Image();
  image.src = mainImage;
  image.classList.add('image');
  container.appendChild(image);

  const copy = document.createElement('p');
  copy.textContent = `
    The Veggie Shack has provided the diners of New England with
    nutritious and delicious, plant-based meals since 1998. The menu listed here is our base menu,
    but you can call or stop in for our inspirational lunch and dinner
    specials! Click on the 'Contact' tab above to give us a call. 
    Thank you for visiting our humble website, see you soon!
  `
  copy.classList.add('copy');
  container.appendChild(copy);

  content.appendChild(container);

  return content;
}
