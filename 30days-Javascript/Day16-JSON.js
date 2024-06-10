// let users = {
//     name: 'John',
//     age: 30,
//     school: 'XYZ'
// }
// // let userJSON = JSON.stringify(users)
// console.log(userJSON)
// let userData = JSON.parse(userJSON)
// console.log(userData)

const user = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  country: "Finland",
  city: "Helsinki",
  email: "alex@alex.com",
  skills: ["HTML", "CSS", "JavaScript", "React", "Python"],
  age: 250,
  isLoggedIn: false,
  points: 30
};

const txt1 = JSON.stringify(user, ["firstName", "lastName", "country", "city"], 4); // nhung thuoc tinh muon lay, 4 la so luong space 
console.log(txt1)

// Exercises 
const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"]
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;
//Level 1    
// 1. Change skills array to JSON using JSON.stringify()
console.log(JSON.stringify(skills, undefined, 4))
// 2. Stringify the age variable
console.log(JSON.stringify(age))
// 3. Stringify the isMarried variable
console.log(JSON.stringify(isMarried)) 
// 4. Stringify the student object
console.log(JSON.stringify(student, undefined, 4))
//Level 2
// 1. Stringify the students object with only firstName, lastName and skills properties
console.log(JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4))
//Level 3
// 1. Parse the txt JSON to object.
console.log(JSON.parse(txt))
// 2. Find the the user who has many skills from the variable stored in txt.
let users = JSON.parse(txt)
for (let user in users) {
    // if (user['skills'].length > 5)
        console.log(user)
}