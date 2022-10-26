import mainImage from './images/restaurant.jpg'

export default function pageLoad(content) {

  const welcomeHeader = document.createElement('h1');
  welcomeHeader.textContent = "Welcome to the Restaurant";
  welcomeHeader.classList.add('header');
  content.appendChild(welcomeHeader);

  const nav = document.createElement('div');
  const homeLink = document.createElement('a');
  homeLink.textContent = 'Home'
  homeLink.setAttribute('id', 'home')
  homeLink.href = '#';
  nav.appendChild(homeLink);
  content.appendChild(nav);

  const image = new Image();
  image.src = mainImage;
  image.classList.add('image');
  content.appendChild(image);

  const copy = document.createElement('p');
  copy.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  copy.classList.add('copy');
  content.appendChild(copy);

  return content;
}
