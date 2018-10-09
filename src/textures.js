const Loader = new THREE.TextureLoader();
const Textures = {};

require.context("../assets/", true, /\.(jpg|png)$/i).keys().forEach(file =>

  Textures[file.substring(2).replace(/\.[^/.]+$/, "")] = Loader.load(`./assets/${file.substring(2)}`)

)

export default Textures