const Manager = new THREE.LoadingManager();

Manager.onLoad = () => {
  document.querySelector('canvas').style.visibility = 'visible';
  document.querySelector('.lds-roller').remove();
};

const Loader = new THREE.TextureLoader(Manager);
const Textures = {};
const WIDTH = window.innerWidth < 1200 ? 1200 : window.innerWidth;
const HEIGHT = window.innerHeight < 900 ? 900 : window.innerHeight;

require.context("../assets/", true, /\.(jpg|png)$/i).keys().forEach(file =>

  Textures[file.substring(2).replace(/\.[^/.]+$/, "")] = Loader.load(`./assets/${file.substring(2)}`)

)

export { Textures, WIDTH, HEIGHT }