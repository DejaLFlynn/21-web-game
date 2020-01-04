document.addEventListener("DOMContentLoaded", () => {
    newDeckCards()
})

const newDeckCards = async () => {
    try {
        let response = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        let newDeck = response.data.deck_id
        let drawResponse = await axios.get(`https://deckofcardsapi.com/api/deck/${newDeck}/draw/?count=2`)
        let playerScore = document.querySelector("playerScore")
        let total = 0
        drawResponse.data.cards.forEach(el => {
            debugger
            let cardTotal = el.value
            if (cardTotal === "KING" || cardTotal === "QUEEN" || cardTotal === "JACK") {
                total += 10
            } else if (cardTotal == "ACE") {
                if (total < 11) {
                    total += 11
                } else if (total === 20) {
                    total += 1
                }
            } else {
                total += Number(cardTotal)

            }
            playerScore.innerText = total

        })

        // displayCard.appendChild(playerScore)
        gameScore(total)


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
