export default function showHome() {
  const content = document.querySelector('#content');
  const homeContent = document.createElement('div');

  const title = document.createElement('h1');
  title.textContent = "JoeJoe's Veggie Shack";
  homeContent.appendChild(title);

  const about = document.createElement('p');
  about.textContent = `JoeJoe's is home to the finest quick-serve, 
                       plant-based meals around.`
  homeContent.appendChild(about);
  
  const hours = document.createElement('p');
  hours.textContent = `Hours: Everyday 11AM - 9PM`;
  homeContent.appendChild(hours);

  content.appendChild(homeContent);

  return content;
};
