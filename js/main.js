//Example fetch using pokemonapi.co
let deckId = ''

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        deckId = data.deck_id
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


function getFetch(){
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`
      
    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        function getSpadeCode(){
          for(let i = 0; i < 51; i++){
            if(data.cards[i].code == 'AS'){
              console.log(i)
            }
          }
        }
        getSpadeCode()


        //document.querySelector('#aceOfSpades').src = aceSpade.image


      })
}
