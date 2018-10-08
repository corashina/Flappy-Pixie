import ASSETS from '../assets/WorldAssets.js';

const loader = new THREE.TextureLoader(), textures = {};

require.context("../assets/", true, /\.(jpg|png)$/i).keys().forEach(file =>

  textures[file.substring(2).replace(/\.[^/.]+$/, "")] = {
    tex: loader.load(`./assets/${file.substring(2)}`),
    width: ASSETS.frames[file.substring(2)] != null ? ASSETS.frames[file.substring(2)].frame.w : 0,
    height: ASSETS.frames[file.substring(2)] != null ? ASSETS.frames[file.substring(2)].frame.h : 0
  }

)


export default textures