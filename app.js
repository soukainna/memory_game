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
let cardchosen = []
let cardchosenid = []
const cardwon = []
const griddisplay = document.querySelector('#grid') // chercher dans le html l'id grid

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionone = cardchosenid[0]
    const optiontwo = cardchosenid[1]

    if(optionone == optiontwo)
    {
        alert('You clicked on the same card')
    }

    if (cardchosen[0] == cardchosen[1]){
        alert('you found a match !')
        cards[optionone].setAttribute('src', 'images/white.png')
        cards[optiontwo].setAttribute('src', 'images/white.png')
        cards[optionone].removeEventListener('click', flipCard)
        cards[optiontwo].removeEventListener('click', flipCard)
        cardwon.push(cardchosen)
    }else{
        cards[optionone].setAttribute('src', 'images/blank.png')
        cards[optiontwo].setAttribute('src', 'images/blank.png')
    }
    cardchosen = []
    cardchosenid = []

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