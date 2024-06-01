// Exercise: Level 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Sandeep', lastName = 'Kumar', country = 'India', city = 'Hyderabad', age = 25, isMarried = false, year = 2021;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// Check if type of '10' is equal to 10
console.log(typeof '10' === typeof 10); // false, no se so sanh typeof va value
console.log('10' == 10); // true, vi '10' se convert ve number va so sanh voi 10

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10); // false, vi parseInt('9.8') se convert ve 9

// Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
console.log(4 > 3); // true
console.log('4' == 4); // true
console.log('4' === 4); // false
console.log(typeof '4' == typeof 4); // false

// Write three JavaScript statement which provide falsy value.

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3
console.log(4 > 3); // true
// 4 >= 3
console.log(4 >= 3); // true
// 4 < 3
console.log(4 < 3); // false
// 4 <= 3
console.log(4 <= 3); // false
// 4 == 4
console.log(4 == 4); // true
// 4 === 4
console.log(4 === 4); // true
// 4 != 4
console.log(4 != 4); // false
// 4 !== 4
console.log(4 !== 4); // false
// 4 != '4'
console.log(4 != '4'); // false
// 4 == '4'
console.log(4 == '4'); // true
// 4 === '4'
console.log(4 === '4'); // false
// Find the length of python and jargon and make a falsy comparison statement.
console.log('python'.length > 'jargon'.length);

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12
console.log(4 > 3 && 10 < 12); // true
// 4 > 3 && 10 > 12
console.log(4 > 3 && 10 > 12); // false
// 4 > 3 || 10 < 12
console.log(4 > 3 || 10 < 12); // true
// 4 > 3 || 10 > 12
console.log(4 > 3 || 10 > 12); // true
// !(4 > 3)
console.log(!(4 > 3)); // false
// !(4 < 3)
console.log(!(4 < 3)); // true
// !(false)
console.log(!(false)); // true
// !(4 > 3 && 10 < 12)
console.log(!(4 > 3 && 10 < 12)); // false
// !(4 > 3 && 10 > 12)
console.log(!(4 > 3 && 10 > 12)); // true
// !(4 === '4')
console.log(!(4 === '4')); // true
// There is no 'on' in both dragon and python
console.log(!('dragon'.includes('on') && 'python'.includes('on')))
// Use the Date object to do the following activities
let now = new Date();

// What is the year today?
console.log(now.getFullYear());
// What is the month today as a number?
console.log(now.getMonth());
// What is the date today?
console.log(now.getDate());
// What is the day today as a number?
console.log(now.getDay());
// What is the hours now?
console.log(now.getHours());
// What is the minutes now?
console.log(now.getMinutes());
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
const secondsElapsed = Math.floor(now.getTime() / 1000); // Chuyển đổi mili giây thành giây

console.log(
  `Số giây đã trôi qua từ ngày 1 tháng 1 năm 1970 đến bây giờ: ${secondsElapsed}`
);

// Exercise: Level 2

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// Calculate the slope, x-intercept and y-intercept of y = 2x -2
// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// Compare the slope of above two questions.
// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
// If the length of your name is greater than 7 say, your name is long else say your name is short.

// Compare your first name length and your family name length and you should get this output.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// Enter number of years you live: 100
// You lived 3153600000 seconds.
// Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm