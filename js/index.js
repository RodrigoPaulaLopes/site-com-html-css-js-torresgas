/*scrol lento ao clicar no link*/
const menuitens = document.querySelectorAll('.menu a')

menuitens.forEach(item =>{
    item.addEventListener('click', mouseRolar)
})

function mouseRolar(event){
    event.preventDefault()
    const element = event.target
    const id = element.getAttribute('href')
    const to = document.querySelector(id).offsetTop

    window.scroll({
        top: to - 100,
        behavior: "smooth"
    })
}