import { v4 as uuid } from "uuid";

import { canvas, ctx } from "../ctx";
import { resolveCollision } from "../physics";
import { RenderObject } from "../RenderObject";
import { Velocity } from "../types";
import { isParticleCollision } from "../util";

export class Particle extends RenderObject {
  protected _id: string = uuid();

  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public velocity: Velocity,
    public mass: number,
    public color: string = "black"
  ) {
    super(x, y);
  }

  protected get id(): string {
    return this._id;
  }

  protected checkBounds(): void {
    const { height, width } = canvas;

    if (this.x + this.radius >= width || this.x - this.radius <= 0) {
      this.velocity.x = -this.velocity.x;
    }
    if (this.y + this.radius >= height || this.y - this.radius <= 0) {
      this.velocity.y = -this.velocity.y;
    }
  }

  protected handleCollision(
    particles: Particle[] = [],
    onCollision?: () => void
  ): void {
    for (const particle of particles.filter(
      (particle) =>
        particle.id !== this.id && isParticleCollision(this, particle)
    )) {
      resolveCollision(this, particle);
      onCollision?.();
    }
  }

  protected move(): void {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  protected draw(): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = this.color;
    ctx.stroke();
    ctx.closePath();
  }

  public update(particles: Particle[] = []): void {
    this.handleCollision(particles);
    this.checkBounds();
    this.move();
    this.draw();
  }
}
