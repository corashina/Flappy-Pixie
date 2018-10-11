import { Textures, WIDTH, HEIGHT } from './textures';

class Pickup {
  constructor() { this.constructor() }
}

const pickup_textures = Object.keys(Textures)
  .filter(key => key.includes('pickup_'))
  .reduce((accumulator, key) => accumulator.concat(Textures[key]), []);

Pickup.prototype.constructor = function () {

  const rnd = Math.floor(Math.random() * pickup_textures.length);

  this.mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(WIDTH / 50, WIDTH / 50, 32),
    new THREE.MeshBasicMaterial({
      transparent: true,
      map: pickup_textures[rnd]
    })
  )
  this.mesh.userData.isPickup = true;
  this.mesh.userData.value = (rnd + 1);

}

export default Pickup;