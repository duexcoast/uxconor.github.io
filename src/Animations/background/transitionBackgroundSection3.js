gsap.registerPlugin(ScrollTrigger);
function transitionBackgroundSection3() {
  const tlSectionTwo = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-three",
      start: "top 80%",
      end: "top 50%",
      scrub: 4,
      toggleActions: "restart reverse none reverse",
      //              onEnter  onLeave  onEnterBack   onLeaveBack
      markers: false,
    },
  });

  tlSectionTwo.fromTo(
    ".section-two",
    {
      backgroundImage: "linear-gradient(to bottom, #7dd791 0%, #7dd791 100%)",
    },
    {
      backgroundImage: "linear-gradient(to bottom, #ffd7d7 50%, #3D92CB 80%)",
    }
  );

  const tlSectionThree = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-three",
      start: "top 80%",
      end: "top 50%",
      scrub: 4,
      toggleActions: "restart reverse none reverse",
      //              onEnter  onLeave  onEnterBack   onLeaveBack
      markers: false,
    },
  });
  tlSectionThree.to(".section-three", {
    backgroundImage: "linear-gradient(to bottom, #3D92CB 0%, #3D92CB 100%)",
  });
}

export { transitionBackgroundSection3 };
