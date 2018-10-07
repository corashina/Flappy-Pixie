
import BACKGROUND from './background';
import PLAYER from './player';
import COLUMNS from './columns';

var renderer, scene, camera, time, player;
var columnList = [];
var prevTime = performance.now();

init();
animate();

function init() {

  // Scene
  scene = new THREE.Scene();

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: document.querySelector('canvas') });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Light
  scene.add(new THREE.AmbientLight(0xffffff));

  // Camera
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(0, 0, 1500)

  // Player
  player = new PLAYER();
  scene.add(player.mesh);

  // Background
  const template = new BACKGROUND();

  [-2, -1, 0, 1, 2].forEach(i => {
    var new_background = template.mesh.clone();
    new_background.translateX(i * window.innerWidth);
    scene.add(new_background)
  })


}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  time = performance.now();

  camera.position.x = player.mesh.position.x;
  camera.position.z = window.innerWidth * 3;
  camera.target = player.mesh;

  if (player.mesh.position.x == -window.innerWidth) {
    console.log("XD")
    columnList = columnList.filter(column => column.parent.userData != 0);
    scene.children.forEach(child => child.userData == 0 ? scene.remove(child) : null);
    let col = new COLUMNS({ position: 0 });
    columnList = [...columnList, ...col.columns];
    scene.add(col.mesh);
  }
  if (player.mesh.position.x == 0) {
    columnList = columnList.filter(column => column.parent.userData != 1);
    scene.children.forEach(child => child.userData == 1 ? scene.remove(child) : null);
    let col = new COLUMNS({ position: 1 });
    columnList = [...columnList, ...col.columns];
    scene.add(col.mesh);
  }
  player.update((time - prevTime) / 2000);

  columnList.forEach(column => player.checkCollision(column));

  prevTime = time;
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseDown(event) {
  switch (event.which) {
    case 1:
      player.jump();
      break;
  }
}

window.addEventListener('resize', onWindowResize, false);
window.addEventListener('mousedown', onMouseDown, false);