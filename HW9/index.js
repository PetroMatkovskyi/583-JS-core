// task 1

let arr = ['Tom', 'Sam', 'Ray', 'Bob'];
let [x, y, , ...z] = arr;

console.log('Task 1');
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

// task 2

let data = {
  names: ['Sam', 'Tom', 'Ray', 'Bob'],
  ages: [20, 24, 22, 26],
};
let {
  names: [name1, name2, name3, name4],
  ages: [age1, age2, age3, age4],
} = data;

console.log('Task 2');
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

// task 3

const mul = (...rest) => {
  let multi = 0;
  for (let param of rest) {
    if (typeof param === 'number') {
      multi == 0 ? (multi = param) : (multi *= param);
    }
  }
  return multi ? multi : multi;
};
console.log('Task 3');
console.log(mul(1, 'str', 2, 3, true)); // 6
console.log(mul(null, 'str', false, true)); // 0

// task 4

let server = {
  data: 0,

  convertToString: function (callback) {
    callback(() => {
      return this.data + '';
    });
  },
};

let client = {
  server: server,
  result: '',

  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },

  notification: function () {
    return (callback) => {
      this.result = callback();
    };
  },
};

client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

// task 5

function mapBuilder(keysArray, valuesArray) {
  let map = new Map();

  if (keysArray.length === valuesArray.length) {
    console.log(keysArray.length === valuesArray.length);
    for (let i = 0; i < keysArray.length; i++) {
      map.set(keysArray[i], valuesArray[i]);
    }
    return map;
  } else {
    console.log('Arrays are not equal');
  }
}

let keys = [1, 2, 3, 4];
let values = ['div', 'span', 'b', 'i'];
let map = mapBuilder(keys, values);

console.log('Task 5');
console.log(map.size); // 4
console.log(map.get(2)); // "span"
