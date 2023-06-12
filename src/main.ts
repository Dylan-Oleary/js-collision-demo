import { canvas, ctx, resizeCanvas } from "./ctx";
import { Particle } from "./Particle";
import { Character } from "./Particle/SpriteParticle/Character";
import { getRandomSpriteParticle } from "./Particle/utils";
import { getRandomIntFromRange, isParticleCollision } from "./util";

let height: number;
let width: number;
let isPlaying = false;
let character: Character;
let particlesLength = 35;

let particles: Particle[] = [];
const buttonEl = document.getElementById("start-btn");
const controls = document.getElementsByClassName("controls")[0];
const densityControl = document.getElementById("density") as HTMLInputElement;
const densityOutput = densityControl.nextSibling as HTMLOutputElement;
const controlButtonEl = document.getElementById("control-btn");

buttonEl?.addEventListener("click", () => {
  densityControl.value = String(particlesLength);
  densityOutput.textContent = String(particlesLength);
  init();
});

controlButtonEl?.addEventListener("click", () => {
  particles = [];
  particlesLength = Number(densityControl.value) + 1;
  densityOutput.textContent = String(particlesLength - 1);
  init();
});

densityControl?.addEventListener("change", ({ target: { value } }) => {
  const output = densityControl.nextSibling;

  if (output) {
    output.textContent = value;
  }
});

function init(): void {
  buttonEl?.remove();
  controls.classList.add("visible-controls");
  isPlaying = true;

  if (ctx) {
    resizeCanvas(window.innerHeight, window.innerWidth);
    height = canvas.height;
    width = canvas.width;

    for (let i = 0; i < particlesLength; i++) {
      if (i == 0) {
        character = new Character(width / 2.5, height / 3);
        particles.push(character);
      } else {
        const RandomSpriteParticle = getRandomSpriteParticle();
        const newParticle = new RandomSpriteParticle(
          getRandomIntFromRange(0, width),
          getRandomIntFromRange(0, height)
        );
        const radius = newParticle.radius;
        newParticle.x = getRandomIntFromRange(radius, width - radius);
        newParticle.y = getRandomIntFromRange(radius, height - radius);

        while (
          particles.find((circle) => isParticleCollision(circle, newParticle))
        ) {
          newParticle.x = getRandomIntFromRange(radius, width - radius);
          newParticle.y = getRandomIntFromRange(radius, height - radius);
        }

        particles.push(newParticle);
      }
    }

    document.body.appendChild(canvas);
    render();
  }
}

function render(): void {
  requestAnimationFrame(render);

  ctx.clearRect(0, 0, width, height); // Clear the canvas on each render

  for (const particle of particles) {
    particle.update(particles);
  }
}

window.addEventListener("resize", () => {
  if (isPlaying) {
    resizeCanvas(window.innerHeight, window.innerWidth);
    height = canvas.height;
    width = canvas.width;
    character.x = width / 2;
    character.y = height / 2;
  }
});
