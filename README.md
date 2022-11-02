# README

## Local installation

1. clone this repo.
2. `cd js-restaurant-page`
3. `npm start`

## ES6 Modules and Webpack

The primary purpose of this project is to practice setting up a webpack environment and use it to manage ES6 modules.

For config and setup this [webpack guide](https://webpack.js.org/guides/development/) was used.

- Modules are loaded into `index.js`
- the `pageLoad` module loads the contents of the static elements of the page and the "Home" module.
- `index.js` contains event listeners that on click wipe out the "currentModule" and then render the desired page using the imported functions.
For example, `import showMenu from './menu';` allows the calling of `showMenu` within the menu link's respective event listener.

### Images and Styling

- For easy image handling, proper setup is required in `webpack.config.js`. See [webpack guide on loading images](https://webpack.js.org/guides/asset-management/#loading-images) for more info. I used the menu module as an opportunity to practice this. See [webpack guide on loading css](https://webpack.js.org/guides/asset-management/#loading-css).
- I tried to use this as an opportunity to practice styling. This is my first time using a blurred background image and also my first time using the `object-fit` CSS property on images.

### Menu and Contact Objects

- For easy iteration of repetitive information, I used an array of objects for menu and contact lists. Using an object made it straightforward to 
organize the images of each menu item, e.g.  setting `imageSrc: falafelPic`, within the Falafel Wrap menu object.

### Setting up a local server with webpack

- I followed [the guide here](https://webpack.js.org/guides/development/#using-webpack-dev-server) for setting up the webpack development server.
