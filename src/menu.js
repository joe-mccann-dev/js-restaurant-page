export default function showMenu(staticDiv, currentModule) {

  const menuItems = [
    {
      name: 'Falafel Wrap',
      price: '12.95',
      description: `
      The most flavorful falafel west of the Middle East deep fried to perfection, wrapped 
      in flour tortilla with mixed greens red peppers, cukes, pickled red onion, and vegan tzatziki sauce
    `
    },
    {
      name: '"Steak" Bomb',
      price: '13.95',
      description: `
      Our house-smoked seitan 'steak', sauteed peppers and onions,
      topped with creamy cashew 'chz' sauce served on a toasted baguette (made fresh daily)
    `
    },
    {
      name: "Tofu Scramble w/Home Fries",
      price: '11.95',
      description: `
    Herb-seasoned and pressed tofu, browned to perfection and 
    served with sauteed veggies, crispy home fries, and a side of our house-made 
    sweet 'n spicy hot sauce.
    `
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
  title.textContent = menuObject['name'];
  menuItem.appendChild(title);

  const price = document.createElement('p');
  price.textContent = menuObject['price'];
  menuItem.appendChild(price);

  const description = document.createElement('p');
  description.textContent = menuObject['description'];
  menuItem.appendChild(description);
  return menuItem;
}
