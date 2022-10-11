// gsap.from('.header', {duration: 1, y: '-100%', ease: 'bounce'})
// gsap.from('.link', {duration:2, opacity:0, delay:1, stagger:.5})
// gsap.from('.right', {duration:2, x:'-180vh', delay:1, ease:'power2.in'})
// gsap.from('.left', {duration: 2, x:'180vh', delay:1, ease:'power2.in'})
// gsap.to('.footer', {duration:1, y:'0', ease:'elastic', delay:1})
// gsap.from('.link_foot', {duration:1, opacity:0, delay:2, stagger:1})
// gsap.fromTo('.button', {opacity:0, scale:0, rotation:720}, {duration:1, delay:2.5, opacity:1, scale:1, rotation:0})

const timeline = gsap.timeline({defaults: {duration: 1}})
timeline //анимация работает поочередно; ({}, 1) - начинает воспроизводится после певой анимации
    .from('.header', {y: '-100%', ease: 'bounce'})
    .from('.link', {opacity:0, delay:1, stagger:.5})
    .from('.left', {x:'180vh', delay:1, ease:'power2.in'}, 1)
    .from('.right',{x:'-180vh', delay:1, ease:'power2.in'}, 1)
    .to('.footer', {y:'0', ease:'elastic', delay:1}, 1)
    .from('.link_foot', {opacity:0, delay:2, stagger:1}, 1)
    .fromTo('.button', {opacity:0, scale:0, rotation:720}, {delay:2.5, opacity:1, scale:1, rotation:0}, 1)
    .from('.arrow_img', {x:'-100vh', delay:2, ease:'back'},2)
    .from('.Push_me_text', { x:'-100vh', delay:2, ease:'.power1'}, 2)


const button = document.querySelector('.button')

button.addEventListener('click', ()=> {
    timeline.timeScale(1.5)
    timeline.reverse()
})
// opacity - непрозрачность
// scale - увеличение
// delay - скорость