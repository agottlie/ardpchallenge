$(() => {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let colorValue = "#ff0000";

    setInterval(function() {
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: colorValue });
        var cube = new THREE.Mesh(geometry, material);
        camera.position.z = 5;
        cube.position.y = (Math.random() * 4) - 1;
        cube.position.x = (Math.random() * 10) - 5;
        scene.add(cube);

        var animate = function() {
            requestAnimationFrame(animate);

            cube.rotation.x += Math.random() * 0.1;
            cube.rotation.y += Math.random() * 0.1;

            geometry.colorsNeedUpdate = true;

            render()
        };

        animate();

	    $('#red').on('click', (e) => {
	        cube.material.color.setHex(0xff0000);
	        colorValue = "#ff0000"
	    })

	    $('#green').on('click', (e) => {
	        cube.material.color.setHex(0x008000);
	        colorValue = "#008000"
	    })

	    $('#blue').on('click', (e) => {
	        cube.material.color.setHex(0x0000ff);
	        colorValue = "#0000ff"
	    })

	    $('#orange').on('click', (e) => {
	        cube.material.color.setHex(0xffa500);
	        colorValue = "#ffa500"
	    })

	    $('#purple').on('click', (e) => {
	        cube.material.color.setHex(0x800080);
	        colorValue = "#800080"
	    })

	    $('#gray').on('click', (e) => {
	        cube.material.color.setHex(0x808080);
	        colorValue = "#808080"
	    })

    }, 1000);

    var render = function() {
        renderer.render(scene, camera);
    }


})