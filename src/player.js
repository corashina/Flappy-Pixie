import TEXTURES from './textures';
import AUDIO from './audio';

class PLAYER {
  constructor() {
    this.speed = 3;
    this.velocity = new THREE.Vector3(this.speed, 0, 0);
    this.mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(50, 50, 32),
      new THREE.MeshPhongMaterial({ transparent: true, map: TEXTURES['flyingPixie'].tex })
    )
    this.mesh.translateZ(250);
  }
}

PLAYER.prototype.update = function (delta) {

  this.box = new THREE.Box3().setFromObject(this.mesh);

  this.velocity.y -= 9.81 * 5 * delta;

  this.mesh.position.y += this.velocity.y;
  this.mesh.position.x += this.velocity.x;

  this.mesh.rotation.z = this.velocity.y < 0 ? this.mesh.rotation.z - 0.01 : this.mesh.rotation.z + 0.01;

  if (this.mesh.position.x > window.innerWidth) this.mesh.position.x = - window.innerWidth;

  if (this.mesh.position.y < -window.innerHeight / 2) {
    this.mesh.position.y = 0;
    this.mesh.rotation.z = 0;
    this.velocity.y = 0;
  }
}

PLAYER.prototype.jump = function () {
  this.velocity.y = 10;
  AUDIO.play('wing');
}

PLAYER.prototype.checkCollision = function (column) {

  let column_box = new THREE.Box3().setFromObject(column);
  if (this.box.min.x < column_box.getSize(new THREE.Vector3()).x + column_box.min.x &&
    this.box.min.x + this.box.getSize(new THREE.Vector3()).x > column_box.min.x &&
    this.box.min.y < column_box.getSize(new THREE.Vector3()).y + column_box.min.y &&
    this.box.min.y + this.box.getSize(new THREE.Vector3()).y > column_box.min.y) {

    AUDIO.play('hit');

  }
}

export default PLAYER;