gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        start: "0% 95%",
        end: "50% 50%",
        //start: "10% 95%",  // start  start-scroll
        //end: "20% 100%",  // end  end-scroll
        scrub: true,
        markers: {
            startColor: "black",
            endColor: "black",
            fontSize: "20px",
            indent: 50
        },
        
        // toggleClass: "tglclass",
        // pin: true
        // rotation: 360,
        // 
        // backgroundColor: "#f00",
        // border: "2px solid #000"
    },
});


tl.to(".prod1",{
    top: "110%",
    left: "13%"
},"banner-animation")

tl.to(".slice-lemon",{
    top: "150%",
    left: "25%"
},"banner-animation")

tl.to(".orange2",{
    top: "170%",
    left: "76%"
},"banner-animation")



const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section3",
        start: "0% 95%",
        end: "50% 50%",
        //start: "10% 95%",  // start  start-scroll
        //end: "20% 100%",  // end  end-scroll
        scrub: true,
        markers: {
            startColor: "black",
            endColor: "black",
            fontSize: "20px",
            indent: 50
        },
        
        // toggleClass: "tglclass",
        // pin: true
        // rotation: 360,
        // 
        // backgroundColor: "#f00",
        // border: "2px solid #000"
    },
});

tl2.to(".prod1",{
    left: "41%",
    top: "217%",
    width: "300px",
},"banner-animation1")

// tl2.to(".slice-lemon",{
//     left: "41%",
//     top: "204%",
//     width: "300px",
//     zIndex: "1"
// },"banner-animation1")


tl2.from(".slice-lemon3",{
    left: "-250%",
    top: "60%",
    rotate: "-90deg",
    zIndex: "1"
},"banner-animation1")


tl2.from(".sec3-prod1",{
    right: "-100%",
    top: "120%",
    rotate: "-90deg",
    zIndex: "1"
},"banner-animation1")