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
    container.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
    camera.position.set(10, 2, 20);
    camera.rotation.x = 5 * (Math.PI / 180);

    scene = new THREE.Scene();
    scene.add(camera);

    /* ********* Objects ***********  */

    // Texture of cube
    var boxTexture = new THREE.Texture();
    var loader = new THREE.ImageLoader();
    loader.addEventListener('load', function (event) {
        boxTexture.image = event.content;
        boxTexture.needsUpdate = true;
    });
    loader.load('../Library/images/eighth-example/box.jpg');

    // Texture of plane
    var planeTexture = new THREE.Texture();
    var planeLoader = new THREE.ImageLoader();
    planeLoader.addEventListener('load', function (event) {
        planeTexture.image = event.content;
        planeTexture.needsUpdate = true;
    });
    planeLoader.load('../Library/images/eighth-example/stone_texture.jpg');

    // Creating cubes
    var textureBox = "../Library/images/seventh-example/dice3.jpg";
    for (var i = 0; i < 10; i++) {

        var geometry = new THREE.CubeGeometry(1, 1, 1);
        var diceMaterial = new THREE.MeshFaceMaterial(
            new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture(textureBox) }));
        var material = new THREE.MeshLambertMaterial({ map: boxTexture, overdraw: true });
        var cubeGreen = new THREE.Mesh(geometry, material);
        cubeGreen.position.set(
            Math.floor((Math.random() * 15) + 1),
            0,
            Math.floor((Math.random() * 15) + 1)
        );
        scene.add(cubeGreen);
    }

    // Creating floor
    var planeMaterial = new THREE.MeshLambertMaterial({ map: planeTexture, overdraw: true });
    var planeGeometry = new THREE.PlaneGeometry(40, 30);
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.set(10, -1, 0);
    scene.add(plane);

    /* *****************************  */

    /* ************* Light *********  */
    var pointLight = new THREE.PointLight(0xFFFFFF);
    pointLight.position.x = 10;
    pointLight.position.y = 50;
    pointLight.position.z = 130;
    scene.add(pointLight);
    /* *****************************  */
}

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
