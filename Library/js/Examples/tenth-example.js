var container, camera;
var group, scene, renderer;
var width = 600;
var height = 400;

init();
render();

function init() {

    container = document.getElementById('container');
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColorHex(0xEEEEEE, 1);
    renderer.shadowMapEnabled = true;
    container.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
    camera.position.set(15, 20, 40);
    camera.rotation.x = -20 * (Math.PI / 180);

    scene = new THREE.Scene();
    scene.add(camera);

    /* ********* Objects ***********  */
    var axes = new THREE.AxisHelper(10);
    scene.add(axes);

    var planeGeometry = new THREE.PlaneGeometry(50, 20);
    var planeMaterial = new THREE.MeshLambertMaterial({ color: 0xC0C0C0 });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 15;
    plane.position.y = 0;
    plane.position.z = 0;
    scene.add(plane);

    var cubeGeometry = new THREE.CubeGeometry(4, 4, 4);
    var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;
    cube.position.x = 30;
    cube.position.y = 2;
    cube.position.z = 0;
    scene.add(cube);
    /* *****************************  */

    /* ************* Spot Light *********  */
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-40, 70, -30);
    spotLight.castShadow = true;
    scene.add(spotLight)
    /* *****************************  */

}

function render() {
    renderer.render(scene, camera);
}