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
            button2.addEventListener("click", (display2Cards))    
            // debugger
        } catch (err) {
            console.log(err)
            debugger
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
            const  display2Cards = async()=>{
                let id = document.querySelector("#deckId")
                let drawCard = await axios.get(`https://deckofcardsapi.com/api/deck/${id.innerText}/draw/?count=2`);
                drawCard.data.cards.forEach(el=>{
                    let image = document.createElement("img");
                    image.src = el.image;
                    document.body.appendChild(image)
                })   
            }
            const startGame = async()=>{
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
            }
            allCards = drawCard;
            }
    newDeckCards()
    startGame()
})
