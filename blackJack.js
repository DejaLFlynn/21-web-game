document.addEventListener('DOMContentLoaded', () => {
    const newDeckCards = async () => {
        try {
            let newDeck = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            let id = document.querySelector("#deckId")
            id.innerText = newDeck.data.deck_id
// debugger 
            let dealer = []
            let player = []
            let gameStart = false;
            
            let button = document.querySelector('#button')
            button.addEventListener("click", (displayCard));
            let button2 = document.querySelector("#button2") 
            button2.addEventListener("click", (display2Cards))    
            // debugger
        } catch (err) {
            console.log(err)
            debugger
        }
    }
            const handTotal=async()=>{
                let total = 0
                let ace = false;
                for(let i=1; i <=handTotal.length; i++){
                    total += Math.min(10, hand[i].card.value )
                    if(hand[i].card.value ==1 )
                        ace = true;
                }
                    if (total + 10 <=21 && ace)
                        total += 10;
                        return total
                    
                
            }
            const startGame = ()=>{
                let dealer = handTotal(player1)
                let player = handTotal(player2)
                if(dealer == 21){
                    endGame(false, "you both have 21")
                }else  {
                    endGame(false, "dealer has 21")
                }else if(player=== 21){
                    endGame(true, "you have 21")
                }
            }
            const endGame =()=>{
                let dealer=handTotal(21)
                let player = handTotal(21)
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
            const  display2Cards = async()=>{
                let id = document.querySelector("#deckId")
                let drawCard = await axios.get(`https://deckofcardsapi.com/api/deck/${id.innerText}/draw/?count=2`);
                drawCard.data.cards.forEach(el=>{
                    let image = document.createElement("img");
                    image.src = el.image;
                    document.body.appendChild(image)
                })   
            }
            const startGame = async(winningHand, startGame, endGame)=>{
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

            const winningHand = async(player1,player2)=>{

                if(player1 > player2 && player1 <=21){
                    console.log("you won!")
                }
            }
    newDeckCards()
    startGame()
})
