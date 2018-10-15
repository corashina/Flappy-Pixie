import { Textures, WIDTH, HEIGHT } from './textures';
import Sound from './audio';

class Player {
  constructor(scene) { this.constructor(scene) };
}

Player.prototype.constructor = function (scene) {


  this.score = 0;
  this.mass = 3;
  this.speed = 3;
  this.audio = Sound;
  this.scene = scene;
  this.isAlive = false;
  this.velocity = new THREE.Vector3(0, 0, 0);
  this.mesh = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(WIDTH / 50, WIDTH / 50, 32),
    new THREE.MeshBasicMaterial({ transparent: true, map: Textures['flyingPixie'] })
  )
  this.mesh.translateY(-HEIGHT * 2);
  this.mesh.translateZ(255);
  this.addPlayButton({ info: true });

}

Player.prototype.update = function (delta) {

  this.box = new THREE.Box3().setFromObject(this.mesh);

  this.velocity.y -= 9.81 * this.mass * delta;
  this.isAlive ? null : this.mesh.rotation.z += 0.1;

  this.mesh.position.y += this.velocity.y;
  this.mesh.position.x += this.velocity.x;

  this.mesh.rotation.z = this.velocity.y < 0 ? this.mesh.rotation.z - 0.01 : this.mesh.rotation.z;
  this.mesh.rotation.z = this.velocity.y > 0 ? this.mesh.rotation.z + 0.01 : this.mesh.rotation.z;

  this.mesh.position.x = this.mesh.position.x > WIDTH ? - WIDTH : this.mesh.position.x;

}

Player.prototype.jump = function () {

  this.velocity.y = 10;
  this.audio.play('wing');

}

Player.prototype.checkCollision = function (objectList) {

  const closest = objectList.reduce((accumulator, object) =>
    Math.abs(new THREE.Box3().setFromObject(object).min.x - this.mesh.position.x) < accumulator ?
      Math.abs(new THREE.Box3().setFromObject(object).min.x - this.mesh.position.x) : accumulator, Infinity)

  const closest_obj = objectList.filter(object => Math.abs(new THREE.Box3().setFromObject(object).min.x - this.mesh.position.x) == closest);

  closest_obj.forEach(object => {

    const object_box = new THREE.Box3().setFromObject(object);

    if (this.isAlive) {
      if (this.box.min.x < object_box.getSize(new THREE.Vector3()).x + object_box.min.x &&
        this.box.min.x + this.box.getSize(new THREE.Vector3()).x > object_box.min.x) {

        if (object.userData.isColumn && !object.passed) {
          object.passed = true;
          this.audio.play('swooshing');
          this.updateScore(this.score + 5);
        } else if (this.box.min.y < object_box.getSize(new THREE.Vector3()).y + object_box.min.y &&
          this.box.min.y + this.box.getSize(new THREE.Vector3()).y > object_box.min.y) {

          if (object.userData.isColumn) this.hit();
          else if (object.userData.isPickup) this.pickup(object, objectList);
        }
      }
      if (this.mesh.position.y > HEIGHT / 2 || this.mesh.position.y < -HEIGHT / 2) this.hit();
    }

  })

}

Player.prototype.pickup = function (object, objectList) {

  this.audio.play('point');
  this.updateScore(this.score + object.userData.value);
  objectList = objectList.filter(e => e.uuid != object.uuid);
  object.parent.remove(object);

}

Player.prototype.hit = function () {

  this.isAlive = false;
  this.velocity.x = 0;
  this.velocity.y = 10;
  this.audio.play('hit');

  setTimeout(() => this.audio.play('die'), this.audio['hit'].duration * 1000);
  setTimeout(() => this.addPlayButton(), (this.audio['die'].duration + this.audio['hit'].duration) * 1000);

}

Player.prototype.addPlayButton = function ({ info }) {

  const playButton = info ?
    new THREE.Mesh(
      new THREE.PlaneBufferGeometry(WIDTH / 2, HEIGHT / 2, 1),
      new THREE.MeshBasicMaterial({ transparent: true, map: Textures['points'] })) :
    new THREE.Mesh(
      new THREE.PlaneBufferGeometry(128, 128, 1),
      new THREE.MeshBasicMaterial({ transparent: true, map: Textures['playButton'] })
    );
  playButton.position.x = this.mesh.position.x;
  this.playButton = playButton;
  this.scene.add(playButton);

}


Player.prototype.restart = function () {

  this.isAlive = true;

  this.mesh.position.x = 0;
  this.mesh.position.y = 0;

  this.mesh.rotation.z = 0;

  this.velocity.x = this.speed;
  this.velocity.y = 0;

  this.updateScore(0);
  document.querySelector('.countdown').remove();
}

Player.prototype.updateScore = function (score) {

  this.score = score;
  document.querySelector('.score').textContent = this.score;

}

export default Player;
