
class Clock {
	constructor(step, cd) {
		this.timer = 0;
		this.step = step;
		this.cd = cd;
	}
	tick() {
		this.timer += this.step;
		if (this.timer > this.cd) {
			this.timer = 0;
			return true;
		} else {
			return false;
		}
	}
}