var container, camera, scene, renderer, particleSystem;
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
    camera.position.set(2, 2, 0);

    /* ********* Scene ***********  */
    scene = new THREE.Scene();
    scene.add(camera);

    /* ********* Particles ***********  */
    var particleCount = 2000;
    var particles = new THREE.Geometry();
    var material = new THREE.ParticleBasicMaterial({ 
        color: 0xFFFFFF, 
        size: 5,
        map: THREE.ImageUtils.loadTexture("./../Library/images/thirteen-example/particle.png"),
        blending: THREE.AdditiveBlending,
        transparent: true 
    });
    
    for (var p = 0; p < particleCount; p++) {
        var pX = Math.random() * 500 - 250,
            pY = Math.random() * 500 - 250,
            pZ = Math.random() * 500 - 250,
            particle = new THREE.Vertex(
                new THREE.Vector3(pX, pY, pZ)
            );
        particle.velocity = new THREE.Vector3( 0, -Math.random(), 0);
        particles.vertices.push(particle);
    }
    
    particleSystem = new THREE.ParticleSystem(particles, material);
    particleSystem.sortParticles = true;
    
    scene.add(particleSystem);
}

function render() {
    particleSystem.rotation.y += 0.01;
    particleSystem.rotation.z += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}