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

const names = ['Ali', 'Olga', 'Nina', 'Sam']
const namesToUpperCase = names.map(name => name.toUpperCase())
console.log(namesToUpperCase)

const namesHasO = names.filter(name => name.includes('O'))
console.log(namesHasO)

// Tinh tong cac phan tu trong mang
const arrNumbers = [1, 2, 3, 4]
const result = arrNumbers.reduce((acc, cur) => acc + cur, 0) // 0: giá trị khởi tạo của acc
console.log(result)
// Tim phan tu lon nhat trong mang
const max = arrNumbers.reduce((acc, cur) => {
    return cur > acc ? cur : acc
}, arrNumbers[0])
// Tạo 1 object mới và đếm số lần xuất hiện của các phần tử trong mảng ban đầu
const fruit = ['banana', 'apple', 'orange', 'watermelon']
const fruitCount = fruit.reduce((acc, cur) => {
    if (acc[cur]) 
        acc[cur]++
    else // falsy: undefined, null, 0, false, ''
        acc[cur] = 1
    return acc // return ve acc va tiep tuc gan cho acc de luu lai gia tri cua acc, tiep tuc vong lap
}, {})
// giai thich: acc = {}, nghia la object rong va cur la phan tu dau tien cua mang
console.log(fruitCount)
// Chuyển đổi các mảng thành 1 mảng duy nhất
const nestedArray = [[1, 2], [3, 4], [5, 6]]
const flatArray = nestedArray.reduce((acc, cur) => {
    return acc.concat(cur)
}, [])
console.log(flatArray)

// Ham sort
const nums = [1, 4, 3, 2]
nums.sort((a, b) => b - a) // sap xep giam dan
console.log(nums)
// Sap xep chuoi
const letters = ['a', 'c', 'b']
letters.sort()
console.log(letters)
// Sap xep doi tuong theo thuoc tinh
const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyo', age: 100 },
    { name: 'Elias', age: 22 }
]
// users.sort((a, b) => a.age - b.age)
users.sort((a, b) => { // sap xep tang dan theo do uu tien: -1, 0, 1
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
}) // neu a.age > b.age, a se dung sau b
console.log(users)

// Ánh xạ từng phần tử và và thay đổi giá trị của nó và gán vào mảng mới, không thay đổi mảng cũ
const modifiedArray = numbers.map(function(element, index, arr) {
    return element, arr
})
console.log(modifiedArray);