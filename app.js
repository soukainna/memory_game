const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
 
]

cardArray.sort(() => 0.5 - Math.random()) // sort the array randomly
const cardchosen = []
const cardchosenid = []
const griddisplay = document.querySelector('#grid') // chercher dans le html l'id grid

function checkMatch(){
    const cards = document.querySelectorAll('img')
    if (cardchosen[0] == cardchosen[1]){
        alert('you found a match !')
        cards[cardchosenid[0]].setAttribute('src', 'images/white.png')
        cards[cardchosenid[1]].setAttribute('src', 'images/white.png')
    }

}

function creatBoard () {
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('card-id', i)
        card.addEventListener('click', flipCard)
        griddisplay.append(card)
        //console.log(card, i);
    }
}

creatBoard()

function flipCard() {
    console.log(cardArray)
    const cardId = this.getAttribute('card-id')
    console.log(cardArray[cardId].name)
    cardchosen.push(cardArray[cardId].name)
    cardchosenid.push(cardId)
    //console.log('clicked', cardId)
    console.log(cardchosen)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardchosen.length === 2)
    {
        setTimeout(checkMatch, 500)
    }
}