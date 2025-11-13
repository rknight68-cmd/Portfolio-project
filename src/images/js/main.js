gsap.registerPlugin(SplitText)

let split = SplitText.create("#name", {
  type: "chars, words, lines"
});

gsap.from(split.chars, {
  y: -100,
  autoAlpha: 0,
  stagger: 0.05,
  duration: 2
})