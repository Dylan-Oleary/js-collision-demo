import { SpriteParticle } from "..";
import SoccerBallSprite from "./soccerball.svg";

export class SoccerBall extends SpriteParticle {
  constructor(x: number, y: number) {
    super(x, y, 25, { x: 4, y: 4 }, 1, SoccerBallSprite);
  }
}
