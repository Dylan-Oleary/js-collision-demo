import { SpriteParticle } from "..";
import BaseballSprite from "../../../assets/svg/baseball.svg";

export class Baseball extends SpriteParticle {
  public static radius: number = 18;

  constructor(x: number, y: number) {
    super(x, y, 18, { x: 10, y: 10 }, 0.5, BaseballSprite);
  }
}
