const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


function page1Animation(){
    var tl = gsap.timeline()
    let profileWidth = window.innerWidth <= 768 ? "70vw" : "15vw";

tl.from('#nav-left', {
    y: -30,
    opacity: 0,
    delay: 0.2,
    duration: 0.2,
})
tl.from('#menu', {
    opacity: 0,
    duration: 0.2,
})
tl.from('#nav-center h2', {
    y: -30,
    opacity: 0,
    stagger: 0.3
})
tl.from('#nav-right', {
    opacity: 0,
})

tl.from('#hero-section h1', {
    opacity: 0,
    border: 1,
    stagger: 0.4
})
tl.from('#hero-section h2', {
    opacity: 0,
    ease: "slow(0.7,0.7,true)"
})
tl.from('#hero-bottom', {
    opacity: 0,
    x: 12,
})
tl.to('#page1 #profile-photo',{
    width: "30vh",
})
// tl.to('#page1 #profile-photo', {
//     width: profileWidth,
//     opacity: 1,
//     y: 15,
//     // scrollTrigger: {
//     //     trigger: "#page1",
//     //     scroller: "body",
//     //     markers: true,
//     //     start: "top 0",
//     //     end : "top -100%",
//     //     scrub: 2,
//     //     pin : true
//     // }
// });


}

function page2Animation(){
    gsap.from('#assets #assets-top',{
    y: 25,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#assets #assets-top",
        scroller: "#main",
        // markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub: true
    }
})
gsap.from('#assets #assets-heading',{
    y: 55,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#assets #assets-heading",
        scroller: "#main",
        // markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub: 3
    }
})
gsap.from('#assets .assets-photo',{
    x: 50,
    opacity: 0,
    scrollTrigger: {
        trigger: "#assets .assets-photo",
        scroller: "#main",
        // markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub: 3
    }
})
}

function page3Animation(){

    let xValue = window.innerWidth <= 768 ? 100 : 800;

    gsap.from('#banner .div',{
    scale: 5,
    opacity: 0,
    scrollTrigger: {
        trigger: "#banner .div",
        scroller: "#main",
        // markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub: 3
    }
})
gsap.from('#banner .slogan',{
    y: 20,
    opacity: 0,
    scrollTrigger: {
        trigger: "#banner .slogan",
        scroller: "#main",
        // markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub: 3
    }
})

gsap.to('#banner .banner-video',{
    width: "70%",
      scrollTrigger: {
        trigger: "#banner",
        scroller: "#main",
        // markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 1,
        // pin: true
    }
})

gsap.from('.banner-bottom h1', {
    x: xValue,
    delay: 2,
    duration: 2,
    scrollTrigger: {
        trigger: ".banner-bottom",
        scroller: "#main",
        // markers: true,
        start: "top 60%",
        end: "top -100%",
        scrub: 2
    }
});

gsap.from('.story-text h5',{
    y: 20,
    opacity: 0,
    delay: 2,
    duration: 2,
    scrollTrigger: {
        trigger: ".story-text h5",
        scroller: "#main",
        // markers: true,
        start: "top 60%",
        end: "top 30%",
        // pin: true,
        scrub: 2
    }
})

}

function page4Animation(){
    var tl1 = gsap.timeline()

tl1.from('#photo-collage #box2',{
    opacity: 0,
    delay: 1,
    duration: 1,
    scrollTrigger: {
        trigger: "#photo-collage ",
        scroller: "#main",
        // markers: true,
        start: "top 70%",
        end: "bottom 30%",
        scrub: 2,
    }
})
tl1.from('#photo-collage #box4',{
    opacity: 0,
    delay: 1,
    duration: 1,
    scrollTrigger: {
        trigger: "#photo-collage",
        scroller: "#main",
        // markers: true,
        start: "top 70%",
        end: "bottom 30%",
        scrub: 2,
    }
})
tl1.from('#photo-collage #box6',{
    opacity: 0,
    delay: 1,
    duration: 2,
    scrollTrigger: {
        trigger: "#photo-collage",
        scroller: "#main",
        // markers: true,
        start: "top 40%",
        end: "bottom 30%",
        scrub: 3,
    }
})
tl1.from('#photo-collage #box8',{
    opacity: 0,
    delay: 1,
    duration: 2.35,
    scrollTrigger: {
        trigger: "#photo-collage",
        scroller: "#main",
        // markers: true,
        start: "top 50%",
        end: "bottom 30%",
        scrub: 3,
    }
})
tl1.from('#photo-collage #box10',{
    opacity: 0,
    delay: 1,
    duration: 2,
    scrollTrigger: {
        trigger: "#photo-collage",
        scroller: "#main",
        // markers: true,
        start: "top 50%",
        end: "bottom 30%",
        scrub: 3,
    }
})


}




page1Animation();
page2Animation();
page3Animation();
page4Animation();