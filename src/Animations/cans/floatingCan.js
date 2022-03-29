function floatingCan() {
  const can = document.querySelector("#ecom-can");

  const randomX = random(10, 20);
  const randomY = random(10, 20);
  const randomDelay = random(0, 1);
  const randomTime = random(4, 15);
  const randomTime2 = random(4, 15);
  const randomAngle = random(1, 20);

  // gsap.set(can, {
  //   x: randomX(-1),
  //   y: randomX(1),
  //   rotation: randomAngle(-1),
  // });

  moveX(can, 1);
  moveY(can, -1);
  rotate(can, 1);

  function rotate(target, direction) {
    gsap.to(target, {
      duration: randomTime2(),
      rotation: randomAngle(direction),
      // delay: randomDelay(),
      ease: Sine.easeInOut,
      onComplete: rotate,
      // onCompleteParams: [target, direction * -1],
    });
  }

  function moveX(target, direction) {
    gsap.to(target, {
      duration: randomTime(),
      x: randomX(direction),
      ease: Sine.easeInOut,
      onComplete: moveX,
      onCompleteParams: [target, direction * -1],
    });
  }

  function moveY(target, direction) {
    gsap.to(target, {
      duration: randomTime(),
      y: randomY(direction),
      ease: Sine.easeInOut,
      onComplete: moveY,
      onCompleteParams: [target, direction * -1],
    });
  }

  function random(min, max) {
    const delta = max - min;
    return (direction = 1) => (min + delta * Math.random()) * direction;
  }
}

export { floatingCan };
