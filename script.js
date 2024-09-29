let tl = gsap.timeline();
// gsap.registerPlugin(ScrollTrigger);
// Navbar
tl.from(
    'header h3', {
    y: -20,
    duration: 1,
    opacity: 0,
    stagger: 1, // stagger is used to delay the animation of each element
    // repeat: -1, // repeat the animation infinitely
    // yoyo: true, // yoyo effect is used to go back to the initial position
})

// cursor
const body = document.querySelector('body')
const cursor = document.querySelector('#cursor')

body.addEventListener('mousemove', (e) => {
    // console.log(e.screenX);

    gsap.to(
        cursor, {
        left: e.x,
        top: e.y,
        duration: 1,
        ease: "ease-in-out",
    },
    )
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
let initialPath = `M 60 100 Q 600 100 1200 100`

let string = document.querySelector('#string')

string.addEventListener('mousemove', (mouse) => {
    console.log('enter');
    let movePath = `M 60 100 Q ${mouse.x} ${mouse.offsetY} 1200 100`
    gsap.to(
        "#string svg path", {
        attr: {
            d: movePath
        },
        duration: 0.1,
        ease: "power2.out"
    })
})

string.addEventListener('mouseleave', () => {
    console.log('leave');

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
    x: '65vw',
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

// six

let img1 = document.querySelector('.six .img-container1');

img1.addEventListener('mouseenter', (e) => {
    cursor.innerHTML = 'View More'
    gsap.to(
        cursor, {
        scale: 6,
        border: '1px solid transparent',
        backgroundColor: '#ffffff8a',
    }
    )
})

img1.addEventListener('mouseleave', (e) => {
    cursor.innerHTML = ''
    gsap.to(
        cursor, {
        scale: 1,
        border: '1px solid black',
        backgroundColor: '#fff'
    }
    )
})

// seven
const breakText = () => {
    let sevenh1 = document.querySelector('.seven h2');
    let sevenText = sevenh1.textContent;

    let sevenTextSplit = sevenText.split('')
    let halftext = sevenTextSplit.length / 2;
    
    let clutter = '';
    sevenTextSplit.forEach((letter, index) => {
        if (index < halftext) {
            clutter += `<span class="first">${letter}</span>`
        } else {
            clutter += `<span class="second">${letter}</span>`
        }
    })

    sevenh1.innerHTML = clutter;
}

breakText();

gsap.from(
    '.seven h2 .first', {
    y: 100,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
})

gsap.from(
    '.seven h2 .second', {
    y: 100,
    opacity: 0,
    stagger: -0.15,
    duration: 0.8,
})






































