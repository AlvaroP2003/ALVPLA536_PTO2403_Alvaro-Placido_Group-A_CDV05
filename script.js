const hamburgerMenu = document.getElementById('hamburger-menu')
const overlay = document.getElementById('overlay')

const hamburgerOpenBtn = document.getElementById('hamburger-toggle-btn')
const hamburgerCloseBtn = document.getElementById('hamburger-close-btn')

hamburgerOpenBtn.addEventListener('click', ()=> {
    hamburgerMenu.style.right = '0'
    overlay.style.display = 'block'
})

hamburgerMenu.addEventListener('click', ()=> {
    hamburgerMenu.style.right = '-50%'
    overlay.style.display = 'none'
})


const projectImage = document.querySelector('#projects_section .img-container img')


const projectCards = document.querySelectorAll('.card')

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const link = card.getAttribute('data-link');
        if (link) {
          window.open(link, '_blank');
        }
      });
    });


projectCards.forEach(card => {
    card.addEventListener('mouseenter', ()=> {
        const newImg = card.getAttribute('data-img')
        projectImage.src = newImg
    })
})

