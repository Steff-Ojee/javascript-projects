let fruits = ['apple', 'banana', 'mango', 'cherry',]
console.log(fruits)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits.length)

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

fruits.forEach(function(fruit) {
    console.log(fruit)
})

fruits.forEach(function(fruit) {
    console.log(`I love ${fruit}!`)
})

fruits.push('grape')
console.log(fruits)

fruits.pop()
console.log(fruits)

let cities = ['Trondheim', 'Boston', 'Nairobi',]
cities.forEach(function(city) {
    console.log(`I want to visit ${city}!`)
})

let random = Math.floor(Math.random() * cities.length)
console.log(cities[random])
