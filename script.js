let time = gsap.timeline();

time.from(".car1", {
  y: 20,
  scale: 0.5,
  opacity: 0,
  duration: 0.6,
  repeat: 1,
});

time.from("#bmw", {
  y: 20,
  scale: 0.2,
  opacity: 0,
  duration: 0.6,
});

time.from(".car2", {
  y: 20,
  scale: 0.5,
  opacity: 0,
  duration: 0.6,
  delay: 1.1,
  repeat: 1,
});

time.to(".car1, #bmw", {
  opacity: 0,
  duration: 0.3,
});

time.from("#porche", {
  y: 20,
  scale: 0.2,
  opacity: 0,
  duration: 0.6,
});

time.from(".car3", {
  y: 20,
  scale: 0.5,
  opacity: 0,
  duration: 0.6,
  delay: 1.1,
  repeat: 1,
});

time.to(".car2, #porche", {
  opacity: 0,
  duration: 0.3,
});

time.from("#mustang", {
  y: 20,
  scale: 0.2,
  opacity: 0,
  duration: 0.6,
});

time.from(".car4", {
  y: 20,
  scale: 0.5,
  opacity: 0,
  duration: 0.6,
  delay: 1.1,
  repeat: 1,
});

time.to(".car3, #mustang", {
  opacity: 0,
  duration: 0.3,
});

time.from("#supra", {
  y: 20,
  scale: 0.2,
  opacity: 0,
  duration: 0.6,
  delay: 0.3,
});

time.to(".car4, #supra", {
  opacity: 0,
  duration: 0.3,
  delay: 0.4,
});

time.from(".logo", {
  x: 120,
  y: 200,
  rotation: 360,
  duration0: 0.6,
});
