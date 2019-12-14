document.addEventListener("DOMContentLoaded", ()=>{
  
    const buttons = async()=>{
        try{
        let draw = document.querySelector("#drawCard")
        draw.addEventListener("click",()=>{
            drawCard()
        })
        let hit = document.querySelector("#hitCard")
        hit.addEventListener("click",()=>{
            hitCard()
        })
    } catch(err){
        console.log("error")
    }
}
const hitCard = async()=>{
let id = document.querySelector("#drawId")
let hit = await axios.get(`https://deckofcardsapi.com/api/deck/${id.innerText}/draw/?count=1`)
hit.data.cards.forEach(el=>{
    let image =document.createElement("img")
    image.src =el.image
    document.body.appendChild(image)
})
}
const drawCard = async() => {
    let id = document.querySelector("#handOfCards")
    let drawCard = await axios.get(`https://deckofcardsapi.com/api/deck/${id.innerText}/draw/?count=2`);

    drawCard.data.cards.forEach(el=>{
        let image = document.createElement("img");
        image.src = el.image;
        document.body.appendChild(image)
    })
    }

    hitCard()
    drawCard()
    buttons()
   
})
