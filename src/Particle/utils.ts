import { getRandomIntFromRange } from "../util";
import { Baseball } from "./SpriteParticle/Baseball";
import { Basketball } from "./SpriteParticle/Basketball";
import { BowlingBall } from "./SpriteParticle/BowlingBall";
import { EightBall } from "./SpriteParticle/EightBall";
import { SoccerBall } from "./SpriteParticle/SoccerBall";
import { Volleyball } from "./SpriteParticle/Volleyball";

export function getRandomSpriteParticle() {
  const spriteParticleCollection = [
    Baseball,
    Basketball,
    BowlingBall,
    EightBall,
    SoccerBall,
    Volleyball,
  ];

  return spriteParticleCollection[
    getRandomIntFromRange(0, spriteParticleCollection.length - 1)
  ];
}
