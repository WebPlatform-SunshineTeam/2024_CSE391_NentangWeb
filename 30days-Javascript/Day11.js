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

const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/1/2020 8:30",
    completed: true
  },
  {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false
  },
  {
    task: "Assess Test Result",
    time: "4/1/2020 1:00",
    completed: false
  }
];
for (const {task, time, completed} of todoList) {
    console.log(task, time, completed)
}

const evens = [0, 2, 4, 6, 8, 10];
const odds = [1, 3, 5, 7, 9];
const evenNumbers = [...evens, ...odds]
console.log(evenNumbers)

const user = {
    name: `John`,
    age: 24,
    school: `FPT University`
}
const otherUser = (...args) => { // Rest operator: gom cac tham so thanh 1 mang
    console.log(args)
}
otherUser(1, 2, 3, 4) // [1, 2, 3, 4]