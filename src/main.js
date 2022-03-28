// gsap.registerPlugin(ScrollTrigger);
import { startAnimations } from "./Animations/startAnimations.js";
import { World } from "./World/World.js";
async function main() {
  const container = document.querySelector(".section-one");

  // create a new world
  const world = new World(container);

  // complete async tasks
  await world.init();

  // start the animation loop
  world.start();

  // start the gsap animations
  startAnimations();
}
main().catch((err) => {
  console.error(err);
});
