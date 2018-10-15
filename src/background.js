import { Textures, WIDTH, HEIGHT } from './textures';

class Background {
  constructor() { this.constructor() }
}

Background.prototype.constructor = function () {

  this.mesh = new THREE.Group();

  this.addLayer({ name: '05_far_BG', depth: 5 });

  // Add top leaves
  this.addLayer({ name: '00_roof_leaves', depth: -1, width: 1, height: 5, position: 'TOP' });
  this.addLayer({ name: '02_front_canopy', depth: 1, width: 1, height: 5, position: 'TOP' });
  this.addLayer({ name: '03_rear_canopy', depth: 4, width: 1, height: 3, position: 'TOP' });

  // Add flowers
  this.addLayer({ name: '01_hanging_flower1', depth: 3, width: 100, height: 2, position: 'TOP' });
  this.addLayer({ name: '01_hanging_flower2', depth: 3, width: 100, height: 2, position: 'TOP' });
  this.addLayer({ name: '01_hanging_flower3', depth: 3, width: 100, height: 2, position: 'TOP' });

  // Add bottom grass
  this.addLayer({ name: '01_front_silhouette', depth: 1, width: 1, height: 3, position: 'BOTTOM' })
  this.addLayer({ name: '03_rear_silhouette', depth: 3, width: 1, height: 2, position: 'BOTTOM' });

  // Add trees
  this.addLayer({ name: '02_tree_1', depth: 3, width: 4, height: 1, position: 'LEFT' });
  this.addLayer({ name: '02_tree_2', depth: 3, width: 4, height: 1, position: 'RIGHT' });

  // Add animated lava
  this.addLayer({ name: 'lava_slosh_01', depth: 0, width: 5, height: 10, position: 'BOTTOM' });

}

Background.prototype.addLayer = function ({ name, depth, width, height, position }) {

  this.layerName = name;
  this.depth = depth;
  this.layerWidth = width ? WIDTH / width : WIDTH + WIDTH / 100;
  this.layerHeight = height ? HEIGHT / height : HEIGHT;

  const layer = new THREE.Mesh(
    new THREE.PlaneGeometry(this.layerWidth, this.layerHeight),
    new THREE.MeshBasicMaterial({ transparent: true, map: Textures[name] })
  );

  this.layer = layer;
  this.layer.translateZ(-this.depth * 100);
  this.changePosition(position);

  this.layerStore = [layer];

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
  this.layer.userData.animated = true;
  [-2, -1, 0, 1, 2].forEach(i => {
    const lava = this.layer.clone();
    lava.translateX(i * WIDTH / 5);
    this.layerStore.push(lava);
  })
}

Background.prototype.addFlowers = function () {

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