let slider;
let angle = 0;

function setup() {
	createCanvas(400, 400);
	slider = createSlider(0, 180, 30, 0.01);
}

function draw() {
	background(200);
	translate(width / 2, height);
	angle = slider.value();
	rotate(radians(180));
	branch(100);
}

const branch = length => {
	stroke(0);
	if (length > 2) {
		line(0, 0, 0, length);
		translate(0, length);
		push();
		rotate(radians(angle));
		branch(length * 0.7);
		pop();

		push();
		rotate(radians(-angle));
		branch(length * 0.7);
		pop();
	}
};
