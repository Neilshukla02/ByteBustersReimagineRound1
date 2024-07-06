function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,

      // for tablet smooth
      tablet: { smooth: true },

      // for mobile
      smartphone: { smooth: true }
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
          return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
          return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight
          };
      }

  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}




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

function page3and4Animations() {

  var elementContainer = document.querySelector("#element-container")

  elementContainer.addEventListener("mouseenter", function () {
      gsap.to("#moving-image", {
          opacity: 1
      })
  })

  elementContainer.addEventListener("mouseleave", function () {
      gsap.to("#moving-image", {
          opacity: 0
      })
  })

  var allElements = document.querySelectorAll(".element")
  var movingImageDiv = document.querySelector("#moving-image")
  var moveImg = document.querySelector("#moving-image img")


  allElements.forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
          let image = elem.getAttribute("data-image")
          gsap.to(moveImg, {
              attr: { src: image },
          })
      })
      elementContainer.addEventListener("mousemove", function (dets) {
          gsap.to("#moving-image", {
              left: `${dets.x - elementContainer.getBoundingClientRect().x}`,
              top: `${dets.y - elementContainer.getBoundingClientRect().y}`,
              duration: 3,
              ease: "power1.out"
          })

      })
  })
}



function marqueAnimation() {

  document.addEventListener("wheel", function (dets) {
      if (dets.deltaY > 0) {
          gsap.to("#move .marque", {
              transform: "translateX(-200%)",
              ease: "none",
              repeat: -1,
              duration: 5
          })
          gsap.to("#move .marque img", {
              rotate: 180
          })
      } else {
          gsap.to("#move .marque", {
              transform: "translateX(0%)",
              ease: "none",
              repeat: -1,
              duration: 5
          })
          gsap.to("#move .marque img", {
              rotate: 0
          })
      }
  })
}



// locomotiveAnimation()


page3and4Animations()

marqueAnimation()
var roti = 0
document.addEventListener("wheel",function(dets){
  if(dets.deltaY>0){
      roti += 10
      gsap.to("#bottomright svg",{
          transform:`translate(-50%,-50%) rotate(${roti}deg)`
      })
  }else{
      roti -= 10
      gsap.to("#bottomright svg",{
          transform:`translate(-50%,-50%) rotate(${roti}deg)`
      })
  }
})