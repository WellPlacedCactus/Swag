
const game = function() {

	const parts = [];
	for (let i = 0; i < 5; i++) {
		parts.push(new Part(
			randi(0, canvas.width),
			randi(0, canvas.height),
			randi(25, 50),
			randi(2, 5) * rands(),
			randi(2, 5) * rands()
		));
	}

	const tick = function() {
		for (let i = parts.length - 1; i >= 0; --i) {
			const p = parts[i];
			p.tick();
			if (p.dead) {
				parts.splice(i, 1);
			}
		}
	}
	
	const draw = function() {
		clear();
		parts.forEach(p => {
			p.draw();
		});
	}

	const clear = function() {
		c.fillStyle = 'black';
		c.fillRect(0, 0, canvas.width, canvas.height);
	}

	const loop = function() {
		tick();
		draw();
	}

	const thread = setInterval(loop, 1000 / 60);
}