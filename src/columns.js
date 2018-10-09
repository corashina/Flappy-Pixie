import Textures from './textures';

class Columns {
  constructor({ position }) { this.constructor({ position }) }
}

Columns.prototype.constructor = function ({ position }) {
  this.columns = [];

  let group = new THREE.Group();
  group.userData = position;

  for (var i = -2; i <= 2; i++) {
    const column1_height = Math.floor(Math.random() * 4) + 3;
    const column2_height = 8 - column1_height;

    let column1 = new THREE.Mesh(
      new THREE.PlaneGeometry(window.innerWidth / 20, window.innerHeight / 10 * column1_height, 32),
      new THREE.MeshPhongMaterial({ transparent: true, map: Textures['column'] })
    );

    let column2 = new THREE.Mesh(
      new THREE.PlaneGeometry(window.innerWidth / 20, window.innerHeight / 10 * column2_height, 32),
      new THREE.MeshPhongMaterial({ transparent: true, map: Textures['column'] })
    );

    column1.translateX(i * window.innerWidth / 5);
    column1.translateY(window.innerHeight / 2 - (window.innerHeight / 10 * column1_height) / 2);
    column1.translateZ(250);

    column2.translateX(i * window.innerWidth / 5);
    column2.translateY(-window.innerHeight / 2 + (window.innerHeight / 10 * column2_height) / 2);
    column2.translateZ(250);

    this.columns = [...this.columns, column1, column2];

    [column1, column2].forEach(column => group.add(column))

    if (position == 1) {

      [column1, column2].forEach(column => {
        let c = column.clone();
        c.translateX(-2 * window.innerWidth)
        group.add(c);
        this.columns = [...this.columns, c];
      })

    }
  }
  group.translateX(position * window.innerWidth);
  this.mesh = group;
}

export default Columns;
