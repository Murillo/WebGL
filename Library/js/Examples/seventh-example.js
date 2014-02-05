var container, camera;
var group, scene, renderer;
var width = 600;
var height = 400

init();
render();

function init() {

    container = document.getElementById('container');
    camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
    camera.position.z = 50;

    scene = new THREE.Scene();
    group = new THREE.Object3D();
    scene.add(group);

    var marsTexture = new THREE.Texture();
    var loader = new THREE.ImageLoader();
    loader.addEventListener('load', function (event) {
        marsTexture.image = event.content;
        marsTexture.needsUpdate = true;
    });

    loader.load('../Library/images/texture-webgl.jpg');

    var geometry = new THREE.CubeGeometry(10, 10, 10);
    var material = new THREE.MeshBasicMaterial({ map: marsTexture, overdraw: true });

    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.set(5, 15, 10);
    group.add(mesh);

    var materialArray = [];
    materialArray.push(new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('../Library/images/seventh-example/dice1.jpg') }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('../Library/images/seventh-example/dice2.jpg') }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('../Library/images/seventh-example/dice3.jpg') }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('../Library/images/seventh-example/dice6.jpg') }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('../Library/images/seventh-example/dice4.jpg') }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('../Library/images/seventh-example/dice5.jpg') }));
    var diceMaterial = new THREE.MeshFaceMaterial(materialArray);

    var diceGeom = new THREE.CubeGeometry(10, 10, 10);
    var diceMesh = new THREE.Mesh(diceGeom, diceMaterial);
    diceMesh.position.set(10, 15, 0);
    diceMesh.rotation.set(10, 15, 0);
    group.add(diceMesh);
   
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);
}

function render() {
    requestAnimationFrame(render);

    camera.lookAt(scene.position);
    group.rotation.y -= 0.005;
    group.rotation.x -= 0.005;
    group.rotation.z -= 0.005;
    renderer.render(scene, camera);

}
