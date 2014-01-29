var scene;
var camera;
var width = 600;
var height = 400

renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColorHex(0xDDDDDD, 1);
renderer.setSize(width, height);
document.getElementById("container").appendChild(renderer.domElement);

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(65, width / height, 1, 100);
camera.position.z = 5;
scene.add(camera);

var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(-1.0, 1.0, 0.0));
geometry.vertices.push(new THREE.Vector3(1.0, 1.0, 0.0));
geometry.vertices.push(new THREE.Vector3(1.0, -1.0, 0.0));
geometry.vertices.push(new THREE.Vector3(-1.0, -1.0, 0.0));
geometry.vertices.push(new THREE.Vector3(-1.0, 1.0, 0.0));
var material = new THREE.LineBasicMaterial({ color: 0x000000 });

var line = new THREE.Line(geometry, material);
line.rotation.x = 40;
line.rotation.z = 40;
scene.add(line);

renderer.render(scene, camera);
