import baguettePic from './images/baguette.jpg';
import falafelPic from './images/falafel.jpg';
import nachosPic from './images/nachos.jpg';
import pizzaPic from './images/pizza.jpg';
import tofuPic from './images/tofu.jpg';

export default function menuItems() {
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
  return menuItems;
}