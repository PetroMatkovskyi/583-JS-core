// task 2

const surname = 'Matkovskyi';
console.log(surname);


// task 3 

const course = 'JS core';
let group = '583';
document.write(`<h2>Task 3</h2>
<p>course: ${course}; group: ${group}.</p>`);
group = course;
document.write(`<p>course: ${course}; groupe: ${group}.</p>`);


//  task 4

const primitiveDataTypes = {
    string: 'String',
    number: 2021,
    booleam: true,
    undefined: undefined,
    null: null
};


// task 5 

let isAdult = confirm("Are you an adult?");
console.log(isAdult);


// task 6 

const myName = 'Petro';
const mySurname = 'Matkovskyi';
const myGroup = 'JS core 583';
const yearOfBirth = 1996;
const maritalStatus = false;

typeof myName;
typeof mySurname;
typeof myGroup;
typeof yearOfBirth;
typeof maritalStatus;

console.log(yearOfBirth, maritalStatus, myName, mySurname, myGroup);

const numberOfPoultry = null;
let numberOfPets;

console.log(typeof numberOfPoultry, typeof numberOfPets);


// task 7

let userName = prompt('Your name', 'User');
let userEmail = prompt('Your email', 'useremail@gmail.com');
let userPassword = prompt('Your password', 'password');

alert(`Dear ${userName}, your email is ${userEmail}, your password is ${userPassword}`);


// task 8
const secondsPerMinute = 60;
const secondsPerHour = secondsPerMinute * 60;
const secondsPerDay = secondsPerHour * 24;
const secondsPerMonth = secondsPerDay * 30;

document.write(`<h2>Task 8</h2>
<p>second per minute: ${secondsPerMinute}sec;<br>
seconds per hour: ${secondsPerHour}sec;<br> 
seconds per day: ${secondsPerDay}sec;<br>
seconds per month: ${secondsPerMonth}sec</p>
`)