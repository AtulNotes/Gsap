let tl = gsap.timeline();
// gsap.registerPlugin(ScrollTrigger);
// Navbar
tl.from(
    'nav h3', {
    y: -20,
    duration: 1,
    opacity: 0,
    stagger: 1, // stagger is used to delay the animation of each element
    // repeat: -1, // repeat the animation infinitely
    // yoyo: true, // yoyo effect is used to go back to the initial position
})

// main
tl.from(
    'main h1', {
    x: -20,
    duration: 1,
    opacity: 0,
    stagger: 1
})

// String
let initialPath = `M 200 100 Q 650 100 1300 100`

let string = document.querySelector('#string')

string.addEventListener('mousemove', (mouse) => {
    let movePath = `M 200 100 Q ${mouse.x} ${mouse.offsetY} 1300 100`
    gsap.to(
        "#string svg path", {
        attr: {
            d: movePath
        },
        duration: 0.1,
        ease: "power2.out"
    })
    console.log(mouse);
    
})

string.addEventListener('mouseleave', (mouse) => {
    gsap.to(
        "#string svg path", {
        attr: {
            d: initialPath
        },
        duration: 2,
        ease: "elastic.out(1, 0.2)"
    })
})

// one
// Initial to final
gsap.to(
    "#box1", {
    x: 1100,
    duration: 3,
    ease: "bounce",
    repeat: -1,
    yoyo: true,
})

// final to initial
gsap.from(
    "#box2", {
    x: 1100,
    duration: 3,
    ease: "bounce",
    repeat: -1,
    yoyo: true,
})

// two
gsap.from(
    "#two h2", {
    opacity: 0,
    duration: 1,
    delay: 1,
    y: 30,
    stagger: 1,
    repeat: -1,
    yoyo: true,
})

// three
tl.to(
    "#box3", {
    x: 1000,
    duration: 2,
    ease: "ease-in-out",
    repeat: -1,
    yoyo: true,
})
tl.to(
    "#box4", {
    x: 1100,
    duration: 3,
    ease: "ease-in-out",
    repeat: -1,
    yoyo: true,
})
tl.to(
    "#box5", {
    x: 1100,
    duration: 4,
    ease: "ease-in-out",
    repeat: -1,
    yoyo: true,
})

// four

gsap.from(
    '.four .text1', {
    scale: 0,
    duration: 2,
    x: 500,
    scrollTrigger: {
        trigger: '.four',
        scroller: 'body',
        start: 'top 30%',
    }
}
)
gsap.from(
    '.four .text2', {
    scale: 0,
    duration: 2,
    x: -500,
    scrollTrigger: {
        trigger: '.four',
        scroller: 'body',
        start: 'top 10%'
    }
}
)

gsap.from(
    '.four2 .box', {
    scale: 0,
    opacity: 0,
    rotation: 720,
    duration: 2,
    scrollTrigger: {
        trigger: '.four2 .box',
        scroller: 'body',
        start: 'top 60%',
        end: 'bottom 20%',
        scrub: 3,
        // markers: true,
    }
}
)

// five
gsap.to(
    '.five h2', {
    transform: 'translate(-200%)',
    scrollTrigger: {
        trigger: '.five h2',
        scroller: 'body',
        start: 'top 0%',
        end: 'top 0%',
        scrub: 5,
    }
}
)