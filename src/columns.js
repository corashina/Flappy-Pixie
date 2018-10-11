import { Textures, WIDTH, HEIGHT } from './textures';

class Columns {
  constructor(position) { this.constructor(position) }
}

Columns.prototype.constructor = function (position) {
  this.columns = [];
  this.pickups = [];

  const group = new THREE.Group();
  group.userData = position;

  [-2, -1, 0, 1, 2].forEach(i => {
    const column1_height = Math.floor(Math.random() * 4) + 3;
    const column2_height = 8 - column1_height;

    let column1 = new THREE.Mesh(
      new THREE.PlaneGeometry(WIDTH / 20, HEIGHT / 10 * column1_height, 32),
      new THREE.MeshPhongMaterial({ transparent: true, map: Textures['column'] })
    );

    let column2 = new THREE.Mesh(
      new THREE.PlaneGeometry(WIDTH / 20, HEIGHT / 10 * column2_height, 32),
      new THREE.MeshPhongMaterial({ transparent: true, map: Textures['column'] })
    );

    column1.translateX(i * WIDTH / 5);
    column1.translateY(HEIGHT / 2 - (HEIGHT / 10 * column1_height) / 2);
    column1.translateZ(-50);

    column2.translateX(i * WIDTH / 5);
    column2.translateY(-HEIGHT / 2 + (HEIGHT / 10 * column2_height) / 2);
    column2.translateZ(-50);

    this.columns = [...this.columns, column1, column2];

    [column1, column2].forEach(column => group.add(column))

    if (position == 1) {

      [column1, column2].forEach(column => {
        let c = column.clone();
        c.translateX(-2 * WIDTH)
        group.add(c);
        this.columns = [...this.columns, c];
      })

    }
  })

  group.translateX(position * WIDTH);
  this.mesh = group;
}

export default Columns;
