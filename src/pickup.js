import { Textures, WIDTH, HEIGHT } from './textures';

class Pickup {
  constructor(position, group) { this.constructor(position, group) }
}

const pickup_textures = Object.keys(Textures)
  .filter(key => key.includes('pickup_'))
  .reduce((accumulator, key) => accumulator.concat(Textures[key]), []);

Pickup.prototype.constructor = function (position, group) {

  const random = Math.floor(Math.random() * pickup_textures.length);

  this.group = group;

  this.mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(WIDTH / 50, WIDTH / 50, 32),
    new THREE.MeshBasicMaterial({
      transparent: true,
      map: pickup_textures[random]
    })
  )

  this.mesh.userData.isPickup = true;
  this.mesh.userData.value = random * 10;

  this.mesh.translateX(position * WIDTH / 5);
  this.mesh.translateY(HEIGHT / 10 * (Math.floor(Math.random() * 5) + -2));
  this.mesh.translateZ(-50);

  this.group.add(this.mesh);

}

export default Pickup;