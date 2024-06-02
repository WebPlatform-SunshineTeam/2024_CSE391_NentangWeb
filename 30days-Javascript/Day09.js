const callback = n => {
    return n ** 2
}

function cube(callback, n) {
    return callback(n) * n
}

console.log(cube(callback, 3))

const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10)) // 2 * 2 + 3 * 3 + 10 = 4 + 9 + 10 = 23

const numbers = [1, 2, 3, 4]
const sumArray = arr => {
    let sum = 0
    // const callback = function (element) {
    //     sum += element
    // }
    // arr.forEach(callback)
    arr.forEach(element => {
        sum += element
    });
    return sum
}
console.log(sumArray(numbers))
let sum = 0
numbers.forEach(cc => {
    sum += cc
    console.log(sum)
})
// Ánh xạ từng phần tử và và thay đổi giá trị của nó và gán vào mảng mới, không thay đổi mảng cũ
const modifiedArray = numbers.map(function(element, index, arr) {
    console.log(element, index, arr)
    return element
})
const names = ['Ali', 'Olga', 'Nina', 'Sam']
const namesToUpperCase = names.map(name => name.toUpperCase())
console.log(namesToUpperCase)

const namesHasO = names.filter(name => name.includes('O'))
console.log(namesHasO)