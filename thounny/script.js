document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
    const stickySection = document.querySelector(".sticky");
    const stickyHeight = window.innerHeight * 4;
    // there are 4 pages of sticky section: 1 + 1 + 2
    const lenis = new Lenis({
        autoRaf: false,
        // raf refers to requestAnimationFrame
        // in this case we would like to control the animation ourselves to sync with scrollTrigger
    });
    lenis.on("scroll", ScrollTrigger.update);
    // ticker is the main raf loop of GSAP (60fps)
    gsap.ticker.add((time) => {
        // read docs and you will get more
        lenis.raf(time * 800);
        // raf method take current timestamp in seconds to process their current tasks and position
        // the process of raf is calculated by the delta value of previous and current timestamp so it doesn't slow down exponentially as the argument reduced (you can try by make it to time*1000)
    });
    gsap.lagSmoothing(0);



});