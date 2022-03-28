gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none" });

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".box",
//     markers: true,
//     start: "top 80%",
//     end: "top 30%",
//     scrub: 3,
//   },
// });
// tl.to(".box", { x: 500, duration: 2 })
//   .to(".box", { y: 200, duration: 3 })
//   .to(".box", { x: 0, duration: 2 });

ScrollTrigger.create({
  trigger: ".box",
  start: "top 80%",
  end: "top 50%",
  markers: true,
  // toggleClass: "box-red",
  onUpdate: (self) => console.log(self),
});
