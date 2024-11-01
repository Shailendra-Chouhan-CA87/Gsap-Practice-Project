var tl = gsap.timeline();

tl.from("#nav h3",{
    y:-100,
    opacity:0,
    delay:0.2,
    duration:.3,
    stagger:0.2
})

tl.from("#main h3",{
    x:-900,
    opacity:0,
    delay:0.05,
    duration:.2,
    stagger:0.2
})

tl.from("#main img",{
    x:900,
    rotate:180,
    scale:0,
    opacity:0,
    delay:0.1,
    duration:.3,
    stagger:0.2
})

tl.from("#footer h3",{
    y:15,
    opacity:0,
    delay:0.2,
    duration:.5,
    stagger:0.2
})

