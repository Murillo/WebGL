var container, scene, renderer;
var cube, camera
var width = 600;
var height = 400;

init();
animate();

function init() {

    container = document.getElementById('container');
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.setClearColorHex(0xEEEEEE, 1);
    container.appendChild(renderer.domElement);


    camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000);
    camera.position.y = 150;
    camera.position.z = 500;
    scene = new THREE.Scene();


    var geometry = new THREE.CubeGeometry(200, 200, 200, 10, 10, 10);
    var material = new THREE.MeshLambertMaterial({
        color: 0xFF0000
    });

    cube = new THREE.Mesh(geometry, material);
    cube.position.y = 150;
    scene.add(cube);

    var pointLight = new THREE.PointLight(0xFFFFFF);
    pointLight.position.x = 10;
    pointLight.position.y = 200;
    pointLight.position.z = 200;
    scene.add(pointLight);

}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    TWEEN.update();
    renderer.render(scene, camera);
}

function prev() {
    if (!TWEEN.update()) {
        new TWEEN.Tween(cube.rotation).to({
            x: 0,
            y: cube.rotation.y + 90 * (Math.PI / 180),
            z: 0
        }, 500).easing(TWEEN.Easing.Quadratic.InOut).start();
    }
}

function next() {
    if (!TWEEN.update()) {
        new TWEEN.Tween(cube.rotation).to({
            x: 0,
            y: cube.rotation.y - 90 * (Math.PI / 180),
            z: 0
        }, 500).easing(TWEEN.Easing.Quadratic.InOut).start();
    }
}