var tl = gsap.timeline()
tl.from("nav",{
    y:900,
   delay:.4,
    duration:.6,
    stagger:.1,
    opacity:.7,
    scale:.001,
    
})


var tl = gsap.timeline()
tl.from("header h1",{
  x:2000,
  delay:1.2, 
    duration:.9,
    opacity:0,
    stagger:.2,
    scale:.1,
})

Shery.mouseFollower({
  skew: true,
  
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: .4,
});
Shery.imageMasker("img" , {
 
  mouseFollower: true,
  text: "DOWNLOAD NOW",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
}); 
Shery.textAnimate("p" /* Element to target.*/, {
  
  style: 1,
  y: 10,
  
  duration: .3,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

