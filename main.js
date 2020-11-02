let camera, scene, renderer, cube;

function init() {
	//Init scene
	scene = new THREE.Scene();

	//Init camera (PerspectiveCamera)
	camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);

	//Init renderer
	renderer = new THREE.WebGLRenderer({ antialias: true });

	//Set size (whole window)
	renderer.setSize(window.innerWidth, window.innerHeight);

	// Render to canvas element
	document.body.appendChild(renderer.domElement);

	const geometry = new THREE.BoxGeometry(3, 3, 3);

	// Create material with color

	const loader = new THREE.TextureLoader();
	const materials = [
		new THREE.MeshBasicMaterial({
			map: loader.load(
				"https://raw.githubusercontent.com/catherinemds/Rubik-Cube/master/textures/Cube2.0.png"
			),
		}),
		new THREE.MeshBasicMaterial({
			map: loader.load(
				"https://raw.githubusercontent.com/catherinemds/Rubik-Cube/master/textures/Cube2.1.png"
			),
		}),
		new THREE.MeshBasicMaterial({
			map: loader.load(
				"https://raw.githubusercontent.com/catherinemds/Rubik-Cube/master/textures/Cube2.2.png"
			),
		}),
		new THREE.MeshBasicMaterial({
			map: loader.load(
				"https://raw.githubusercontent.com/catherinemds/Rubik-Cube/master/textures/Cube2.3.png"
			),
		}),
		new THREE.MeshBasicMaterial({
			map: loader.load(
				"https://raw.githubusercontent.com/catherinemds/Rubik-Cube/master/textures/Cube2.4.png"
			),
		}),
		new THREE.MeshBasicMaterial({
			map: loader.load(
				"https://raw.githubusercontent.com/catherinemds/Rubik-Cube/master/textures/Cube2.5.png"
			),
		}),
	];

	cube = new THREE.Mesh(geometry, materials);

	scene.add(cube);

	// Position camera
	camera.position.z = 5;
}

// Draw the scene every time the screen is refreshed
function render() {
	requestAnimationFrame(render);

	//Rotate the sphere
	cube.rotation.x += 0.02;
	cube.rotation.y += 0.02;

	renderer.render(scene, camera);
}

function onWindowResize() {
	// Camera frustum aspect ratio
	camera.aspect = window.innerWidth / window.innerHeight;

	// After making changes to aspect
	camera.updateProjectionMatrix();

	// Reset size
	renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);

init();
render();
