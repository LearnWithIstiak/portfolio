// THEME
function toggleTheme(){
document.body.classList.toggle("light");
}

// THREE.JS HERO
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer({canvas:document.getElementById("heroCanvas"),alpha:true});
renderer.setSize(window.innerWidth,window.innerHeight);

const geometry = new THREE.TorusKnotGeometry(10,3,100,16);
const material = new THREE.MeshBasicMaterial({color:0x3b82f6,wireframe:true});
const knot = new THREE.Mesh(geometry,material);

scene.add(knot);
camera.position.z = 40;

function animate(){
requestAnimationFrame(animate);
knot.rotation.x += 0.01;
knot.rotation.y += 0.01;
renderer.render(scene,camera);
}
animate();

// RESIZE FIX
window.addEventListener("resize",()=>{
camera.aspect = window.innerWidth/window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth,window.innerHeight);
});