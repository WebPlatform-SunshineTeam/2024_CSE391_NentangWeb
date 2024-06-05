// Destructoring: Phan ra cac phan tu cua mang hoac object va gan vao bien
// Destructing Arrays
names = ['John', 'Jane', 'Mike', 'Smith'];
let [n1, n2, ...n3] = names
console.log(n1, n2)
console.log(n3)

const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']];
for (const [country, city] of countries) {
    console.log(country, city)
}

// Destructoring Object
const human = {
    name: 'John',
    lastName: 'Doe',
    age: 24
}
const { name, lastName, age } = human
console.log(name, lastName, age)

const rect = {
    width: 20,
    height: 10
}
const calculatePerimeter = rectangle => {
    return 2 * (rectangle.width + rectangle.height)
}

console.log(calculatePerimeter(rect))

