var container, camera, object;
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
    camera.position.set(15, 20, 40);
    camera.rotation.x = -20 * (Math.PI / 180);

    scene = new THREE.Scene();
    scene.add(camera);

    /* ********* Objects ***********  */

    var geometry = new THREE.Geometry();
    var v1 = new THREE.Vector3(0, 0, 0);
    var v2 = new THREE.Vector3(0, 10, 0);
    var v3 = new THREE.Vector3(0, 0, 10);

    geometry.vertices.push(v1);
    geometry.vertices.push(v2);
    geometry.vertices.push(v3);

    geometry.faces.push(new THREE.Face3(0, 1, 2));
    geometry.computeFaceNormals();

    var material = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    object = new THREE.Mesh(geometry, material);
    object.flipSided = false;
    object.doubleSided = true;
    object.position.set(15, 5, 10);
    object.rotation.y = -45 * (Math.PI / 180);
    scene.add(object);


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
    renderer.render(scene, camera);
}