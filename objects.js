let person = {
    name: 'Steff',
    age: 25,
    city: 'Oslo'
}
console.log(person)
console.log(person.name)
console.log(person.city)
console.log(person.age)
console.log(`${person.name} lives in ${person.city} and is ${person.age} years old.`)

let people = [
    {name: 'Steff', age: 25, city: 'Oslo'},
    {name: 'Barry', age: 30, city: 'Lubumbashi'},
    {name: 'Maria', age: 22, city: 'Nairobi'},
    {name: 'John', age: 40, city: 'Budapest'}
]
console.log(people[0])
console.log(people[1])
console.log(people[2])
console.log(people[3])

people.forEach(function(person) {
      console.log(`${person.name} lives in ${person.city} and is ${person.age} years old.`)
})