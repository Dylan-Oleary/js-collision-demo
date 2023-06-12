import { canvas, ctx } from "../../../ctx";
import { getRandomIntFromRange } from "../../../util";
import { audioCtx, soundBuffers } from "../../../audio";

import { SpriteParticle } from "..";
import { Particle } from "../..";
import CharacterSprite from "../../../assets/images/owen.jpeg";

export class Character extends SpriteParticle {
  private isAudioPlaying: boolean = false;

  constructor(x: number, y: number) {
    super(x, y, canvas.height / 8, { x: 0, y: 0 }, 5, CharacterSprite);
  }

  protected draw(): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = this.color;
    ctx.stroke();
    ctx.closePath();

    ctx.save();
    ctx.clip();
    ctx.drawImage(
      this.sprite,
      this.x - this.radius,
      this.y - this.radius,
      this.radius * 2,
      this.radius * 2
    );
    ctx.restore();
  }

  private playAudio(): void {
    const source = audioCtx.createBufferSource();

    source.addEventListener("ended", () => {
      this.isAudioPlaying = false;
    });
    source.buffer =
      soundBuffers[getRandomIntFromRange(0, soundBuffers.length - 1)];

    if (!this.isAudioPlaying) {
      source.connect(audioCtx.destination);
      this.isAudioPlaying = true;
      source.start();
    }
  }

  protected handleCollision(particles?: Particle[]): void {
    super.handleCollision(particles, () => this.playAudio());
    this.velocity = { x: 0, y: 0 };
  }
}
