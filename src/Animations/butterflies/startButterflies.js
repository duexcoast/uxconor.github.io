import { butterflyAnimation } from "./butterflyAnimation.js";
import * as fp from "./butterflyFlightPaths.js";

function startButterflies() {
  butterflyAnimation("#yb-one", 40, fp.ybOneFlightPath);
  butterflyAnimation("#yb-two", 60, fp.ybTwoFlightPath);
  butterflyAnimation("#yb-three", 70, fp.ybThreeFlightPath);
  butterflyAnimation("#yb-four", 60, fp.ybThreeFlightPath);
  butterflyAnimation("#gb-one", 60, fp.gbOneFlightPath);
  butterflyAnimation("#gb-two", 60, fp.gbTwoFlightPath);
  butterflyAnimation("#gb-three", 60, fp.gbThreeFlightPath);
  butterflyAnimation("#gb-four", 60, fp.gbFourFlightPath);
}

export { startButterflies };
