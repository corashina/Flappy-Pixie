
import { Textures, WIDTH, HEIGHT } from './textures';
import Background from './background';
import Columns from './columns';
import Player from './player';

class Game { }

Game.prototype.init = function () {

  // Arrays
  this.columnList = [];
  this.pickupList = [];
  this.animated = [];

  // Utilities
  this.raycaster = new THREE.Raycaster();
  this.mouse = new THREE.Vector2();
  this.clock = new THREE.Clock();

  // Scene
  this.scene = new THREE.Scene();

  // Renderer
  this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: document.querySelector('canvas') });
  this.renderer.setPixelRatio(window.devicePixelRatio);
  this.renderer.setSize(window.innerWidth, window.innerHeight);

  // Light
  this.scene.add(new THREE.AmbientLight(0xffffff));

  // Camera
  this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
  this.camera.position.set(0, 0, 1200)

  // Player
  this.player = new Player(this.scene);
  this.scene.add(this.player.mesh);

  // Create background template
  const template = new Background();

  // Create background
  [-2, -1, 0, 1, 2].forEach(i => {
    const new_background = template.mesh.clone();
    new_background.translateX(i * WIDTH);
    this.scene.add(new_background);
  })

  this.scene.traverse(child => child.userData.animated ? this.animated.push(child) : null)

  // Events
  window.addEventListener('resize', (event) => this.onWindowResize(event), false);
  window.addEventListener('mousedown', (event) => this.onMouseDown(event), false);
}

Game.prototype.render = function () {

  this.camera.position.x = this.player.mesh.position.x;

  this.player.checkPickup(this.pickupList);
  this.player.checkCollision(this.columnList);

  this.updateMap(0);
  this.updateMap(1);

  this.player.update(this.clock.getDelta());
  this.updateAnimations(this.clock.getElapsedTime());

  this.renderer.render(this.scene, this.camera);
}

Game.prototype.updateMap = function (position) {

  if (this.player.mesh.position.x == (position - 1) * window.innerWidth) {

    this.columnList = this.columnList.filter(column => column.parent.userData != position);
    this.scene.children.forEach(child => child.userData == position ? this.scene.remove(child) : null);

    const columnArray = new Columns(position);
    this.columnList = [...this.columnList, ...columnArray.columns];
    this.scene.add(columnArray.mesh);

  }

}

Game.prototype.updateAnimations = function (delta) {

  // Number 1-16
  delta = Math.floor(delta * 16) % 16 + 1;

  // Number 1-8 then 8-1 to make an animation loop instead of restarting it
  delta = delta > 8 ? 16 - delta : delta;
  this.animated.forEach(texture => texture.material.map = Textures[`lava_slosh_0${delta}`])
}

Game.prototype.animate = function () {

  requestAnimationFrame(() => this.animate());
  this.render();

}

Game.prototype.onMouseDown = function (event) {

  switch (event.which) {
    case 1:
      this.player.isAlive ? this.player.jump() : this.restart(event);
      break;
  }

}

Game.prototype.restart = function (event) {

  this.mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
  this.mouse.y = - (event.clientY / this.renderer.domElement.clientHeight) * 2 + 1;

  this.raycaster.setFromCamera(this.mouse, this.camera);

  const intersects = this.raycaster.intersectObjects([this.player.playButton], false);

  if (intersects.length > 0) {

    this.scene.remove(intersects[0].object)
    this.player.restart();

  }
}

Game.prototype.onWindowResize = function () {

  this.camera.aspect = window.innerWidth / window.innerHeight;
  this.camera.updateProjectionMatrix();
  this.renderer.setSize(window.innerWidth, window.innerHeight);

}

export default Game;