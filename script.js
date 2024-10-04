function lenis(){

  const lenis = new Lenis()
  
  lenis.on('scroll', (e) => {
    console.log(e)
  })
  
  lenis.on('scroll', ScrollTrigger.update)
  
  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
  })

gsap.ticker.lagSmoothing(0)
}
function pageAnimation(){
let hl = gsap.timeline()
hl.from(".hero-section .hero-heading h1, .hero-section .hero-heading p", {
  opacity: 0,
  y:100,
  delay: 1,
  duration: 2,
  stagger: 0.1,
  ease: "power4"
},"a")
hl.from("header .logo, header nav ul li, header .btn", {
  opacity: 0,
  delay: .5,
  duration: 1,
  stagger: 0.1,
  y: -100,
  ease: "power4"
},"a")

let al = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-section",
    start: "-10% 30%",
    end: "bottom bottom",
  }
})
 al.from(".about-left",{
  opacity: 0,
  duration: 1,
  x:-100,
  ease: "power4"
},"<")
al.from(".about-right",{
  opacity: 0,
  duration: 1,
  x:100,
  ease: "power4"
},"<")

let dl = gsap.timeline({
  scrollTrigger: {
    trigger: ".display-section",
    start: "-10% 30%",
    end: "bottom bottom",
  }
})
dl.from(".display #img1, .display #img2",{
  opacity: 0,
  duration: 1,
  y:100,
  stagger: 0.2,
  ease: "power4"
},"<")
dl.from(".display-content",{
  opacity: 0,
  duration: 1,
  y:100,
  ease: "power4"
})

let cl = gsap.timeline({
  scrollTrigger: {
    trigger: ".category-section",
    start: "-10% 30%",
    end: "bottom bottom",
  }
})

cl.from(".category",{
  opacity: 0,
  duration: 1,
  scale: 0.8,
  stagger: 0.2,
  ease: "power4"
},"<")


let pl = gsap.timeline({
  scrollTrigger: {
    trigger: ".best-sellers-section",
    start: "-10% 30%",
    end: "bottom bottom",
    scrub: true,
  }
})
pl.from(".best-seller", {
  opacity: 0,
  duration: 1,
  scale: 0.8,
  stagger: 0.2,
  ease: "power4"
},"<")
}

lenis()
pageAnimation()