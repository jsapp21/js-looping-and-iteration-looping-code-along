const myArr = ['Lisa', 'Kaitlin', 'Jan']
const event = ["surprise"]

function writeCards(myArr, event) {
    let thankYouCards = []
    for (let i = 0; i < myArr.length; i++) {
        thankYouCards.push(`Thank you, ${myArr[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}



function countDown(number) {
    let i = 0;
    while(i < number) {
        console.log(number);
        number -= 1;
    }
    // returns last executed element
    console.log(number);
}

