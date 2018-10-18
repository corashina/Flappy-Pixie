import { Textures, WIDTH, HEIGHT } from './textures';

class Column { constructor(position, group) { this.constructor(position, group) } }

const split = 10;
const distance_between_columns = 2;
const max_height = 7
const min_height = 3;

Column.prototype.constructor = function (position, group) {

  this.group = group;

  // Second column height is determined by first
  // Divide height into 10 sectors
  // First column max height is 3-7, then we leave 2 height between columns (10 - 2)
  this.column1_height = Math.floor(Math.random() * (max_height - min_height)) + min_height;
  this.column2_height = split - distance_between_columns - this.column1_height;

  // Create column mesh for both columns
  [this.column1_height, this.column2_height].forEach((columnHeight, bottom) => {

    this.mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(WIDTH / 20, HEIGHT / split * columnHeight, 32),
      new THREE.MeshBasicMaterial({ transparent: true, map: Textures['column'] })
    );

    // First column is placed bottom side, second upperside
    this.side = bottom == 0 ? -1 : 1;

    this.mesh.translateX(position * WIDTH / 5);
    this.mesh.translateY(this.side * HEIGHT / 2 - this.side * HEIGHT / split * columnHeight / 2);
    this.mesh.translateZ(-50);

    this.mesh.userData.isColumn = true;
    this.group.add(this.mesh);

  })

}

export default Column;