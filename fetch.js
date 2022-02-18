// Tarot API
const baseURL = "https://rws-cards-api.herokuapp.com"

//each type of spread
const oneCard = document.getElementById("oneCard")

const threeCard = document.getElementById("threeCard")

const fiveCard = document.getElementById("fiveCard")

//each event listener invokes a different function (reading)
oneCard.addEventListener('submit', unoTarjeta);

threeCard.addEventListener('submit', tresTarjetas);

fiveCard.addEventListener('submit', cincoTarjetas);

const deckDisplay = document.querySelector("ul");

// paths to card names and meanings shortened

const titleOne = document.getElementById("card1");

const titleTwo = document.getElementById("card2");

const titleThree = document.getElementById("card3");

const titleFour = document.getElementById("card4");

const titleFive = document.getElementById("card5");

const meaningOne = document.getElementById("des1");

const meaningTwo = document.getElementById("des2");

const meaningThree = document.getElementById("des3");

const meaningFour = document.getElementById("des4");

const meaningFive = document.getElementById("des5");

function unoTarjeta() {
    event.preventDefault();
    fetch(`${baseURL}/api/v1/cards/random?n=1`).then((response) => {
        console.log(response);
        return response.json();
        
    })
    .then(json => {
        console.log(json);
        titleOne.innerHTML = `${json.cards[0].name}`
        meaningOne.innerHTML = `<h3>meAning:</h3>${json.cards[0].meaning_up}`;

})
.catch(error => console.log("Error happening here at first fetch", error)
)}


function tresTarjetas() {
    event.preventDefault();
    fetch(`${baseURL}/api/v1/cards/random?n=3`).then((response) => {
        console.log(response);
        return response.json();
        
    })
    .then(json => {
        console.log(json);
        titleTwo.innerHTML= `<h3>pAst:</h3>${json.cards[0].name}`
        meaningTwo.innerHTML= `${json.cards[0].meaning_up}`;
        titleThree.innerHTML= `<h3>pResent:</h3>${json.cards[1].name}`
        meaningThree.innerHTML= `${json.cards[1].meaning_up}`;
        titleFour.innerHTML= `<h3>futuRe:</h3>${json.cards[2].name}`
        meaningFour.innerHTML= `${json.cards[2].meaning_up}`;

})
.catch(error => console.log("Error happening here at first fetch", error)
)}

function cincoTarjetas() {
    event.preventDefault();
    fetch(`${baseURL}/api/v1/cards/random?n=5`).then((response) => {
        console.log(response);
        return response.json();
    })
    .then(json => {
        console.log(json);
        titleOne.innerHTML= `<h3>whAts holding you bAck:</h3>${json.cards[3].name}`
        meaningOne.innerHTML= `${json.cards[3].meaning_up}`;
        titleTwo.innerHTML= `<h3>pAst:</h3>${json.cards[0].name}`
        meaningTwo.innerHTML= `${json.cards[0].meaning_up}`;
        titleThree.innerHTML= `<h3>pResent:</h3>${json.cards[1].name}`
        meaningThree.innerHTML= `${json.cards[1].meaning_up}`;
        titleFour.innerHTML= `<h3>futuRe:</h3>${json.cards[2].name}`
        meaningFour.innerHTML= `${json.cards[2].meaning_up}`;
        titleFive.innerHTML= `<h3>how to move foRwARd:</h3>${json.cards[4].name}`
        meaningFive.innerHTML= `${json.cards[4].meaning_up}`;

    
})
.catch(error => console.log("Error happening here at first fetch", error)
)}

