import TEXTURES from './textures';

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

class BACKGROUND {
  constructor() {

    this.mesh = new THREE.Group();
    this.mesh.add(new THREE.Mesh(
      new THREE.PlaneGeometry(window.innerWidth, window.innerHeight, 32),
      new THREE.MeshPhongMaterial({ map: TEXTURES['05_far_BG'].tex })
    ));
    this.addLayer({ name: '00_roof_leaves', depth: 3, width: WIDTH, height: 10, position: 'TOP' });
    this.addLayer({ name: '02_front_canopy', depth: 2, width: WIDTH, height: 5, position: 'TOP' });
    this.addLayer({ name: '03_rear_canopy', depth: 1, width: WIDTH, height: 3, position: 'TOP' });
    this.addLayer({ name: '01_front_silhouette', depth: 2, width: WIDTH, height: 5, position: 'BOTTOM' })
    this.addLayer({ name: '03_rear_silhouette', depth: 1, width: WIDTH, height: 3, position: 'BOTTOM' });
    this.addLayer({ name: '02_tree_1', depth: 1, width: WIDTH / 4, height: 1, position: 'LEFT' });
    this.addLayer({ name: '02_tree_2', depth: 1, width: WIDTH / 4, height: 1, position: 'RIGHT' });
  }
}

BACKGROUND.prototype.addLayer = function ({ name, depth, width, height, position }) {
  const layer = new THREE.Mesh(
    new THREE.PlaneGeometry(width, HEIGHT / height, 32),
    new THREE.MeshPhongMaterial({ transparent: true, map: TEXTURES[name].tex })
  );
  layer.translateZ(depth * 100);
  if (position === 'TOP') layer.translateY(HEIGHT / 2 - HEIGHT / (height * 2));
  else if (position === 'BOTTOM') layer.translateY(-HEIGHT / 2 + HEIGHT / (height * 2));
  else if (position === 'LEFT') layer.translateX(-width);
  else if (position === 'RIGHT') layer.translateX(width);
  this.mesh.add(layer);
}

export default BACKGROUND;