document.addEventListener("DOMContentLoaded", ()=>{
    let stay = document.querySelector("#stay")
    let startGame = document.querySelector("#startGame")
    
  
    stay.addEventListener("click",()=>{
        
    })
    startGame.addEventListener("click",()=>{
        gameDeck() 
        computerDeck()
        startGame.parentNode.removeChild(startGame)
    })

    const gameDeck =async()=>{
        try{
            let response = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            let newDeck = response.data.deck_id
            console.log(newDeck)
            let drawResponse = await axios.get(`https://deckofcardsapi.com/api/deck/${newDeck}/draw/?count=2`)           
            let twoCards = drawResponse.data.cards
            let total = 0
            twoCards.forEach(el=>{
                // debugger
                let value = el.value
                let cardImage = document.createElement("img")
                cardImage.src = el.image
                playerScore.appendChild(cardImage)
                if(value === "KING"|| value === "QUEEN"|| value ==="JACK"){
                    total = 10
                }else if(value === "ACE"){
                    if(total <=10){
                        total +=11
                    } else {
                        total +=1
                    }
                }else{
                    total +=Number(value)
                }
            
            })
            if(total ===21){
                let results = document.querySelector("#results")
                results ="winner"
                let h3 = document.createElement("h3")
                h3.innerText = results
                startGame.appendChild(h3)
            } else if(total >21){
                results = "loser"
                let h3 = document.createElement("h3")
                h3.innerText = results
                startGame.appendChild(h3)
            }
            let scoreTotal = document.createElement("p")
            scoreTotal.innerText = total

        }catch(error){
            console.log("error")
        }
    }
    const computerDeck = async()=>{
        gameDeck()
        hitCard()
        endGame()
    }
    const endGame = ()=>{
        let computerScore = document.querySelector("#computerScore")
        let playerScore = document.querySelector("#playerScore")
        let scoreResult  = document.querySelector("#results")
        if (playerScore.innerText > computerScore.innerText && playerScore.innerText <= 21) {
            scoreResult.innerText = "Over"
        } else if (computerScore.innerText < 21 && computerScore.innerText > playerScore.innerText) {
            scoreResult.innerText = "player wins"
        } else if (playerScore.innerText > 21 && computerScore.innerText > 21) {
            scoreResult.innerText = "tie"
        }
    }
    const hitCard = async()=>{
            hitCard.addEventListener("click",async()=>{
                try{
                    let hitResponse = await axios.get(`https://deckofcardsapi.com/api/deck/${newDeck}/draw/?count=1`)
                    let oneCard = hitResponse.data.cards
  
                    oneCard.forEach(el=>{
                        let value = el.value
                        let li = document.createElement("li")
                        let cardImage = document.createElement("img")
                        cardImage.src = el.image
                        li.appendChild(cardImage)
                        if(value === "KING"|| value === "QUEEN"|| value ==="JACK"){
                            total = 10
                        }else if(value === "ACE"){
                            if(total <=10){
                                total +=11
                            } else {
                                total +=1
                            }
                        }else{
                            total +=Number(value)
                        }
                    })
                }catch(error){
                    console.log("error")
                }
    })
  
    }
})