var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var textureAll = [];
var texture1 = new THREE.TextureLoader().load("pic1.png");
var texture2 = new THREE.TextureLoader().load("pic2.png");
var texture3 = new THREE.TextureLoader().load("pic3.png");
var texture4 = new THREE.TextureLoader().load("pic4.png");
var texture5 = new THREE.TextureLoader().load("pic5.png");
var texture6 = new THREE.TextureLoader().load("pic6.png");
textureAll.push(new THREE.MeshBasicMaterial( { map: texture1 } ));
textureAll.push(new THREE.MeshBasicMaterial( { map: texture2 } ));
textureAll.push(new THREE.MeshBasicMaterial( { map: texture3 } ));
textureAll.push(new THREE.MeshBasicMaterial( { map: texture4 } ));
textureAll.push(new THREE.MeshBasicMaterial( { map: texture5 } ));
textureAll.push(new THREE.MeshBasicMaterial( { map: texture6 } ));
// var material = new THREE.MeshBasicMaterial( { map: texture } );
var cube = new THREE.Mesh( geometry, textureAll );
scene.add( cube );

camera.position.z = 2;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
}
animate();
