import { Textures, WIDTH } from './textures';
import Pickup from './pickup';
import Column from './column';

class Collidable {
  constructor(position) { this.constructor(position) }
}

Collidable.prototype.constructor = function (position) {

  this.mesh = new THREE.Group();
  this.mesh.userData = position;

  [-2, -1, 0, 1, 2].forEach(i => new Column(i, this.mesh));
  [-1.5, -0.5, 0.5, 1.5].forEach(i => new Pickup(i, this.mesh));

  if (position) this.mirror();

  this.mesh.translateX(position * WIDTH);

}

Collidable.prototype.mirror = function () {

  this.mesh.children.forEach(object => {

    this.mirroredObject = object.clone();
    this.mirroredObject.translateX(-2 * WIDTH)
    this.mesh.add(this.mirroredObject);

  });

}

export default Collidable;
