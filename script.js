const modalOverley = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modalContent = document.querySelector('.modal-content')

for (let card of cards) {
    card.addEventListener("click", function() {
        const colorCard = card.getAttribute("color")
        const backgroundCardModal = document.getElementById("card-modal")
        modalOverley.classList.add("active")
        backgroundCardModal.style.background=`${colorCard}`
    })
}

modalContent.addEventListener("click", function() {
    modalOverley.classList.remove("active")
})