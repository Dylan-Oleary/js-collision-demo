import { Particle } from "./Particle";

export function getDistanceBetween(
  objOne: { x: number; y: number },
  objTwo: { x: number; y: number }
): number {
  const { x: xOne, y: yOne } = objOne;
  const { x: xTwo, y: yTwo } = objTwo;

  return Math.sqrt(Math.pow(xTwo - xOne, 2) + Math.pow(yTwo - yOne, 2));
}

export function getRandomIntFromRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function isParticleCollision(c1: Particle, c2: Particle): boolean {
  return (
    getDistanceBetween({ x: c1.x, y: c1.y }, { x: c2.x, y: c2.y }) <
    c1.radius + c2.radius
  );
}
