import menuItems from './menuItems'

export default function showMenu(staticDiv, currentModule) {

  const menu = menuItems();

  const menuContainer = document.createElement('div');
  const menuList = document.createElement('ul');

  menu.forEach((item) => {
    let menuItem;
    for (const _detail in item) {
      menuItem = createMenuItem(item, menuList);
    }
    menuList.appendChild(menuItem);
  });

  menuContainer.appendChild(menuList);
  currentModule.appendChild(menuContainer);
  staticDiv.appendChild(currentModule);
  return currentModule;
}

function createMenuItem(menuObject) {
  const menuItem = document.createElement('li');
  menuItem.classList.add('menu_item');

  const title = document.createElement('h3');
  title.classList.add('menu_item_name');
  title.textContent = menuObject['name'];

  const description = document.createElement('p');
  description.classList.add('menu_item_description');
  description.textContent = menuObject['description'];

  const price = document.createElement('p');
  price.classList.add('menu_item_price');
  price.textContent = menuObject['price'];
  
  const image = new Image();
  image.src = menuObject.imageSrc;
  image.alt = 'image of ' + menuObject.name
  image.classList.add('menu_item_image');

  menuItem.appendChild(title);
  menuItem.appendChild(description);
  menuItem.appendChild(image);
  menuItem.appendChild(price);

  return menuItem;
}
 