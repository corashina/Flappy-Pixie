import { WIDTH } from './textures';
import Pickup from './pickup';
import Column from './column';

class Collidable { constructor(position) { this.constructor(position) } }

Collidable.prototype.constructor = function (position) {

  this.mesh = new THREE.Group();
  this.mesh.userData = position;

  // Create 5 columns and 4 pickups per background tile
  [-2, -1, 0, 1, 2].forEach(i => new Column(i, this.mesh));
  [-1.5, -0.5, 0.5, 1.5].forEach(i => new Pickup(i, this.mesh));

  // If tile position == 1, copy paste it to position -1
  if (position) this.mirror();

  this.mesh.translateX(position * WIDTH);

}

Collidable.prototype.mirror = function () {

  this.mesh.children.forEach(object => {

    this.mirroredObject = object.clone();

    // Bind mirrored pickups so that both of them are removed when collected
    this.mirroredObject.userData.isPickup ? this.bindPickups(object) : null;

    this.mirroredObject.translateX(-2 * WIDTH)
    this.mesh.add(this.mirroredObject);

  });

}

Collidable.prototype.bindPickups = function (object) {

  this.mirroredObject.userData.mirroredPickup = object.uuid;
  object.userData.mirroredObject = this.mirroredObject.uuid;

}

export default Collidable;
