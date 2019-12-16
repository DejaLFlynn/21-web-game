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
            button2.addEventListener("click", (startGame))   
            // let dealer = []
            // let player = []
            // let dealerScore = 0;
            // let playerScore = 0;
            // let dealerDiv
            // let playerDiv
            // let start; 
            // debugger
        } catch (err) {
            console.log(err)
            debugger
        }
    }
         const handTotal=(total)=>{
            let playerScore = 0;
            let dealerScore = 0;
             if(playerScore > dealerScore && playerScore <=21){
                winningHand()
             }else if(dealerScore <21 && dealerScore> playerScore){
                 dealerWin()
             }else if(playerScore >21 && dealerScore> 21){
                tie()
             }    
            }

            const displayCard = async() => {
            let id = document.querySelector("#deckId")
            let drawCard = await axios.get(`https://deckofcardsapi.com/api/deck/${id.innerText}/draw/?count=1`);
            drawCard.data.cards.forEach(el=>{
                let image = document.createElement("img");
                image.src = el.image;
                document.body.appendChild(image)
            })
            }
            const  startGame = async()=>{
                let id = document.querySelector("#deckId")
                let drawCard = await axios.get(`https://deckofcardsapi.com/api/deck/${id.innerText}/draw/?count=2`);
                drawCard.data.cards.forEach(el=>{
                    let image = document.createElement("img");
                    image.src = el.image;
                    document.body.appendChild(image)
                })   
            }
            const cardValue = async()=>{
             
                let handOfCards = document.querySelector("#handOfCards")
            for(let i=0; i <drawCard.length; i++){
                if(drawCard[i].value == "KING"|| drawCard[i].value == "QUEEN"|| drawCard[i].value =="JACK"){
                    drawCard[i].value = 10;
                }
                if(drawCard[i].value =="ACE"){
                    drawCard[i].value = 11;
                }
                if(drawCard[i].value !="KING"&& drawCard[i].value !="QUEEN"&& drawCard[i].value != "JACK"&& drawCard[i].value != "ACE"){
                    drawCard[i].value = parseInt(drawCard[i].value)
                }

                let card = document.createElement("img")
                card.src = card[i].image
                card.id = "drawCard"
                handOfCards.appendChild(card)
                allCards = drawCard;
                }
            }

            const winningHand = ()=>{
                let results = document.querySelector("#results")
                let playerWins = document.createElement("h3")
                results.innerText = "Winner"
                results.appendChild(playerWins)
            }
            const tie= ()=>{
                let sameScore = document.createElement("h4")
                sameScore.innerText = "Tie"
                resultsDiv.replaceChild(sameScore,handOfCards)
            }
    newDeckCards()
    handTotal()
    // startGame()
    // winningHand()
    // endGame()
    // handTotal()

})
