// // task 1

function calcRectangleArea(a, b) {
    if (!(a > 0) || !(b > 0)) {
        throw new Error('Incorrectly entered data');
    } else {
        let c = a * b;
        console.log(`Task 1
Area rectangle: ${c};`);
    }
}

let width = prompt('Enter the width of the rectangle', '');
let heigth = prompt('Enter the height of the rectangle', '');

try {
    calcRectangleArea(width, heigth);
} catch (error) {
    console.log(error.message);
}

// task 2

function checkAge() {
    let userAge = prompt('Enter your age', '');
    if (!userAge) {
        throw new Error('The field is empty! Please enter your age');
    } else if (!(userAge > 0)) {
        throw new Error('Incorrectly entered data');
    } else if (userAge < 14) {
        throw new Error('You are not an adult');
    } else {
        alert('Glad to welcome you');
    }
}

try {
    checkAge();
} catch (error) {
    alert(`${error.name}: ${error.message};`);
}

// task 3

class MonthException {
    constructor(message) {
        this.name = 'MonthException';
        this.message = message;
    }
}

function showMonthName(month) {
    const allMonth = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    if (allMonth[month - 1]) {
        return allMonth[month - 1];
    } else {
        throw new MonthException('Incorrect month number');
    }
    s;
}

try {
    console.log(showMonthName(5));
    console.log(showMonthName(14));
} catch (error) {
    console.log(`${error.name}: ${error.message};`);
}

// task 4

function showUsers(array) {
    const obj = {
        correctId: [],
        inCorrectId: [],
    };

    for (let id in array) {
        // console.log(obj.inCorrectId)
        if (array[id] < 0) {
            obj.inCorrectId.push(array[id]);
        } else {
            obj.correctId.push({ id: array[id] });
        }
    }
    try {
        if (obj.inCorrectId.length) {
            throw new Error(`ID must not be negative: ${obj.inCorrectId.join(' , ')}`);
        }
    } catch (error) {
        console.log(`${error.name}: ${error.message}`);
    } finally {
        return obj.correctId;
    }
}

console.log(showUsers([7, -12, 44, 22]));