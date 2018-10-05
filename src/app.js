var renderer, scene, camera;

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
  var light = new THREE.DirectionalLight(0xffffff, 0.5);
  light.position.set(-1, -1, 1);
  scene.add(light);
  scene.add(new THREE.AmbientLight(0x404040));

  // Camera
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(0, 25, 125);

}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() { renderer.render(scene, camera); }