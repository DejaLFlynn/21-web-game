document.addEventListener('DOMContentLoaded', () => {
    let total = 0
    let res = 0
    let newArr =[]
    const newDeckCards = async () => {
        try {
            let newDeck = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            let id = document.querySelector("#deckId")
            id.innerText = newDeck.data.deck_id
            let button = document.querySelector('#button')
            button.addEventListener("click", (displayCard));
            let button2 = document.querySelector("#button2")
            button2.addEventListener("click", () => {
            startGame()
            button2.parentNode.removeChild(button2)
            })
            let stay = document.querySelector("#stay")
            stay.addEventListener("click", () => {
            stay.parentNode.removeChild(stay)
            })
        } catch (err) {
            console.log(err) 
        }
    }
    
    const handTotal = (arr) => {
     
       arr.forEach(el=>{
           debugger
        if (el === "KING" || el === "QUEEN" || el === "JACK") {
            el = 10
            total +=el;
        } else if (el == "ACE") {
            if(total <11){
                el = 11;
                total +=el
            } else if(total === 20){
                el = 1;
                total += el
            }
        }else{
            total +=Number(el)
        }
       })
       res += total;
       newArr = []

    }
    const displayCard = async () => {
        let id = document.querySelector("#deckId")
        let drawCard = await axios.get(`https://deckofcardsapi.com/api/deck/${id.innerText}/draw/?count=1`);
        drawCard.data.cards.forEach(el => {
            let image = document.createElement("img");
            image.src = el.image;
            drawCard.innerText = ""
            document.body.appendChild(image)
            let li = document.createElement("li")
            li.appendChild(img)
            let result = document.querySelector("#results")
            drawCard.parentNode.appendChild(results)
            let total = document.querySelector("p") 
            debugger
            total.id = "total"
            result.appendChild(total)
        })   

    }
    const startGame = async () => {
        let id = document.querySelector("#deckId")
        let drawCard = await axios.get(`https://deckofcardsapi.com/api/deck/${id.innerText}/draw/?count=2`);
        drawCard.data.cards.forEach(el => {
            let image = document.createElement("img");
            image.src = el.image;
            document.body.appendChild(image)

        })
        computerGame()
        handTotal(drawCard.data.cards)
        winningHand()
    }
    const computerGame = async () => {
        let id = document.querySelector("#deckId")
        let drawCard = await axios.get(`https://deckofcardsapi.com/api/deck/${id.innerText}/draw/?count=3`);
        drawCard.data.cards.forEach(el => {
            let image = document.createElement("img");
            image.src = el.image;
            document.body.appendChild(image)

        })
        handTotal(drawCard.data.cards)
        winningHand()

    }

    const winningHand = () => {
        let dealerScore = document.querySelector("#computerCard")
        let playerScore = document.querySelector("#displayCard")
        let result = document.querySelector("playerResults")
        if (playerScore > dealerScore && playerScore <= 21) {
            results.innerText = "Over"
        } else if (dealerScore < 21 && dealerScore > playerScore) {
            result.innerText = "player wins"
        } else if (playerScore > 21 && dealerScore > 21) {
            result.innerText = "tie"
        }
        
    }
    newDeckCards()
    handTotal(newArr)
    winningHand()
 

})
