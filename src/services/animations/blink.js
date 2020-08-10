// eslint-disable-next-line max-classes-per-file
class Ball {
  constructor(controller) {
    this.controller = controller;
    const { width, height } = controller;

    this.yPos = height * Math.random();
    this.yDir = 1 + Math.random() * 2;
    this.xPos = width * Math.random();
    this.xDir = Math.random();
  }

  draw() {
    const { ctx, width, height } = this.controller;

    ctx.filter = 'blur(20px)';

    ctx.beginPath();
    ctx.arc(this.xPos, this.yPos, 40, 0, 2 * Math.PI, false);
    ctx.fillStyle = `hsl(${this.yPos % 360}, 100%, 50%)`;
    ctx.fill();

    this.yPos += this.yDir;
    if (this.yPos >= height || this.yPos <= 0) this.yDir *= -1;

    this.xPos += this.xDir;
    if (this.xPos >= width || this.xPos <= 0) this.xDir *= -1;
  }
}

export default class Blink {
  constructor(controller) {
    this.balls = [];

    for (let i = 0; i < 2; i += 1) {
      this.balls[i] = new Ball(controller);
    }
  }

  draw() {
    this.balls.forEach((ball) => {
      ball.draw();
    });
  }
}