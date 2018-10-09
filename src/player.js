import { Textures, WIDTH, HEIGHT } from './textures';
import Sound from './audio';

class Player {
  constructor() { this.constructor() };
}

Player.prototype.constructor = function () {

  this.score = 0;
  this.mass = 3;
  this.speed = 3;
  this.audio = Sound;
  this.velocity = new THREE.Vector3(this.speed, 0, 0);
  this.mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(50, 50, 32),
    new THREE.MeshPhongMaterial({ transparent: true, map: Textures['flyingPixie'] })
  )
  this.mesh.translateZ(255);

}

Player.prototype.update = function (delta) {

  this.box = new THREE.Box3().setFromObject(this.mesh);

  this.velocity.y -= 9.81 * this.mass * delta;

  this.mesh.position.y += this.velocity.y;
  this.mesh.position.x += this.velocity.x;

  this.mesh.rotation.z = this.velocity.y < 0 ? this.mesh.rotation.z - 0.01 : null;
  this.mesh.rotation.z = this.velocity.y > 0 ? this.mesh.rotation.z + 0.01 : null;

  this.mesh.position.x = this.mesh.position.x > WIDTH ? - WIDTH : this.mesh.position.x;

}

Player.prototype.jump = function () {

  this.velocity.y = 10;
  this.audio.play('wing');

}

Player.prototype.checkCollision = function (column) {

  const column_box = new THREE.Box3().setFromObject(column);

  if (this.box.min.x < column_box.getSize(new THREE.Vector3()).x + column_box.min.x &&
    this.box.min.x + this.box.getSize(new THREE.Vector3()).x > column_box.min.x && !column.passed) {
    column.passed = true;
    this.updateScore(this.score + 0.5);
  }

  if (this.velocity.x != 0) {
    if (this.box.min.x < column_box.getSize(new THREE.Vector3()).x + column_box.min.x &&
      this.box.min.x + this.box.getSize(new THREE.Vector3()).x > column_box.min.x &&
      this.box.min.y < column_box.getSize(new THREE.Vector3()).y + column_box.min.y &&
      this.box.min.y + this.box.getSize(new THREE.Vector3()).y > column_box.min.y) {
      this.hit();
    }
    if (this.mesh.position.y > WIDTH / 2 || this.mesh.position.y < -HEIGHT / 2) {
      this.hit();
    }
  }
}

Player.prototype.hit = function () {

  this.velocity.x = 0;
  this.velocity.y = 10;
  this.audio.play('hit');

  const playButton = document.createElement('img');
  playButton.src = '../assets/playButton.png';
  playButton.addEventListener('click', (event) => this.restart(), false)
  document.body.prepend(playButton);

}

Player.prototype.restart = function () {

  this.mesh.position.x = 0;
  this.mesh.position.y = 0;

  this.mesh.rotation.z = 0;

  this.velocity.x = this.speed;
  this.velocity.y = 0;

  this.updateScore(0);

  document.querySelector('img').remove();

}

Player.prototype.updateScore = function (score) {

  this.score = score;
  document.querySelector('.score').textContent = this.score;

}

export default Player;
