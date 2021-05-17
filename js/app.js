
const plan2 = document.getElementById('plan2');
const plan3 = document.getElementById('plan3');
const plan2budynki = document.getElementById('plan2budynki');
const plan1 = document.getElementById('plan1');
const container = document.getElementById('container');

gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({
    scrollTrigger:{
        trigger: container,
        // markers: true,
        start: 'top 0%',
        scrub: 1
        // end: 'top 30%' ??need that??
    }
});

tl.to(plan3, 5, {y: 300})
.to(plan1, 2, {y: 300}, '-=5')
.to('.second-container', 5, {top: '0%'}, '-=5');
