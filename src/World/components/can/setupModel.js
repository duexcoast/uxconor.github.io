function setupModel(data) {
  const model = data.scene.children[0];

  model.tick = () => (model.rotation.y += 0.01);

  return model;
}

export { setupModel };
