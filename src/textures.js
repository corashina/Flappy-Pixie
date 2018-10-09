const Loader = new THREE.TextureLoader();
const Textures = {};
const WIDTH = window.innerWidth < 1200 ? 1200 : window.innerWidth;
const HEIGHT = window.innerHeight < 900 ? 900 : window.innerHeight;

require.context("../assets/", true, /\.(jpg|png)$/i).keys().forEach(file =>

  Textures[file.substring(2).replace(/\.[^/.]+$/, "")] = Loader.load(`./assets/${file.substring(2)}`)

)

export { Textures, WIDTH, HEIGHT }