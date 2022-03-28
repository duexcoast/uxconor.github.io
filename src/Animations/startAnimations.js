// gsap.registerPlugin(ScrollTrigger);
import { canEnter } from "./cans/canEnter.js";
import { parallaxUpSectionTwo } from "./parallax/canLeave.js";
import { transitionBackgroundSection2 } from "./background/transitionBackgroundSection2.js";
import { transitionBackgroundSection3 } from "./background/transitionBackgroundSection3.js";
import { startButterflies } from "./butterflies/startButterflies.js";

function startAnimations() {

  // can enter
  canEnter("#can-left", 35, -20);
  canEnter("#can-center", -45, 20);
  canEnter("#can-right", 30, -24);

  // can leave
  parallaxUpSectionTwo(".can", -400, 0, 35);
  // product description leave
  parallaxUpSectionTwo(".product-item-container", -300, 1, 0);

  // transition backgrounds
  transitionBackgroundSection2();
  transitionBackgroundSection3();

  // butterflies
  startButterflies();
}

// startAnimations();
export { startAnimations };
