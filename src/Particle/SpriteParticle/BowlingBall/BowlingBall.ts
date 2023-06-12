import { SpriteParticle } from "..";
import BowlingBallSprite from "../../../assets/svg/bowling.svg";

export class BowlingBall extends SpriteParticle {
  constructor(x: number, y: number) {
    super(x, y, 18, { x: 4, y: 4 }, 1, BowlingBallSprite);
  }
}
