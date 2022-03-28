import { GLTFLoader } from "../../../../node_modules/three/examples/jsm/loaders/GLTFLoader.js";

import { setupModel } from "./setupModel.js";

async function loadCan() {
  const loader = new GLTFLoader();

  const canData = await loader.loadAsync(
    "../../../../assets/models/matchaquilaCan.glb"
  );

  console.log("Fiesta!", canData);

  const can = setupModel(canData);

  return { can };
}

export { loadCan };
