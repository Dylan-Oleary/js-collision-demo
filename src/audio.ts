import CharacterSoundOne from "./assets/sounds/ouch-1.mp3";
import CharacterSoundTwo from "./assets/sounds/ouch-2.mp3";
import CharacterSoundThree from "./assets/sounds/ouch-3.mp3";
import CharacterSoundFour from "./assets/sounds/ouch-4.mp3";
import CharacterSoundFive from "./assets/sounds/ouch-5.mp3";
import CharacterSoundSix from "./assets/sounds/ouch-6.mp3";
import CharacterSoundSeven from "./assets/sounds/ouch-7.mp3";
import CharacterSoundEight from "./assets/sounds/ouch-8.mp3";

export const audioPaths = [
  CharacterSoundOne,
  CharacterSoundTwo,
  CharacterSoundThree,
  CharacterSoundFour,
  CharacterSoundFive,
  CharacterSoundSix,
  CharacterSoundSeven,
  CharacterSoundEight,
];
export const audioCtx = new AudioContext();
export const soundBuffers = await Promise.all(
  audioPaths.map((path) => fetchAndDecodeAudioData(path))
);

export async function fetchAndDecodeAudioData(
  path: string
): Promise<AudioBuffer> {
  return fetch(path)
    .then((response) => response.arrayBuffer())
    .then((buffer) => audioCtx.decodeAudioData(buffer));
}
