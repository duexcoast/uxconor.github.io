gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none" });

function canEnter(canElement, initialRotation, endRotation) {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-two",
      start: "top 60%",
      end: "top 25%",
      scrub: 4,
      markers: false,
    },
  });
  tl.fromTo(
    canElement,
    {
      autoAlpha: 0,
      y: -200,
      rotate: initialRotation,
      scaleX: 0.5,
      scaleY: 0.5,
    },
    {
      y: -300,
      rotate: endRotation,
      autoAlpha: 1,
      scaleX: 1.25,
      scaleY: 1.25,
    }
  ).to(canElement, {
    y: 0,
    rotate: 0,
    scaleX: 1,
    scaleY: 1,
    autoAlpha: 1,
  });
}

export { canEnter };
