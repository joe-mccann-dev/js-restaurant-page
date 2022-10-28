import mainImage from './images/restaurant.jpg';

export default function showHome(staticDiv, currentModule) {
  const image = new Image();
  image.src = mainImage;
  image.classList.add('image');
  currentModule.appendChild(image);

  const copy = document.createElement('p');
  copy.textContent = `
    The Veggie Shack has provided the diners of MetroWest with
    nutritious and delicious plant-based meals since 1998. The menu listed here is our base menu,
    but you can call or stop in for our inspirational lunch and dinner
    specials! Click on the Contact tab above to give us a call. 
    Thank you for visiting our website, see you soon!
  `
  copy.classList.add('copy');
  currentModule.appendChild(copy);

  const hoursContainer = document.createElement('div');
  hoursContainer.classList.add('hours_container');
  const hoursHeader = document.createElement('h2');
  hoursHeader.textContent = 'Hours';
  hoursContainer.appendChild(hoursHeader);
  const hoursList = document.createElement('ul');
  ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri'].forEach((day) => {
    hoursList.appendChild(createHours(day, [11, 10]));
  });
  ['Sat', 'Sun'].forEach((day) => {
    hoursList.appendChild(createHours(day, [9, 10]));
  });
  hoursContainer.appendChild(hoursList);
  currentModule.appendChild(hoursContainer);

  staticDiv.appendChild(currentModule);
  return currentModule;
};

function createHours(day, range) {
  const hours = document.createElement('li');
  hours.textContent = `${day}: ${range[0]}AM - ${range[1]}PM`;
  return hours
}
