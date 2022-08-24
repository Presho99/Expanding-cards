const cards = document.querySelectorAll(".card")

cards.forEach((card) => {
    card.addEventListener("click", () => {
        removeActive()
        card.classList.remove("inactive")
        card.classList.add("active")

        addInactive(card)
        
    })
})

function removeActive(){
    cards.forEach((card) => {
        card.classList.remove("active")
    })

}

function addInactive(activecard){
    cards.forEach((card) => {
       if(card.id !== activecard.id){
           card.classList.add("inactive")
       }else
       {
           card.classList.add("active")
       }
    })
}


