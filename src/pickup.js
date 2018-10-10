import { Textures, WIDTH, HEIGHT } from './textures';

class Pickup {
  constructor() { this.constructor() }
}

const pickup_textures = Object.keys(Textures)
  .filter(key => key.includes('pickup_'))
  .reduce((accumulator, key) => accumulator.concat(Textures[key]), []);

Pickup.prototype.constructor = function () {

  const rnd = Math.floor(Math.random() * pickup_textures.length);

  this.score = (rnd + 1) * 10;
  this.mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(WIDTH / 100, WIDTH / 100, 32),
    new THREE.MeshPhongMaterial({
      transparent: true,
      map: pickup_textures[rnd]
    })
  )

}

export default Pickup;