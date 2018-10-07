import TEXTURES from './textures';

class COLUMNS {
  constructor({ position }) {

    this.columns = [];

    let group = new THREE.Group();
    group.userData = position;

    for (var i = -2; i <= 2; i++) {
      let column1_height = Math.floor(Math.random() * 4) + 3;
      let column2_height = 8 - column1_height;

      let column1 = new THREE.Mesh(
        new THREE.PlaneGeometry(window.innerWidth / 20, window.innerHeight / 10 * column1_height, 32),
        new THREE.MeshPhongMaterial({ transparent: true, map: TEXTURES['column'].tex })
      );

      let column2 = new THREE.Mesh(
        new THREE.PlaneGeometry(window.innerWidth / 20, window.innerHeight / 10 * column2_height, 32),
        new THREE.MeshPhongMaterial({ transparent: true, map: TEXTURES['column'].tex })
      );

      column1.translateX(i * window.innerWidth / 5);
      column1.translateY(window.innerHeight / 2 - (window.innerHeight / 10 * column1_height) / 2);
      column1.translateZ(250);

      column2.translateX(i * window.innerWidth / 5);
      column2.translateY(-window.innerHeight / 2 + (window.innerHeight / 10 * column2_height) / 2);
      column2.translateZ(250);

      this.columns = [...this.columns, column1, column2];
      group.add(column1);
      group.add(column2);
      if (position == 1) {
        let c1 = column1.clone();
        c1.translateX(-2 * window.innerWidth)
        group.add(c1);

        let c2 = column2.clone();
        c2.translateX(-2 * window.innerWidth)
        group.add(c2);

        this.columns = [...this.columns, c1, c2];
      }
    }
    group.translateX(position * window.innerWidth);
    this.mesh = group;
  }
}


export default COLUMNS;