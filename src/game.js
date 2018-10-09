
import Background from './background';
import Columns from './columns';
import Player from './player';

class Game { }

Game.prototype.init = function () {
  this.prevTime = performance.now();
  this.columnList = [];
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
  this.camera.position.set(0, 0, window.innerWidth * 3)

  // Player
  this.player = new Player();
  this.scene.add(this.player.mesh);

  // Create background template
  const template = new Background();

  // Create background
  [-2, -1, 0, 1, 2].forEach(i => {
    const new_background = template.mesh.clone();
    new_background.translateX(i * window.innerWidth);
    this.scene.add(new_background);
  })

  // Events
  window.addEventListener('resize', (event) => this.onWindowResize(event), false);
  window.addEventListener('mousedown', (event) => this.onKeyDown(event), false);
}

Game.prototype.render = function () {
  this.time = performance.now();

  this.camera.position.x = this.player.mesh.position.x;

  this.columnList.forEach(column => this.player.checkCollision(column));

  this.updateMap(0);
  this.updateMap(1);

  this.player.update((this.time - this.prevTime) / 2000);

  this.prevTime = this.time;
  this.renderer.render(this.scene, this.camera);

}

Game.prototype.updateMap = function (position) {
  if (this.player.mesh.position.x == (position - 1) * window.innerWidth) {
    this.columnList = this.columnList.filter(column => column.parent.userData != position);
    this.scene.children.forEach(child => child.userData == position ? this.scene.remove(child) : null);
    let col = new Columns({ position });
    this.columnList = [...this.columnList, ...col.columns];
    this.scene.add(col.mesh);
  }
}

Game.prototype.animate = function () {
  requestAnimationFrame(() => this.animate());
  this.render();
}

Game.prototype.onKeyDown = function (event) {
  switch (event.which) {
    case 1:
      this.player.jump();
      break;
  }
}

Game.prototype.onWindowResize = function () {
  this.camera.aspect = window.innerWidth / window.innerHeight;
  this.camera.updateProjectionMatrix();
  this.renderer.setSize(window.innerWidth, window.innerHeight);
}

export default Game;