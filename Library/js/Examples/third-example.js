var $container = $('#container');
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(600, 400);
$container.append(renderer.domElement);

var geometry = new THREE.CubeGeometry(1, 1, 1);
var material = new THREE.MeshNormalMaterial({
    color: 0x000000
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3;

function render() {
    requestAnimationFrame(render);
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

render();
