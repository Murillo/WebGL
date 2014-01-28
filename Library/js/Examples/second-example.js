var $container = $('#container');
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(600, 400);
$container.append(renderer.domElement);

// sphere
// THREE.SphereGeometry(radius, segments, rings)
var radius = 8, segments = 32, rings = 32;
var sphereGeometry = new THREE.SphereGeometry(radius, segments, rings);
var sphereMaterial = new THREE.MeshLambertMaterial({
	color : 0xFFF000
});
var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

//  THREE.CylinderGeometry(bottomRadius, topRadius, height, radius, rings)
var cylinderGeometryRed = new THREE.CylinderGeometry(5, 5, 10, 32, 32);
var cylinderMaterialRed = new THREE.MeshLambertMaterial({
	color : 0xFF0000
});
var redCylinder = new THREE.Mesh(cylinderGeometryRed, cylinderMaterialRed);
redCylinder.position.x = 20;
scene.add(redCylinder);

//  THREE.CubeGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)
var cubeGeometryBlue = new THREE.CubeGeometry(10, 10, 10);
var cubeMaterialBlue = new THREE.MeshLambertMaterial({
	color : 0x0000CC
});
var blueCube = new THREE.Mesh(cubeGeometryBlue, cubeMaterialBlue);
blueCube.position.x = -20;
scene.add(blueCube);

var pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;
scene.add(pointLight);

camera.position.z = 35;
renderer.render(scene, camera); 