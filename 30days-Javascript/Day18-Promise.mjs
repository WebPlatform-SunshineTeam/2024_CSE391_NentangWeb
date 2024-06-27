import fetch from 'node-fetch'

let promise = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 3) 
        resolve('Success')
    else
        reject('Failed')
})
promise
    .then(value => {
        console.log(value)
    })
    .catch(error => {
        console.log(error)
    })

// Fetch API
// const url = 'https://restcountries.com/v2/all' // countries api
// fetch(url) 
//     .then(response => response.json()) // accessing the API data as JSON
//     .then(data => {
//         // get the data
//         console.log(data)
//     })
//     .catch(error => console.log(error)) // handling error

// Async and Await
const square = async function(n) {
  // async se tra ve 1 loi hua
  return n * n;
};

// Tạo một hàm async để sử dụng await
const calculateSquare = async function() {
  const value = await square(2);
  console.log(value);
};

calculateSquare();

// Promise and Async and Await with Fetch API
// promise
// const url = 'https://restcountries.com/v2/all'
// fetch(url) 
//     .then(response => response.json()) // chuyen doi du lieu duoc phan hoi thanh javascript object
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => console.log(error))

// // async and await
// const fetchData = async function() {
//     try {
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log(data)
//     }
//     catch {
//         console.log(error)
//     }
// }
// console.log('------------ async and await ------------')
// fetchData()

// Exercise
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Exercise Level 1
// 1. Read the countries API using fetch and print the name of country, capital, languages, population and area.
// fetch(countriesAPI)
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(country => {
//             console.log(country.name, country.capital, country.languagues, country.population, country.area)
//         })
//     })
//     .catch(error => console.log(error))

// Exercise Level 2
// 1. Print out all the cat names in to catNames variable.
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        let catNames = []
        data.forEach(cat => catNames.push(cat.name))
        console.log(catNames)
    })
    .catch(error => console.log(error))