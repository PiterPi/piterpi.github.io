const swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    }
})



const mediaQuery = window.matchMedia('(max-width: 840px)')
const platform = document.querySelector('.platform')

const addBox = document.createElement('img')
addBox.className = "mb-stock";
addBox.src = 'icons/stock.svg'
platform.prepend(addBox)

const mbStock = document.querySelector('.mb-stock')
mbStock.style.display = 'none'
mbStock.style.width = '62px'
mbStock.style.height = '62px'
mbStock.style.top = 0
mbStock.style.left = 0
mbStock.style.margin = '6px 0 0 0'
mbStock.style.position = 'absolute'
mbStock.style.zIndex = 5



const openItemStock = () => {
    window.addEventListener('resize', () => {

        mediaQuery.matches
            ? mbStock.style.display = 'flex'
            : mbStock.style.display = 'none'


    })
}


openItemStock()