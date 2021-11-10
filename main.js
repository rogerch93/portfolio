/*efeito de escrita automatica*/
function write(elemento) {
  const textoArray = elemento.innerHTML.split('')
  elemento.innerHTML = ''
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 75 * i)
  })
}

const titulo = document.querySelector('.card1 h1')
write(titulo)

/*botao para voltar ao topo */
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  if (this.scrollY >= 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})

/*swipper paralax*/
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  mousewheel: true,

  pagination: {
    el: '.swiper-pagination'
  },

  autoplay: {
    delay: 3000
  },

  parallax: true
})

const swiperCubo = new Swiper('.swiper-container', {
  effect: 'cube',
  cubeEffect: {
    slideShadows: false
  },
  direction: 'horizontal',
  mousewheel: true,

  autoplay: {
    delay: 3500
  }
})

/*evitar que uma funcao de scroll seja usada constantemente*/
const debounce = function (func, wait, immediate) {
  let timeout
  return function (...args) {
    const context = this
    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

/*logica de animacao scroll */
const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

function animeScroll() {
  const windowTop = window.scrollY + 100
  target.forEach(function (element) {
    if (windowTop > element.scrollTop) {
      element.classList.add(animationClass)
    }
  })
}

animeScroll()

if (target.length) {
  window.addEventListener(
    'scroll',
    debounce(function () {
      animeScroll()
      console.log('adq')
    }, 200)
  )
}

/*botao do menu*/
const btnMobile = document.getElementById('btn-mobile')
btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

function toggleMenu(event) {
  if (event.type == 'touchstart') event.preventDefault()
  const navBtn = document.getElementById('nav')
  navBtn.classList.toggle('actives')
}

/*remover menu ao clicar em algum link */
const closeMenu = document.querySelectorAll('nav ul li a')

for (const close of closeMenu) {
  close.addEventListener('click', function () {
    nav.classList.toggle('actives')
  })
}

/*verificar tamanho da tela do dispositivo para aplicar efeitos de menu*/
if (window.matchMedia('(min-width:1200px)').matches) {
  const desktop = document.querySelectorAll('nav ul li a')

  for (const closeDesktop of desktop) {
    closeDesktop.addEventListener('click', function () {
      nav.classList.remove('actives')
    })
  }
}
