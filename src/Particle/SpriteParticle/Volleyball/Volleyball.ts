import { SpriteParticle } from "..";
import VolleyballSprite from "./volleyball.svg";

export class Volleyball extends SpriteParticle {
  constructor(x: number, y: number) {
    super(x, y, 25, { x: 4, y: 4 }, 1, VolleyballSprite);
  }
}
