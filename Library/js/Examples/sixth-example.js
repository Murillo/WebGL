var renderer, scene, camera, cube, conteiner;
init();
render();

function init() {
    conteiner = document.getElementById('container');
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(600, 400);
    container.appendChild(renderer.domElement);

    var geometry = new THREE.CubeGeometry(1, 1, 1);
    for (var i = 0; i < geometry.faces.length; i++) {
        geometry.faces[i].color.setHex(Math.random() * 0xffffff);
    }

    var material = new THREE.MeshBasicMaterial({
        color: 0xffffff, vertexColors: THREE.FaceColors
    });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 3;
}

function render() {
    requestAnimationFrame(render);
    cube.rotation.y += 0.01;
    cube.rotation.x += 0.01;

    renderer.render(scene, camera);
}