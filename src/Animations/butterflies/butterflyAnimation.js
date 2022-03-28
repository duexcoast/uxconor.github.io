function butterflyAnimation(butterfly, duration, flightPath) {
  const tl = gsap.timeline({ repeat: -1 });

  tl.to(butterfly, {
    duration: duration,
    // rotation: 100,
    ease: "linear",
    repeatDelay: 0,
    motionPath: flightPath,
  });
}

export { butterflyAnimation };
