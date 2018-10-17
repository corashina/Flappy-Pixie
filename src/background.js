import { Textures, WIDTH, HEIGHT } from './textures';

class Background { constructor() { this.constructor() } }

Background.prototype.constructor = function () {

  this.mesh = new THREE.Group();

  // Add background
  this.addLayer({ name: '05_far_BG', depth: 5 });

  // Add top leaves
  this.addLayer({ name: '00_roof_leaves', depth: -1, w_ratio: 1, h_ratio: 5, position: 'TOP' });
  this.addLayer({ name: '02_front_canopy', depth: 1, w_ratio: 1, h_ratio: 5, position: 'TOP' });
  this.addLayer({ name: '03_rear_canopy', depth: 4, w_ratio: 1, h_ratio: 3, position: 'TOP' });

  // Add flowers
  this.addLayer({ name: '01_hanging_flower1', depth: 3, w_ratio: 100, h_ratio: 2, position: 'TOP' });
  this.addLayer({ name: '01_hanging_flower2', depth: 3, w_ratio: 100, h_ratio: 2, position: 'TOP' });
  this.addLayer({ name: '01_hanging_flower3', depth: 3, w_ratio: 100, h_ratio: 2, position: 'TOP' });

  // Add bottom grass
  this.addLayer({ name: '01_front_silhouette', depth: 1, w_ratio: 1, h_ratio: 3, position: 'BOTTOM' })
  this.addLayer({ name: '03_rear_silhouette', depth: 3, w_ratio: 1, h_ratio: 2, position: 'BOTTOM' });

  // Add trees
  this.addLayer({ name: '02_tree_1', depth: 3, w_ratio: 4, h_ratio: 1, position: 'LEFT' });
  this.addLayer({ name: '02_tree_2', depth: 3, w_ratio: 4, h_ratio: 1, position: 'RIGHT' });

  // Add animated lava
  this.addLayer({ name: 'lava_slosh_01', depth: 0, w_ratio: 5, h_ratio: 10, position: 'BOTTOM' });

}

Background.prototype.addLayer = function ({ name, depth, w_ratio, h_ratio, position }) {

  this.layerName = name;
  this.depth = depth;
  this.layerWidth = w_ratio ? WIDTH / w_ratio : WIDTH + WIDTH / 100;
  this.layerHeight = h_ratio ? HEIGHT / h_ratio : HEIGHT;

  const layer = new THREE.Mesh(
    new THREE.PlaneGeometry(this.layerWidth, this.layerHeight),
    new THREE.MeshBasicMaterial({ transparent: true, map: Textures[name] })
  );

  this.layer = layer;
  this.layer.translateZ(-this.depth * 100);
  this.changePosition(position);

  this.layerStore = [layer];

  // Check for layers which need special treatment
  name.includes('lava') ? this.addAnimation() : null;
  name.includes('flower') ? this.addFlowers() : null;

  this.layerStore.forEach(layer => this.mesh.add(layer));

}

Background.prototype.changePosition = function (position) {

  if (position === 'TOP') this.layer.translateY(HEIGHT / 2 - this.layerHeight / 2);
  else if (position === 'BOTTOM') this.layer.translateY(-HEIGHT / 2 + this.layerHeight / 2);
  else if (position === 'LEFT') this.layer.translateX(-this.layerWidth);
  else if (position === 'RIGHT') this.layer.translateX(this.layerWidth);

}

Background.prototype.addAnimation = function () {

  // Add 5 lava tiles for every background and set animated flag
  this.layer.userData.animated = true;
  [-2, -1, 0, 1, 2].forEach(i => {
    let lava = this.layer.clone();
    lava.translateX(i * WIDTH / 5);
    this.layerStore.push(lava);
  });

}

Background.prototype.addFlowers = function () {

  // Randomize flowers position Y and Z (depth)
  [-1.5, 0, 1.5].forEach(i => {
    const flower = this.layer.clone();
    flower.translateX(i * WIDTH / 5 + (this.layerName[this.layerName.length - 1]) * this.layerWidth * 5);
    flower.translateY(Math.floor(Math.random() * 5) * this.layerHeight / 5);
    flower.translateZ(-Math.floor(Math.random() * 5) * this.depth * 10);
    this.layerStore.push(flower);
  });

  this.layerStore.forEach(layer => layer.translateY(-this.layerHeight / 4))
}

export default Background;