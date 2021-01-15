
const game = function() {

	const parts = [];
	const ck = new Clock(1, 10);

	const emit = function() {
		if (ck.tick()) {
			parts.push(new Part(
				randi(0, canvas.width),
				randi(0, canvas.height),
				5,
				0,
				0
			));
		}
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
		parts.forEach(p => {
			p.draw();
		});
	}

	const clear = function() {
		c.fillStyle = 'black';
		c.fillRect(0, 0, canvas.width, canvas.height);
	}

	const loop = function() {
		emit();
		tick();
		clear();
		draw();
	}

	const thread = setInterval(loop, 1000 / 60);
}