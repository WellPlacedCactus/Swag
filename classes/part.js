
class Part {
	constructor(x, y, r, vx, vy) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.vx = vx;
		this.vy = vy;
		this.c = new Color(255, 255, 255, 255);
		this.dead = false;
	}
	rasengan() {
		const dx = this.x - canvas.width / 2;
		const dy = this.y - canvas.height / 2;
		const a = Math.atan2(dy, dx);
		this.vx -= Math.cos(a);
		this.vy -= Math.sin(a);
	}
	move() {
		this.x += this.vx;
		this.y += this.vy;
	}
	collide0() {
		const k = 1;
		if (this.x - this.r < 0) {
			this.vx *= -k;
			this.x = this.r;
		}
		if (this.y - this.r < 0) {
			this.vy *= -k;
			this.y = this.r;
		}
		if (this.x + this.r > canvas.width) {
			this.vx *= -k;
			this.x = canvas.width - this.r;
		}
		if (this.y + this.r > canvas.height) {
			this.vy *= -k;
			this.y = canvas.height - this.r;
		}
	}
	collide1() {
		if (this.x + this.r < 0 ||
			this.y + this.r < 0 ||
			this.x - this.r > canvas.width ||
			this.y - this.r > canvas.height) {
			this.dead = true;
		}
	}
	color() {
		this.c.r = 255 * this.x / canvas.width;
		this.c.g = 255 * this.y / canvas.height;
	}
	decay() {
		this.c.a -= 1;
		if (this.c.a < 0) this.dead = true;
	}
	tick() {
		this.rasengan();
		this.move();
		this.collide1();
		this.color();
	}
	draw() {
		c.fillStyle = this.c.toString();
		c.fillRect(
			this.x - this.r,
			this.y - this.r,
			this.r * 2,
			this.r * 2);
	}
}