import baguettePic from './images/baguette.jpg';
import falafelPic from './images/falafel.jpg';
import nachosPic from './images/nachos.jpg';
import pizzaPic from './images/pizza.jpg';
import tofuPic from './images/tofu.jpg';

export default function showMenu(staticDiv, currentModule) {

  const menuItems = [
    {
      name: 'Falafel Wrap',
      price: '12.95',
      description: `
      The most flavorful falafel west of the Middle East deep fried to perfection, wrapped 
      in flour tortilla with mixed greens red peppers, cukes, pickled red onion, and vegan tzatziki sauce.
      
    `,
      imageSrc: falafelPic,
    },
    {
      name: '"Steak" Bomb',
      price: '13.95',
      description: `
      Our house-smoked seitan, sauteed peppers and onions,
      topped with creamy cashew 'chz' sauce served on a toasted baguette (made fresh daily).
      Served with house cut shoestring fries.
    `,
      imageSrc: baguettePic,
    },
    {
      name: "Tofu Scramble",
      price: '11.95',
      description: `
    Herb-seasoned and pressed tofu, browned to perfection with Joe's favorite sauteed veggies. Served with your choice of toast and home fries.
    `,
      imageSrc: tofuPic,
    },
    {
      name: "Loaded Vegan Nachos",
      price: '14.95',
      description: `
      House-fried tortilla chips, seasoned tvp, Follow Your Heart cheddar shreds, refried beans, 
      onion, peppers, candied jalapenos, Kat's guacamole, lime crema, salsa on side.
      `,
      imageSrc: nachosPic,
    },
    {
      name: 'Mushroom Flatbread Pizza',
      price: '15.95',
      description: `
        Grilled Portland Pie Company dough. Local Balsamic roasted mushrooms, pepperoncinis, and
        Follow Your Heart mozzerella shreds, topped with lemon crema.
        
      `,
      imageSrc: pizzaPic
    }
  ]

  const menuContainer = document.createElement('div');
  const menuList = document.createElement('ul');

  menuItems.forEach((item) => {
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

  const title = document.createElement('h3');
  title.classList.add('menu_item_name');
  title.textContent = menuObject['name'];
  menuItem.appendChild(title);

  const description = document.createElement('p');
  description.classList.add('menu_item_description');
  description.textContent = menuObject['description'];

  const price = document.createElement('p');
  price.classList.add('menu_item_price');
  price.textContent = menuObject['price'];
  description.appendChild(price);

  const image = new Image();
  image.src = menuObject.imageSrc;
  image.classList.add('image');
  description.appendChild(image);

  menuItem.appendChild(description);
  return menuItem;
}
 