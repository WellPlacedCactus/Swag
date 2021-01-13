
const canvas = document.createElement('canvas');
const c = canvas.getContext('2d');
const keys = [];
const mouse = {};

const randi = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randf = (min, max) => Math.random() * (max - min) + min;
const rands = () => Math.random() > 0.5 ? 1 : -1;

window.onmousemove = ({x, y}) => {
	mouse.x = x;
	mouse.y = y;
}
window.onresize = function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}
window.onload = function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	document.body.appendChild(canvas);
	game();
}