class PLAYER {
  constructor(texture) {
    this.velocity = new THREE.Vector3(1, 0, 0);
    this.mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(50, 50, 32),
      new THREE.MeshPhongMaterial({ transparent: true, map: texture })
    )
    this.mesh.translateZ(250);
  }
}

PLAYER.prototype.update = function (delta) {
  this.mesh.position.y += this.velocity.y;
  this.mesh.position.x += this.velocity.x;
  this.velocity.y -= 9.81 * 3 * delta;

  if (this.velocity.y < 0) this.mesh.rotation.z -= 0.01;
  if (this.velocity.y > 0) this.mesh.rotation.z += 0.01;
  if (this.mesh.position.y < -window.innerHeight / 2) {
    this.mesh.position.y = 0;
    this.mesh.rotation.z = 0;
    this.velocity.y = 0;
  }
}

PLAYER.prototype.jump = function () {
  if (this.velocity.y < 2) this.velocity.y += 10;
}

export default PLAYER;