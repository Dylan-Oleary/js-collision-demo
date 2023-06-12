import { SpriteParticle } from "..";
import EightBallSprite from "./eightball.svg";

export class EightBall extends SpriteParticle {
  constructor(x: number, y: number) {
    super(x, y, 15, { x: 4, y: 4 }, 1, EightBallSprite);
  }
}
