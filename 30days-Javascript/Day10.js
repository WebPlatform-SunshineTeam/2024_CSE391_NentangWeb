const mySet = new Set([1, 1, 2, 2]);
console.log(mySet);
mySet.add(3);
console.log(mySet);
mySet.delete(2);
console.log(mySet);
console.log(mySet.has(1));
console.log(mySet.size)
// mySet.clear();
console.log(mySet);
mySet.forEach(value => {
    console.log(value);
})
for (const value of mySet) 
    console.log(value)
for (const value of mySet.values())
    console.log(value)
for (const entry of mySet.entries()) {
    console.log(entry)
}
const numbers = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9]
const uniqueNumbers = new Set(numbers)
console.log(uniqueNumbers) // set
const setToArray = [...uniqueNumbers]
console.log(setToArray) // array

// Union: hop
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b] // a.concat(b)
console.log(c)
let C = new Set(c)
console.log(C)

// Intersection: giao
let A = new Set(a)
let B = new Set(b)

let D = new Set(a.filter(num => B.has(num)))
console.log(D)

countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]
const map = new Map(countries)
console.log(map)

map.set('VietNam', 'HaNoi')
console.log(map.get('VietNam'))