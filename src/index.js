$(() => {

//scene setup---------------------------------------
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


//variable initialization----------------------------
    let colorValue = "#ff0000";
    let scale = 1;


//mechanism to create a new cube every second-------
    setInterval(function() {
        
        //initialize a mesh-------------------------
        var geometry = new THREE.BoxGeometry(1,1,1);
        var material = new THREE.MeshBasicMaterial({ color: colorValue });
        var cube = new THREE.Mesh(geometry, material);
        
        //provide scale to scene--------------------
        camera.position.z = 5;

        //give each cube a random position, and the current scale
        cube.position.y = (Math.random() * 4) - 1;
        cube.position.x = (Math.random() * 10) - 5;
        cube.scale.set(scale,scale,scale);
        scene.add(cube);

        //animate scene------------------------------
        var animate = function() {
            requestAnimationFrame(animate);

            //random rotations-----------------------
            cube.rotation.x += Math.random() * 0.1;
            cube.rotation.y += Math.random() * 0.1;

            //allow for color updates-----------------
            geometry.colorsNeedUpdate = true;

            //render upon completion----------------
            render();
        };

        animate();

        //color change event listeners----------------
	    $('#red').on('click', (e) => {
	        cube.material.color.setHex(0xff0000);
	        colorValue = "#ff0000"
	    });

	    $('#green').on('click', (e) => {
	        cube.material.color.setHex(0x008000);
	        colorValue = "#008000"
	    });

	    $('#blue').on('click', (e) => {
	        cube.material.color.setHex(0x0000ff);
	        colorValue = "#0000ff"
	    });

	    $('#orange').on('click', (e) => {
	        cube.material.color.setHex(0xffa500);
	        colorValue = "#ffa500"
	    });

	    $('#purple').on('click', (e) => {
	        cube.material.color.setHex(0x800080);
	        colorValue = "#800080"
	    });

	    $('#gray').on('click', (e) => {
	        cube.material.color.setHex(0x808080);
	        colorValue = "#808080"
	    });

        //scale change event listener--------------------
        $(document).on('input', '.size', function() {
            let newScale = $(this).val();
            cube.scale.set(newScale, newScale, newScale);
            scale = newScale;
        });

    }, 1000);

    //render function----------------------------------
    var render = function() {
        renderer.render(scene, camera);
    }


})