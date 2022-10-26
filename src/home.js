import mainImage from './images/restaurant.jpg'

export default function showHome(content, container) {
  container.replaceChildren();

  const image = new Image();
  image.src = mainImage;
  image.classList.add('image');
  container.appendChild(image);

  const copy = document.createElement('p');
  copy.textContent = `
    The Veggie Shack has provided the diners of MetroWest with
    nutritious and delicious plant-based meals since 1998. The menu listed here is our base menu,
    but you can call or stop in for our inspirational lunch and dinner
    specials! Click on the Contact tab above to give us a call. 
    Thank you for visiting our website, see you soon!
  `
  copy.classList.add('copy');
  container.appendChild(copy);

  const hoursContainer = document.createElement('div');
  const hoursList = document.createElement('ul');
  ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri'].forEach((day) => {
    hoursList.appendChild(createHours(day, [11, 10]));
  });
  ['Sat', 'Sun'].forEach((day) => {
    hoursList.appendChild(createHours(day, [9, 10]));
  });
  hoursContainer.appendChild(hoursList);
  container.appendChild(hoursContainer);

  content.appendChild(container);
  return content;
};

function createHours(day, range) {
  const hours = document.createElement('li');
  hours.textContent = `${day}: ${range[0]}AM - ${range[1]}PM`;
  return hours
}
