document.addEventListener("DOMContentLoaded", () => {
    newDeckCards()
})

const newDeckCards = async () => {
    try {
        let response = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        let newDeck = response.data.deck_id
        let drawResponse = await axios.get(`https://deckofcardsapi.com/api/deck/${newDeck}/draw/?count=2`)
        let pScore = document.querySelector("#playerScore")
        let cScore = document.querySelector("#computerScore")
        drawResponse.data.cards.forEach(el => {
            let cardImage = document.createElement("img")
            cardImage.src = el.image
            pScore.appendChild(cardImage)
       
         total =el.value
         debugger
            if (el.value === "KING" || el.value === "QUEEN" || el.value === "JACK") {
                el.value += 10
            } else if (el.value === "ACE") {
                if (el.value < 11) {
                    el.value += 11
                } else if (total === 20) {
                    el.value += 1
                }
            } else {
                el.value += Number(total)

            }
            // playerScore.innerText = el.value
            
        })
        
        // displayCard.appendChild(playerScore)
        // gameScore(total)
 

    } catch (err) {
        console.log("error")
    }
   
}
const gameScore =(total)=>{
    if (playerScore > dealerScore && playerScore <= 21) {
        results.innerText = "Over"
    } else if (dealerScore < 21 && dealerScore > playerScore) {
        result.innerText = "player wins"
    } else if (playerScore > 21 && dealerScore > 21) {
        result.innerText = "tie"
    }
    
} 