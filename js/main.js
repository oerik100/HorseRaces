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

document.querySelector('#play').addEventListener('click', getFetch)


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
              return i
            }
          }
        }
        let aceOfSpadeCode = getSpadeCode()

        function getClubCode(){
          for(let i = 0; i < 51; i++){
            if(data.cards[i].code == 'AC'){
              console.log(i)
              return i
            }
          }
        }
        let aceOfClubCode = getClubCode()

        function getHeartCode(){
          for(let i = 0; i < 51; i++){
            if(data.cards[i].code == 'AH'){
              console.log(i)
              return i
            }
          }
        }
        let aceOfHeartCode = getHeartCode()

        function getDiamondCode(){
          for(let i = 0; i < 51; i++){
            if(data.cards[i].code == 'AD'){
              console.log(i)
              return i
            }
          }
        }
        let aceOfDiamondCode = getDiamondCode()


        document.querySelector('#aceOfSpades').src = data.cards[aceOfSpadeCode].image
        document.querySelector('#aceOfClubs').src = data.cards[aceOfClubCode].image
        document.querySelector('#aceOfSpades').src = data.cards[aceOfHeartCode].image
        document.querySelector('#aceOfSpades').src = data.cards[aceOfDiamondCode].image



      })
}
