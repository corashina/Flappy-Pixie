import { Textures, WIDTH, HEIGHT } from './textures';
import Pickup from './pickup';

class Columns {
  constructor(position) { this.constructor(position) }
}

Columns.prototype.constructor = function (position) {

  this.pickups = [];

  this.mesh = new THREE.Group();
  this.mesh.userData = position;

  [-2, -1, 0, 1, 2].forEach(i => {

    this.column1_height = Math.floor(Math.random() * 4) + 3;
    this.column2_height = 8 - this.column1_height;

    [this.column1_height, this.column2_height].forEach((columnHeight, bottom) => {

      this.column = new THREE.Mesh(
        new THREE.PlaneGeometry(WIDTH / 20, HEIGHT / 10 * columnHeight, 32),
        new THREE.MeshBasicMaterial({ transparent: true, map: Textures['column'] })
      );

      this.side = bottom == 0 ? -1 : 1;

      this.column.translateX(i * WIDTH / 5);
      this.column.translateY(this.side * HEIGHT / 2 - this.side * HEIGHT / 10 * columnHeight / 2);
      this.column.translateZ(-50);

      this.column.userData.isColumn = true;

      this.mesh.add(this.column);

    })



    const pickup = new Pickup();
    pickup.mesh.translateX(i * WIDTH / 5);
    pickup.mesh.translateY(-HEIGHT / 2 + HEIGHT / 10 * (this.column1_height + 1));
    pickup.mesh.translateZ(-50);

    this.mesh.add(pickup.mesh);

  });
  if (position) this.mirror();
  this.mesh.translateX(position * WIDTH);

}

Columns.prototype.mirror = function () {

  this.mesh.children.forEach(column => {

    this.mirroredColumn = column.clone();
    this.mirroredColumn.translateX(-2 * WIDTH)
    this.mesh.add(this.mirroredColumn);

  });

}

export default Columns;
