// eslint-disable-next-line max-classes-per-file
export default class Pulse {
  static name = 'Pulse';

  constructor(controller) {
    this.controller = controller;
    const { width, height } = this.controller;
    this.interval = 1;

    this.xPos = Math.random() * width;
    this.yPos = Math.random() * height;
    this.color = Math.random() * 360;
    this.timeNow = Date.now();
    this.luminance = 1;
    this.speed = 0.5;
  }

  draw() {
    // eslint-disable-next-line no-unused-vars
    const { ctx, width, height } = this.controller;
    ctx.filter = 'blur(0px)';
    ctx.beginPath();
    ctx.rect(0, 0, width, height);
    ctx.fillStyle = `hsl(${this.color}, 100%, ${this.luminance}%)`;
    ctx.fill();
    ctx.font = '15px Arial';
    ctx.fillStyle = 'white';
    // ctx.fillText(this.luminance, 0, height);
    if (Date.now() - this.timeNow > this.interval) {
      this.xPos = Math.random() * width;
      this.yPos = Math.random() * height;
      this.timeNow = Date.now();
      this.luminance += this.speed;
      if (this.luminance >= 50) {
        this.speed *= -1;
      }
      if (this.luminance <= 0) {
        this.speed *= -1;
        this.color = Math.random() * 360;
      }
    }
  }
}
