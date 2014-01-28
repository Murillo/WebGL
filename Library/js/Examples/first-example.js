var $container = $('#container');
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(600, 400);
$container.append(renderer.domElement);

var geometry = new THREE.CubeGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({
	color : 0x00ff00
});
var cubeGreen = new THREE.Mesh(geometry, material);
scene.add(cubeGreen);

camera.position.z = 3;
renderer.render(scene, camera);
