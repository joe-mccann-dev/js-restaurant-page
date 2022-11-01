// import mainImage from './images/restaurant.jpg';

export default function showHome(staticDiv, currentModule) {
  // const image = new Image();
  // image.src = mainImage;
  // image.classList.add('image');
  // currentModule.appendChild(image);

  const copy = document.createElement('p');
  copy.textContent = `
    The Veggie Shack has provided the diners of the metrowest area with
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
  hoursHeader.classList.add('hours_header');
  hoursHeader.textContent = 'Hours';
  hoursContainer.appendChild(hoursHeader);
  const hoursList = document.createElement('ul');
  hoursList.classList.add('hours_list');
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].forEach((day) => {
    if (day === 'Friday') {
      hoursList.appendChild(createHours(day, [11, 11]))
    } else {
      hoursList.appendChild(createHours(day, [11, 10]));
    }
  });
  hoursList.appendChild(createHours('Saturday', [11, 11]));
  hoursList.appendChild(createHours('Sunday', [9, 8]));
  hoursContainer.appendChild(hoursList);
  currentModule.appendChild(hoursContainer);

  staticDiv.appendChild(currentModule);
  return staticDiv;
};

function createHours(day, range) {
  const hours = document.createElement('li');
  hours.classList.add('hours_list_item')

  const dayElement = document.createElement('p');
  dayElement.classList.add('hours_list_day');
  dayElement.textContent = `${day}`;
  hours.appendChild(dayElement);

  const timeElement = document.createElement('p');
  timeElement.classList.add('hours_list_time');
  timeElement.textContent = `${range[0]}AM - ${range[1]}PM`;
  hours.appendChild(timeElement);

  return hours;
}
