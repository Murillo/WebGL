var container, camera, controls;
var group, scene, renderer;
var width = 600;
var height = 400;

init();
render();

function init() {

    container = document.getElementById('container');
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColorHex(0x333F47, 1);
    renderer.shadowMapEnabled = true;
    container.appendChild(renderer.domElement);

    /* ********* Camera ***********  */
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 20000);
    camera.position.set(2, 2, 6);

    scene = new THREE.Scene();
    scene.add(camera);

    /* ********* Objects ***********  */
    var loader = new THREE.JSONLoader();
    loader.load("../Library/js/Examples/models/monkey-example/monkey.js", function (geometry, materials) {
        mesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
        mesh.castShadow = true;
        mesh.position.set(-0.5, -0.5, 0);
        scene.add(mesh);
    });
    /* *****************************  */


    /* ************* Spot Light *********  */
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-30, 70, 40);
    spotLight.castShadow = true;
    scene.add(spotLight)
    /* *****************************  */


    /* ********* OrbitControls ***********  */
    controls = new THREE.OrbitControls(camera, renderer.domElement);
}

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    controls.update();
}