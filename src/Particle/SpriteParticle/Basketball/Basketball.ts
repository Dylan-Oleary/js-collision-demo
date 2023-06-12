import { SpriteParticle } from "..";
import BasketballSprite from "../../../assets/svg/basketball.svg";

export class Basketball extends SpriteParticle {
  constructor(x: number, y: number) {
    super(x, y, 30, { x: 8, y: 8 }, 1.5, BasketballSprite);
  }
}
