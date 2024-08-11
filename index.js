function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the(".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locoScroll()

// function loader() {
//     let tl = gsap.timeline()
//     .from(".loader h3",{
//         x : 30,
//         duration:1,
//         opacity:0,
//         stagger:.2,
        
//     })
//     .to(".loader h3",{
//         x : -30,
//         duration:1,
//         opacity:0,
//         stagger:.2,
//     })
//     .to(".loader",{
//         y : -1000,
//         duration:1,
//     })
//     .to(".loader",{
//         display:"none"
//     })
// }
// loader()


function curser(){
    let page1Content = document.querySelector(".page1-content")
    let page3 = document.querySelector(".page3")
    let curser = document.querySelector(".curser");
    let curser1 = document.querySelector(".curser1");

page1Content.addEventListener("mousemove", function(e) {
    gsap.to(curser,{
        x:e.x ,
        y:e.y ,
        duration:1,
    })
});
page1Content.addEventListener("mouseenter", function(e) {
    gsap.to(curser,{
        scale:1
    })
});
page1Content.addEventListener("mouseleave", function(e) {
    gsap.to(curser,{
       scale:0,
    })
});
page3.addEventListener("mousemove", function(e) {
    gsap.to(curser1,{
        x:e.x ,
        y:e.y ,
        duration:1,
    })
});
page3.addEventListener("mouseenter", function(e) {
    gsap.to(curser1,{
        scale:1
    })
});
page3.addEventListener("mouseleave", function(e) {
    gsap.to(curser1,{
       scale:0,
    })
});
}
curser()

function dispalytext (){
    let h1 = document.querySelector("h1")
    let h1text = h1.textContent.split("")
    let add = ""
    h1text.map((e)=>{
        add += `<span>${e}</span>`
    })
     h1.innerHTML = add
     let tl = gsap.timeline()
.from("h1 span",{
   y:100,
   duration:.3,
   stagger:.2,
   opacity:0,

})
}
dispalytext()

function page2ContentBox03(){
    tl = gsap.timeline()
    .from(".page2-content-box01 .page2-content-text01",{
        y:100,
        duration:.1,
        scrollTrigger:{
            trigger:".page2-content-text01",
            scroller:".main",
            start:"top 100%",
            scrub:3,
        }
    })
    .from(".page2-content-box02 .page2-content-text02",{
        y:100,
        stagger:.50,
        scrollTrigger:{
            trigger:".page2-content-text02",
            scroller:".main",
            start:"top 100%",
            scrub:3,
        }
    })
    .from(".title-01 .page2-content-text03",{
        y:30,
        // duration:.67,
        // opacity:0,
        stagger:.50,
        scrollTrigger:{
            trigger:".page2-content-text03",
            scroller:".main",
            start:"top 100%",
            scrub:3,
        }
    })
    .from(".title-01 .page2-content-text04",{
        y:100,
        duration:.1,
        scrollTrigger:{
            trigger:".page2-content-text04",
            scroller:".main",
            start:"top 100%",
            scrub:2,
        }
    })
    .from(".card-box .card-box-main",{
        y:100,
        scrollTrigger:{
            trigger:".card-box-main",
            scroller:".main",
            start:"top 100%",
            scrub:3,
        }
    })
    .from(".page2-content-box04 .page2-content-text05",{
        y:100,
        duration:.1,
        scrollTrigger:{
            trigger:".page2-content-text05",
            scroller:".main",
            start:"top 100%",
        }
    })
    .from(".page2-content-box06 .page2-content-text06",{
        y:100,
        stagger:.50,
        scrollTrigger:{
            trigger:".page2-content-text06",
            scroller:".main",
            start:"top 100%",
            scrub:3,
        }
    })
}
page2ContentBox03()

function bigTextScroller(){
    gsap.to(".page3 h1",{
        transform:"translatex(-40%)", 
        scrollTrigger:{
            trigger:".page3",
            scroller:".main",
            start:"top 0%",
            end:"top -550%",
            scrub:5,
            pin:true
        }
    })
}
bigTextScroller()



