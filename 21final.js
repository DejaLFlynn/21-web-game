document.addEventListener("DOMContentLoaded", ()=>{
    let newDeck;
    let stay = document.querySelector("#stay")
    let startGame = document.querySelector("#startGame")
    let hitCards = document.querySelector("#hitCard")
    hitCards.addEventListener("click", ()=>{
        hitCard()
    })
  
    stay.addEventListener("click",()=>{
        let restart = document.createElement("button")
        restart.innerText = "Restart Game"
        restart.id = "restart"
        restart.addEventListener("click", gameDeck)
        stay.parentNode.removeChild(stay)
    })
    startGame.addEventListener("click",()=>{
        gameDeck() 
        // computerDeck()
        startGame.parentNode.removeChild(startGame)
    })

    const gameDeck =async(newDeck)=>{
        try{
            let response = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            newDeck = response.data.deck_id
            console.log(newDeck)
            let drawResponse = await axios.get(`https://deckofcardsapi.com/api/deck/${newDeck}/draw/?count=2`)           
            let twoCards = drawResponse.data.cards
            let total = 0
            twoCards.forEach(el=>{
                debugger
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
        endGame()
    }

    const endGame = ()=>{
        let computerScore = document.querySelector("#computerScore")
        let playerScore = document.querySelector("#playerScore")
        let scoreResult  = document.querySelector("#results")
        if (playerScore.innerText > computerScore.innerText && playerScore.innerText <= 21) {
            scoreResult.innerText = "computer wins"
        } else if (computerScore.innerText < 21 && computerScore.innerText > playerScore.innerText) {
            scoreResult.innerText = "player wins"
        } else if (playerScore.innerText > 21 && computerScore.innerText > 21) {
            scoreResult.innerText = "tie"
        }
    }
//     const computerDeck =async(newDeck)=>{
//         try{
//         let compCard = document.querySelector("#computerCard")
//         let response = await axios.get(`https://deckofcardsapi.com/api/deck/${newDeck}/draw/?count=3`)
//         newDeck = response.data.deck_id
//         threeCards.forEach(el=>{
//             let image = document.createElement("img")
//             image.src = el.value
//             compCard.appendChild(image)
//             if(value === "KING"|| value === "QUEEN"|| value ==="JACK"){
//                 total = 10
//             }else if(value === "ACE"){
//                 if(total <=10){
//                     total +=11
//                 } else {
//                     total +=1
//                 }
//             }else{
//                 total +=Number(value)
//             }
//         })
//         if(total ===21){
//             let results = document.querySelector("#results")
//             results ="winner"
//             let h3 = document.createElement("h3")
//             h3.innerText = results
//             startGame.appendChild(h3)
//         } else if(total >21){
//             results = "loser"
//             let h3 = document.createElement("h3")
//             h3.innerText = results
//             startGame.appendChild(h3)
//         }
//         let scoreTotal = document.createElement("p")
//         scoreTotal.innerText = total
//     }catch(error){
//         console.log("error")
//     }
// endGame()
//     }
    const hitCard = async(newDeck)=>{
       
            
                try{
                    let hitResponse = await axios.get(`https://deckofcardsapi.com/api/deck/${newDeck}/draw/?count=1`)
                    let oneCard = hitResponse.data.cards
  
                    oneCard.forEach(el=>{
                        debugger
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
    
  
    }
})