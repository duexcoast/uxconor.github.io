gsap.registerPlugin(ScrollTrigger);
function transitionBackgroundSection2() {
  const tlSectionOne = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-two",
      start: "top 80%",
      end: "top 50%",
      scrub: 4,
      toggleActions: "play complete reverse reverse",
      //              onEnter  onLeave  onEnterBack   onLeaveBack
      markers: false,
    },
  });
  tlSectionOne.to(".section-one", {
    backgroundImage: "linear-gradient(to bottom, #ffd7d7 50%, #7dd791 80%)",
  });
  const tlSectionTwo = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-two",
      start: "top 80%",
      end: "top 50%",
      scrub: 4,
      toggleActions: "play complete reverse reverse",
      //              onEnter  onLeave  onEnterBack   onLeaveBack
      markers: false,
    },
  });
  // const tlSectionTwo = gsap.timeline();
  tlSectionTwo.to(
    ".section-two",
    // {
    //   backgroundImage: "linear-gradient(to bottom, #f5efef 0%, #fff 100%)",
    // duration: 1.9,
    // },
    {
      backgroundImage: "linear-gradient(to bottom, #7dd791 0%, #7dd791 100%)",
    }
  );
}

export { transitionBackgroundSection2 };
