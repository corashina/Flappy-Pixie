
import textures from './textures';
import PLAYER from './player';

const WIDTH = window.innerWidth, HEIHT = window.innerHeight;

var renderer, scene, camera, time;
var prevTime = performance.now();
var player = new PLAYER(textures['flyingPixie'].tex);

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

  var group = new THREE.Group();

  var geometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight, 32);
  var material = new THREE.MeshPhongMaterial({ map: textures['05_far_BG'].tex });
  var plane = new THREE.Mesh(geometry, material);
  group.add(plane);

  addLayer({ name: '00_roof_leaves', depth: 3, width: WIDTH, height: 10, group, position: 'TOP' });
  addLayer({ name: '02_front_canopy', depth: 2, width: WIDTH, height: 5, group, position: 'TOP' });
  addLayer({ name: '03_rear_canopy', depth: 1, width: WIDTH, height: 3, group, position: 'TOP' });
  addLayer({ name: '01_front_silhouette', depth: 2, width: WIDTH, height: 5, group, position: 'BOTTOM' })
  addLayer({ name: '03_rear_silhouette', depth: 1, width: WIDTH, height: 3, group, position: 'BOTTOM' });
  addLayer({ name: '02_tree_1', depth: 1, width: WIDTH / 4, height: 1, group, position: 'LEFT' });
  addLayer({ name: '02_tree_2', depth: 1, width: WIDTH / 4, height: 1, group, position: 'RIGHT' });

  scene.add(group);

  spawnColumns();
  scene.add(player.mesh);

}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  time = performance.now();

  camera.position.copy(player.mesh.position);
  camera.position.z += 1000;
  camera.target = player.mesh;

  player.update((time - prevTime) / 2000);

  prevTime = time;
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event) {
  camera.position.x += ((event.clientX - window.innerWidth / 2) / 2 - camera.position.x) * .01;
  camera.position.y += (-(event.clientY - window.innerHeight / 2) / 2 - camera.position.y) * .01;
  camera.lookAt(scene.position);
}

function onKeyDown(event) {
  switch (event.keyCode) {
    case 32:
      player.jump();
      break;
  }
}

function addLayer({ name, depth, width, height, group, position }) {
  const layer = new THREE.Mesh(
    new THREE.PlaneGeometry(width, HEIHT / height, 32),
    new THREE.MeshPhongMaterial({ transparent: true, map: textures[name].tex })
  );
  layer.translateZ(depth * 100);
  switch (position) {
    case 'TOP':
      layer.translateY(HEIHT / 2 - HEIHT / (height * 2));
      break
    case 'BOTTOM':
      layer.translateY(-HEIHT / 2 + HEIHT / (height * 2));
      break;
    case 'LEFT':
      layer.translateX(-width);
      break;
    case 'RIGHT':
      layer.translateX(width);
      break;
  }
  group.add(layer);
}

function spawnColumns() {
  const column1_height = Math.floor(Math.random() * 4) + 3;
  const column2_height = 9 - column1_height;

  const column1 = new THREE.Mesh(
    new THREE.PlaneGeometry(window.innerWidth / 20, window.innerHeight / 10 * column1_height, 32),
    new THREE.MeshPhongMaterial({ transparent: true, map: textures['column'].tex })
  );

  const column2 = new THREE.Mesh(
    new THREE.PlaneGeometry(window.innerWidth / 20, window.innerHeight / 10 * column2_height, 32),
    new THREE.MeshPhongMaterial({ transparent: true, map: textures['column'].tex })
  );

  column1.translateY(window.innerHeight / 2 - (window.innerHeight / 10 * column1_height) / 2);
  column1.translateZ(200);

  column2.translateY(-window.innerHeight / 2 + (window.innerHeight / 10 * column2_height) / 2);
  column2.translateZ(200);

  scene.add(column1);
  scene.add(column2);
}

// window.addEventListener('mousemove', onDocumentMouseMove, false);
window.addEventListener('resize', onWindowResize, false);
window.addEventListener('keydown', onKeyDown, false);