document.addEventListener("DOMContentLoaded", ()=>{
    const newDeck = async()=>{
        try{
            let newCards = await axios.get("https://deckofcardsapi.com/api/deck/new/")
            let deck_id = newCards.data.deck_id
           
            let id = document.querySelector("#handOfCards")
            id.innerText = newCards.data.deck_id
            let button = document.querySelector("#button")
            button.addEventListener("click",display)
            debugger
            
        }catch(err){
            console.log('error')
        }
    }
    const display = async()=>{
        let id = document.querySelector("#drawId")
        let draw = await axios.get(`https://deckofcardsapi.com/api/deck/${id.innerText}/draw/?count=5`)
        draw.data.cards.forEach(el=>{
            let image = document.createElement("img")
            image.src = el.image
            document.body.appendChild(image)
        })
    }
    newDeck()
    display()
})
