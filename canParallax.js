gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, ExpoScaleEase);
gsap.defaults({ ease: "none" });

// gsap.to("#can-center", {
//   y: -300,
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".can",
//     start: "center bottom",
//     scrub: 4,
//     markers: true,
//   },
// });
// ###################################
// ###################################
// ####### CAN ANIMATIONS!!! #########
// ###################################
// ###################################

// ########## LEFT CAN ############
function canEnterAnimation(canElement, initialRotation, endRotation) {
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
canEnterAnimation("#can-left", 35, -20);
canEnterAnimation("#can-center", -45, 20);
canEnterAnimation("#can-right", 30, -24);

// const tlLeft = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".section-two",
//     start: "top 60%",
//     end: "top 25%",
//     scrub: 4,
//     markers: false,
//   },
// });
// tlLeft
//   .fromTo(
//     "#can-left",
//     {
//       opacity: 0,
//       y: -200,
//       rotate: 35,
//       scaleX: 0.5,
//       scaleY: 0.5,
//     },
//     {
//       y: -300,
//       rotate: -20,
//       opacity: 1,
//       scaleX: 1.25,
//       scaleY: 1.25,
//     }
//   )
//   .to("#can-left", {
//     y: 0,
//     rotate: 0,
//     scaleX: 1,
//     scaleY: 1,
//     opacity: 1,
//   });
// // ########## CENTER CAN ############
// const tlCenter = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".section-two",
//     start: "top 60%",
//     end: "top 25%",
//     scrub: 4,
//     markers: false,
//   },
// });
// tlCenter
//   .fromTo(
//     "#can-center",
//     {
//       opacity: 0,
//       y: -200,
//       rotate: -45,
//       scaleX: 0.5,
//       scaleY: 0.5,
//     },
//     {
//       y: -300,
//       rotate: 20,
//       opacity: 1,
//       scaleX: 1.25,
//       scaleY: 1.25,
//     }
//   )
//   .to("#can-center", {
//     y: 0,
//     rotate: 0,
//     scaleX: 1,
//     scaleY: 1,
//     opacity: 1,
//   });
// // ########## RIGHT CAN ############
// const tlRight = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".section-two",
//     start: "top 60%",
//     end: "top 25%",
//     scrub: 4,
//     markers: false,
//   },
// });
// tlRight
//   .fromTo(
//     "#can-right",
//     {
//       opacity: 0,
//       y: -200,
//       rotate: 30,
//       scaleX: 0.5,
//       scaleY: 0.5,
//     },
//     {
//       y: -300,
//       rotate: -24,
//       opacity: 1,
//       scaleX: 1.25,
//       scaleY: 1.25,
//     }
//   )
//   .to("#can-right", {
//     y: 0,
//     rotate: 0,
//     scaleX: 1,
//     scaleY: 1,
//     opacity: 1,
//   });
// ###################################
// ###################################
// ##### DESCRIPTION PARALLAX UP #####
// ############ ENTERING #############
// ###################################
// ###################################
// gsap.from(".product-item-container", {
//   y: 200,
//   scrollTrigger: {
//     trigger: ".section-two",
//     start: "top 60%",
//     end: "top 25%",
//     scrub: 4,
//     markers: false,
//   },
// });

// ###################################
// ###################################
// ######## CANS PARALLAX UP #########
// ############# LEAVING #############
// ###################################
// ###################################
gsap.to(".can", {
  y: -400,
  opacity: 0,
  scrollTrigger: {
    trigger: ".section-two",
    start: "bottom 92%",
    end: "bottom 60%",
    scrub: 4,
  },
});
// ###################################
// ###################################
// ####### DESCRIPTION PARALLAX UP #########
// ###################################
// ###################################
gsap.to(".product-item-container", {
  y: -300,
  opacity: 0,
  scrollTrigger: {
    trigger: ".section-two",
    start: "bottom 92%",
    end: "bottom 60%",
    scrub: 4,
  },
});
// ###################################
// ###################################
// ####### BACKGROUND GRADIENT #########
// ###################################
// ###################################
gsap.to(".section-one-overflow-bg", {
  backgroundImage: "linear-gradient(to bottom, #7dd791 0%, #7dd791 100%)",
  duration: 1.9,
  scrollTrigger: {
    trigger: ".section-two",
    start: "top 80%",
    toggleActions: "restart reverse none reverse",
    markers: false,
  },
});
gsap.to(".section-one", {
  backgroundImage: "linear-gradient(to bottom, #ffd7d7 50%, #7dd791 80%)",
  duration: 1.9,
  scrollTrigger: {
    trigger: ".section-two",
    start: "top 80%",
    toggleActions: "restart reverse none reverse",
    //              onEnter  onLeave  onEnterBack   onLeaveBack
    markers: false,
  },
});
