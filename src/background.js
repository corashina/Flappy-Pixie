import { Textures, WIDTH, HEIGHT } from './textures';

class Background {
  constructor() { this.constructor() }
}

Background.prototype.constructor = function () {

  this.mesh = new THREE.Group();
  this.mesh.add(new THREE.Mesh(
    new THREE.PlaneGeometry(WIDTH, HEIGHT, 32),
    new THREE.MeshPhongMaterial({ map: Textures['05_far_BG'] })
  ));

  this.addLayer({ name: '00_roof_leaves', depth: 3, width: 1, height: 10, position: 'TOP' });
  this.addLayer({ name: '02_front_canopy', depth: 2, width: 1, height: 5, position: 'TOP' });
  this.addLayer({ name: '03_rear_canopy', depth: 1, width: 1, height: 3, position: 'TOP' });
  this.addLayer({ name: '01_hanging_flower1', depth: 1, width: 100, height: 2, position: 'TOP' });
  this.addLayer({ name: '01_hanging_flower2', depth: 1, width: 100, height: 2, position: 'TOP' });
  this.addLayer({ name: '01_hanging_flower3', depth: 1, width: 100, height: 2, position: 'TOP' });

  this.addLayer({ name: '01_front_silhouette', depth: 2, width: 1, height: 3, position: 'BOTTOM' })
  this.addLayer({ name: '03_rear_silhouette', depth: 1, width: 1, height: 2, position: 'BOTTOM' });
  this.addLayer({ name: 'lava_slosh_01', depth: 3, width: 5, height: 10, position: 'BOTTOM', animated: true });


  this.addLayer({ name: '02_tree_1', depth: 1, width: 4, height: 1, position: 'LEFT' });
  this.addLayer({ name: '02_tree_2', depth: 1, width: 4, height: 1, position: 'RIGHT' });

}

Background.prototype.addLayer = function ({ name, depth, width, height, position, animated }) {

  const layer = new THREE.Mesh(
    new THREE.PlaneGeometry(WIDTH / width, HEIGHT / height, 32),
    new THREE.MeshPhongMaterial({ transparent: true, map: Textures[name] })
  );

  layer.translateZ(depth * 100);

  if (position === 'TOP') layer.translateY(HEIGHT / 2 - HEIGHT / (height * 2));
  if (position === 'BOTTOM') layer.translateY(-HEIGHT / 2 + HEIGHT / (height * 2));
  if (position === 'LEFT') layer.translateX(-WIDTH / width);
  if (position === 'RIGHT') layer.translateX(WIDTH / width);

  if (animated) {
    layer.userData.animated = true;
    [-2, -1, 0, 1, 2].forEach(i => {
      const new_background = layer.clone();
      new_background.translateX(i * WIDTH / 5);
      this.mesh.add(new_background);
    })
  } else if (name.includes('flower')) {
    [-2, -1, 0, 1, 2].forEach(i => {
      const new_background = layer.clone();
      new_background.translateX(i * WIDTH / 5 + (name[name.length - 1]) * width);
      this.mesh.add(new_background);
    })
  } else {
    this.mesh.add(layer);
  }

}

export default Background;