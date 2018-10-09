import Assets from '../assets/WorldAssets.js';

const Loader = new THREE.TextureLoader();
const Textures = {};

require.context("../assets/", true, /\.(jpg|png)$/i).keys().forEach(file =>

  Textures[file.substring(2).replace(/\.[^/.]+$/, "")] = {
    tex: Loader.load(`./assets/${file.substring(2)}`),
    width: Assets.frames[file.substring(2)] != null ? Assets.frames[file.substring(2)].frame.w : 0,
    height: Assets.frames[file.substring(2)] != null ? Assets.frames[file.substring(2)].frame.h : 0
  }

)

export default Textures