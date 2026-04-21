let numbers = [1, 2, 3, 4, 5]
let doubled = numbers.map(function(num) {
    return num*2
})
console.log(doubled)

let squared = numbers.map(function(num) {
    return num*num
})
console.log(squared)

let numbersb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evens = numbersb.filter(function(num) {
    return num  % 2 === 0
})
console.log(evens)

let numbersc = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10]
let fivers = numbersc.filter(function(num) {
    return num >= 5
})
console.log(fivers)

let numbersd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let result = numbersd.filter(function(num) {
    return num > 5
}).map(function(num) {
    return num * 2
})
console.log(result)

let people = [
    {name: 'Steff', age: 25, city: 'Oslo'},
    {name: 'Barry', age: 30, city: 'Lubumbashi'},
    {name: 'Maria', age: 22, city: 'Nairobi'},
    {name: 'John', age: 40, city: 'Budapest'}
]
let resultb = people.filter(function(person) {
    return person.age > 25
}).map(function(person) {
    return person.name
})
console.log(resultb)

let resultc = people.filter(function(person) {
    return person.age > 25
}).map(person => person.name)
console.log(resultc)

let resultd = people.filter(person => person.age > 25).map(person => person.name)
console.log(resultd)

let found = people.find(person => person.city === 'Oslo')
console.log(found)

let foundb = people.find(person => person.age > 15)
console.log(foundb)

let foundc = people.find(person => person.city === 'Tehran')
console.log(foundc)
