const langs = [
	"notrub anairb",
	"notrub anairb",
	"NOTRUB ANAIRB",
	"NOTRUB ANAIRB"
];
// hello world in 92 Languages
let charSize = 18;
let fallRate = charSize / 2;
let streams;



// -------------------------------
class Char {
	constructor(value, x, y, speed) {
		this.value = value;
		this.x = x;
		this.y = y;
		this.speed = speed;
	}

	draw() {
		const flick = random(100);
		// 10 percent chance of flickering a number instead
		if (flick < 10) {
			fill(0, 0, 8);
			text(round(random(9)), this.x, this.y);
		} else {
			text(this.value, this.x, this.y);
		}

		// fall down
		this.y = this.y > height ? 0 : this.y + this.speed;
	}
}

// -------------------------------------
class Stream {
	constructor(text, x) {
		const y = random(text.length);
		const speed = random(2, 10);
		this.chars = [];

		for (let i = text.length; i >= 0; i--) {
			this.chars.push(
				new Char(text[i], x, (y + text.length - i) * charSize, speed)
			);
		}
	}

	draw() {
		fill(0, 0, 8);
		this.chars.forEach((c, i) => {
			// 30 percent chance of lit tail
			const lit = random(100);
			if (lit < 30) {
				if (i === this.chars.length - 1) {
					fill(0, 0, 8);
				} else {
					fill(0, 0, 8);
				}
			}

			c.draw();
		});
	}
}

function createStreams() {
	// create random streams from langs that span the width
	for (let i = 0; i < width; i += charSize) {
		streams.push(new Stream(random(langs), i));
	}
}

function reset() {
	streams = [];
	createStreams();
}

function setup() {
	createCanvas(outerWidth, outerHeight);
	reset();
	frameRate(20);
	colorMode(HSB);
	noStroke();
	textSize(charSize);
	textFont("monospace");
	//background(95);
}

function draw() {
	background(5, 0.4);
	streams.forEach((s) => s.draw());
}

function windowResized() {
	resizeCanvas(outerWidth, outerHeight);
	//background(90);
	reset();
}