const modalOverley = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modalContent = document.querySelector('.modal-content')

for (let card of cards) {
    card.addEventListener("click", function() {
        const cardId = card.getAttribute("id")
        modalOverley.classList.add("active")
        console.log(cardId)
    })
}

modalContent.addEventListener("click", function() {
    modalOverley.classList.remove("active")
})