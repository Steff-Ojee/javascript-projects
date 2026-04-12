const readline = require('readline')
const r1 = readline.createInterface({ input: process.stdin, output: process.stdout })

let secret = Math.floor(Math.random() * 10) + 1
let attempts = 0

function askGuess() {
    r1.question( 'Your guess ', function(guess) {
        guess = Number(guess)
        attempts++
        if (guess === secret) {
            console.log(`You got it in ${attempts} attempts!`)
            r1.close()
        }else if (attempts >= 5) {
            console.log(`Game over! The number was ${secret}`)
            r1.close()
        }else if (guess > secret) {
            console.log('Too high!')
            askGuess()
        }else {
            console.log('Too low!')
            askGuess()
        }
    })
}

console.log('Welcome to the Number Guessing Game! Guess a number between 1 and 10!')
askGuess()
