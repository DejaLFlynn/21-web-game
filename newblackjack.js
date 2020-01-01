document.addEventListener("DOMContentLoaded", ()=>{
    const nextDeck = async(url)=>{
        try{
            let response = await axios.get(url)
            return response.data
        }catch(err){
            console.log("error")
        }
    }
    
    const gameDeck = async(newDeck,num,ul)=>{
        let url = `https://deckofcardsapi.com/api/deck/${newDeck}/draw/?count=${num}` 
        let drawResponse = await nextDeck(url)          
            let drawACard = drawResponse.data.cards
            // let total = 0
            drawACard = document.querySelector("#results")
            drawACard.forEach(el=>{
                debugger
                let value = el.value
                let li = document.createElement("li")
                let cardImage = document.createElement("img")
                cardImage.src = el.image
                if(value === "KING"|| value === "QUEEN"|| value ==="JACK"){
                    if(ul.id==="playerCards"){
                    playerScore +=10
                    } else{   
                    computerScore += 10
                    }
                }else if(value === "ACE"){
                    if(ul.id ==="playerCards"){
                        playerScore +=11
                    } else {
                        computerScore +=11
                    }
                }else{
                    if(ul.id ==="playerCards"){
                    playerScore +=Number(value)
                    }else{
                    computerScore+=Number(value)
         }
    }
    playerScore.appendChild(cardImage)
    ul.appendChild(li)
    drawACard.innerText = playerScore
})
    }
//working on start of the game with new values
let stay = document.querySelector("stay")
stay.addEventListener("click",()=>{
    await drawACard(deckId, "3", computerCards)
    computerScore.innerText = computerScoreResult
    results.appendChild(computerScore)
    if (playerScore.innerText > computerScore.innerText && playerScore.innerText <= 21) {
        computerScoreResult.innerText = "computer wins"
    } else if (computerScore.innerText < 21 && computerScore.innerText > playerScore.innerText) {
        playerScoreResult.innerText = "player wins"
    } else if (playerScore.innerText > 21 && computerScore.innerText > 21) {
        results.innerText = "tie"
    }
    stay.parentNode.removeChild(stay)
    let restart = document.createElement("button")
    restart.innerText = "Restart Game"
    restart.id = "restart"
    restart.addEventListener("click", gameDeck)
})
//}
let start = document.querySelector("startGame")
start.addEventListener("click",()=>{
    gameDeck()
    startGame.parentNode.removeChild(startGame)

})
})