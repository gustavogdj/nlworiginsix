/* ABRE E FECHA O MENU QUANDO CLICAR NOS ICONES: HAMBURGUER E X */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
   element.addEventListener('click', function () {
    nav.classList.toggle('show')
   })
}

/* QUANDO CLICAR EM QUALQUER ITEM DO MENU, ESCONDER O MENU */

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

/* QUANDO DER O SCROLL, MUDAR O HEADER (APLICAR UMA SOMBRA) */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
    
        if (window.scrollY >= navHeight) {

        /* SCROLL MAIOR QUE A ALTURA DO HEADER */
        
            header.classList.add('scroll')
        } else {
        
        /* SCROLL MENOR QUE A ALTURA DO HEADER */
        
            header.classList.remove('scroll')
        }
}

/* TESTIMONIALS CAROUSEL SLIDER SWIPER */

const swiper = new Swiper ('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})

/* SCROLLREVEAL: OS ELEMENTOS VÃO SURGINDO NA PÁGINA AO ACIONAR O SCROLL */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true,
})

scrollReveal.reveal(
    `#home .text, #home .image,
    #about .text, #about .image, 
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social-media
    `, {interval: 100})

/* BOTÃO VOLTAR PARA O TOPO */

const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
    
        if (window.scrollY >=560) {
            backToTopButton.classList.add('show')
        } else {
            backToTopButton.classList.remove('show')
        }
}

/* MENU LINK - ACTIVE SECTION */

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
    
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (const section of sections) {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute('id')

      const checkpointStart = checkpoint >= sectionTop
      const checkpointEnd = checkpoint <= sectionTop + sectionHeight

      if (checkpointStart && checkpointEnd) {
        document
            .querySelector ('nav ul li a[href*=' + sectionId + ']')
            .classList.add ('active')
      } else {
        document
            .querySelector ('nav ul li a[href*=' + sectionId + ']')
            .classList.remove ('active')
      }
    }
}

/* WHEN SCROLL */

window.addEventListener ('scroll', function() {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})
