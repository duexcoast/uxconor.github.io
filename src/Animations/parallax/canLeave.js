function parallaxUpSectionTwo(element, yPixels, opacity, rotation) {
  gsap.to(element, {
    y: yPixels,
    opacity: opacity,
    rotation: rotation,
    scrollTrigger: {
      trigger: ".section-two",
      start: "bottom 92%",
      end: "bottom 60%",
      scrub: 4,
    },
  });
}

export { parallaxUpSectionTwo };
