document.addEventListener('DOMContentLoaded', () => {
    const newDeckCards = async () => {
        try {
            let newDeck = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            let id = document.querySelector("#deckId")
            id.innerText = newDeck.data.deck_id
            // debugger 
            let button = document.querySelector('#button')
            button.addEventListener("click", (displayCard));
            let button2 = document.querySelector("#button2")
            button2.addEventListener("click", () => {
                startGame()
                removeButton()
            })
            let stay = document.querySelector("#stay")
            stay.addEventListener("click", (removeButton))
        } catch (err) {
            console.log(err)
            debugger
        }
    }
    const handTotal = (total, results) => {
        let playerScore = 0;
        let dealerScore = 0;
        let results = document.querySelector("#results")
        let total = document.createElement("h3")

        if (playerScore > dealerScore && playerScore <= 21) {
            winningHand()
        } else if (dealerScore < 21 && dealerScore > playerScore) {
            dealerWin()
        } else if (playerScore > 21 && dealerScore > 21) {
            tie()
        }
    }

    const displayCard = async () => {
        let id = document.querySelector("#deckId")
        let drawCard = await axios.get(`https://deckofcardsapi.com/api/deck/${id.innerText}/draw/?count=1`);
        drawCard.data.cards.forEach(el => {
            let image = document.createElement("img");
            image.src = el.image;
            document.body.appendChild(image)
            if (el.value === "KING" || el.value === "QUEEN" || el.value === "JACK") {
                if (results.id === "displayCards") {
                    playerScore += 10;
                } else {
                    dealerScore += 10
                }
            } else if (el.value == "ACE") {
                if (results.id === "displayCards") {
                    playerScore += 11
                } else {
                    dealerScore += 11
                }
            } else {
                if (results.id === "displayCards") {
                    playerScore += Number(el.value)
                } else {
                    dealerScore += Number(el.value)
                }
            }
            let li = document.createElement("li")
            li.appendChild(img)
            results.appendChild(li)
        })
    }

    const startGame = async () => {
        let playerScore = 0;
        let dealerScore = 0;
        let id = document.querySelector("#deckId")
        let drawCard = await axios.get(`https://deckofcardsapi.com/api/deck/${id.innerText}/draw/?count=2`);
        drawCard.data.cards.forEach(el => {
            let image = document.createElement("img");
            image.src = el.image;
            document.body.appendChild(image)

        })
    }
    const removeButton = async () => {
        let results = document.querySelector("results")
        let buttonRem1 = document.querySelector("button2")
        results.removeChild(buttonRem1)
        let buttonRem2 = document.querySelector("#stay")
        results.removeChild(buttonRem2)
    }


    const winningHand = () => {
        let results = document.querySelector("#results")
        let playerWins = document.createElement("h3")
        results.innerText = "Winner"
        results.appendChild(playerWins)
    }
    const tie = () => {
        let sameScore = document.createElement("h4")
        sameScore.innerText = "Tie"
        resultsDiv.replaceChild(sameScore, handOfCards)
    }
    newDeckCards()
    handTotal()
    cardValue()
    removeButton()
    // startGame()
    // winningHand()
    // endGame()
    // handTotal()

})
