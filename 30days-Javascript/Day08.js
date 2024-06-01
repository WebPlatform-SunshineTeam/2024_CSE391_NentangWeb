const object = {
    name: "John",
    age: 30,
    city: "New York"
};
const copyObject = Object.assign({}, object);
const key = Object.keys(object)
const entries = Object.entries(object)
console.log(object.hasOwnProperty('name'))