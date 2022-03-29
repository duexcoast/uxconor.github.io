gsap.registerPlugin(ScrollTrigger);

function jaguar() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-three",
      start: "top 70%",
      end: "top 30%",
      scrub: 3,
    },
  });
  tl.fromTo(
    "#jaguar",
    {
      x: -288,
    },
    { x: 0 }
  );
}
export { jaguar };
