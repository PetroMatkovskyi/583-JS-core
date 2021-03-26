// task 1

const x = 1;
const y = 2;
const res1 = '' + x + y;

console.log(res1);
console.log(typeof res1);

const res2 = '' + !!x + y;

console.log(res2);
console.log(typeof res2);

const res3 = x < y;

console.log(res3);
console.log(typeof res3);

const res4 = (!x + '') * y;

console.log(res4);
console.log(typeof res4);

// task 2

let userNumber = prompt('Enter the number', '');

(userNumber > 0 && userNumber % 2 === 0) ? console.log(true): console.log(false);

(userNumber % 7 === 0) ? console.log(true): console.log(false);

//task 3 

const array = [];

array.push(123, 'String', true, null);

document.write(`
<h2>Task 3</h2>
<p>Array length: ${array.length};</p>
`);

let userEnter = prompt('Enter anything', '');

array[4] = userEnter;

document.write(`
<p>The fifth element of the array: ${array[4]};</p>
`);

array.unshift();

document.write(`
<p>Array: ${array};</p>
`);

// task 4

let cities = ["Rome", "Lviv", "Warsaw"];
let mergedArray = cities.join('*');

document.write(`
<h2>Task 4</h2>
<p>Merged array: '${mergedArray}';</p>
`);

// task 5

let isAdult = prompt('Your age:', '');

if (isAdult >= 18) {
    document.write(`
<h2>Task 5</h2>
<p>Status: 'You are an adult';</p>
`)
} else {
    document.write(`
<h2>Task 5</h2>
<p>Status: 'You are not an adult';</p>
`)
};

//task 6

let firstSide = prompt('Enter the length of the first side of the triangle', '');
let secondSide = prompt('Enter the length of the second side of the triangle', '');
let thirdSide = prompt('Enter the length of the third side of the triangle', '');

function area(a, b, c) {
    let halfPerimeter = (a + b + c) / 2;
    let area = Math.sqrt(halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c));
    console.log(area.toFixed(3));
    if (a ** 2 === b ** 2 + c ** 2 || b ** 2 === a ** 2 + c ** 2 || c ** 2 === b ** 2 + a ** 2) {
        console.log(true)
    } else { console.log(false) }
};


if (firstSide > 0 && secondSide > 0 && thirdSide > 0) {
    area(firstSide, secondSide, thirdSide)
} else { console.log('Incorrect data') };

// task 7

const dateNow = new Date;
const hourNow = dateNow.getHours();

if (hourNow < 11 && hourNow >= 5) {
    console.log('Good morning')
} else if (hourNow < 17 && hourNow >= 11) {
    console.log('Good day')
} else if (hourNow < 23 && hourNow >= 17) {
    console.log('Good evening')
} else {
    console.log('Good night')
}

switch (hourNow) {
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log('Good morning');
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
        console.log('Good day');
        break;
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 22:
    case 22:
        console.log('Good evening');
        break;
    default:
        console.log('Good night');
}