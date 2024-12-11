import gsap from "gsap"

// Declare the default timeline to use in all the animation functions.
const tl = gsap.timeline();

// preloader Animation
export const preLoaderAnime = () => {
    tl.to(".texts-container", {
        duration: 0,
        opacity: 1,
        ease: "Power3.easeOut",
    })
        .from(".texts-container span", {
            duration: 1.5,
            delay: 1,
            y: 70,
            skewY: 10,
            stagger: 0.4,
            ease: "Power3.easeOut",
        })
        .to(".texts-container span", {
            duration: 1,
            y: 70,
            skewY: -20,
            stagger: 0.1,
            ease: "Power3.easeOut",
        })
        .to("body", {
            duration: 0.01,
            css: { overflow: "scroll" },
            ease: "Power3.easeOut",
        })
        .from(".sub", {
            duration: 1,
            opacity: 0,
            y: 80,
            ease: "expo.easeOut",
        })
        .to(".preloader", {
            duration: 1.5,
            height: "0vh",
            ease: "Power3.easeOut",
            onComplete: mobileLanding(),
        },
            "-=2")
        .to(".preloader", {
            duration: 0,
            css: { display: "none" }
        })
}

export const mobileLanding = () => {
    if (window.innerWidth < 763) {
        tl.from(".landing_main2", {
            duration: 1,
            delay: 0,
            opacity: 0,
            y: 80,
            ease: "expo.easeOut",
        });
    }
}