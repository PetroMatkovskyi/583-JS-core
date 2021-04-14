// task1

let openTab = window.open(
  'https://www.w3schools.com',
  'w3schools',
  'width=300,height=300'
);

setTimeout(() => {
  openTab.resizeTo(500, 500);
}, 2000);

// task 2

const button = document.getElementById('change_button');
const text = document.getElementById('text');

button.addEventListener('click', changeCSS);

function changeCSS() {
  text.style.color = 'orange';
  text.style.fontSize = '20px';
  text.style.fontFamily = 'Comic Sans MS';
}

// task 3

const task3 = document.getElementById('task3');
const buttonBlue = document.getElementById('blue');
const buttonPink = document.getElementById('pink');
const buttonBrown = document.getElementById('brown');
const yellow = document.getElementById('yellow');

buttonBlue.addEventListener('click', () => {
  task3.style.background = 'blue';
});

buttonPink.addEventListener('dblclick', () => {
  task3.style.background = 'pink';
});

buttonBrown.addEventListener('mousedown', () => {
  task3.style.background = 'brown';
});

buttonBrown.addEventListener('click', () => {
  task3.style.background = 'white';
});

yellow.addEventListener('mouseenter', () => {
  task3.style.background = 'yellow';
});

yellow.addEventListener('mouseleave', () => {
  task3.style.background = 'white';
});

// task 4

const list = document.getElementById('list');
const deleteButton = document.getElementById('delete');

deleteButton.addEventListener('click', () => {
  let toRemove = list.value;
  for (let i of list.options) {
    if (i.value === toRemove) {
      i.remove();
    }
  }
});

// task 5

const liveButton = document.getElementById('live_button');
const liveText = document.getElementById('live_text');

liveButton.addEventListener('mousedown', (event) => {
  liveText.innerHTML = 'I was pressed!';
});

liveButton.addEventListener('mouseenter', () => {
  liveText.innerHTML = 'Mouse on me!';
});

liveButton.addEventListener('mouseleave', () => {
  liveText.innerHTML = 'Mouse is not on me!';
});

// task 6
const paramWindow = document.getElementById('window');

window.addEventListener('resize', () => {
  paramWindow.innerHTML = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
});

// task 7

const listCountry = {
  usa: ['New-York', 'Washington', 'Boston', 'Chikago'],
  ger: ['Berlin', 'Gersthofen', 'Aurich', 'Coburg '],
  ukr: ['Lviv', 'Kyiv', 'Odessa', 'Kharkiv'],
};
const country = document.getElementById('country');
const cities = document.getElementById('cities');
const select = document.getElementById('select');
const task7 = document.getElementById('task7');

function changeCities() {
  let count = 1;
  let str = '';
  for (let i of listCountry[country.value]) {
    str += `<option value=${count}>${i}</option>`;
    count++;
  }
  cities.innerHTML = str;
}

function outputSelected() {
  select.innerHTML = `
    ${country.options[country.selectedIndex].innerHTML},  ${
    cities.options[cities.selectedIndex].innerHTML
  }`;
}

document.addEventListener('DOMContentLoaded', () => {
  changeCities();
  outputSelected();
});
country.addEventListener('change', changeCities);
task7.addEventListener('change', outputSelected);
