import {
  DirectionalLight,
  HemisphereLight,
} from "../../../node_modules/three/build/three.module.js";

function createLights() {
  const ambientLight = new HemisphereLight("white", "darkslategrey", 4);

  const mainLight = new DirectionalLight("white", 6);
  mainLight.position.set(10, 15, 10);

  return { ambientLight, mainLight };
}

export { createLights };
