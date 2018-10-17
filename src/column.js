import { Textures, WIDTH, HEIGHT } from './textures';

class Column { constructor(position, group) { this.constructor(position, group) } }

Column.prototype.constructor = function (position, group) {

  this.group = group;

  // Second column height is determined by first
  // Divide height into 10 sectors
  // First column max height is 3-7, then we leave 2 height between columns (10 - 2)
  this.column1_height = Math.floor(Math.random() * 4) + 3;
  this.column2_height = 8 - this.column1_height;

  // Create column mesh for both columns
  [this.column1_height, this.column2_height].forEach((columnHeight, bottom) => {

    this.mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(WIDTH / 20, HEIGHT / 10 * columnHeight, 32),
      new THREE.MeshBasicMaterial({ transparent: true, map: Textures['column'] })
    );

    // First column is placed bottom side, second upperside
    this.side = bottom == 0 ? -1 : 1;

    this.mesh.translateX(position * WIDTH / 5);
    this.mesh.translateY(this.side * HEIGHT / 2 - this.side * HEIGHT / 10 * columnHeight / 2);
    this.mesh.translateZ(-50);

    this.mesh.userData.isColumn = true;
    this.group.add(this.mesh);

  })

}

export default Column;