import { Particle } from "..";
import { ctx } from "../../ctx";

export class SpriteParticle extends Particle {
  protected sprite = new Image();

  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public velocity: {
      x: number;
      y: number;
    },
    public mass: number,
    imgSrc: string
  ) {
    super(x, y, radius, velocity, mass);
    this.sprite.src = imgSrc;
  }

  protected draw(): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = this.color;
    ctx.stroke();
    ctx.closePath();

    ctx.drawImage(
      this.sprite,
      this.x - this.radius,
      this.y - this.radius,
      this.radius * 2,
      this.radius * 2
    );
  }
}
