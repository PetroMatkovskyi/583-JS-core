// task 1

function upperCase(str) {
  const reg = /^[A-Z]/;

  return reg.test(str)
    ? "String's starts with uppercase character"
    : "String's not starts with uppercase character ";
}
console.log('Task1', upperCase('regexp'));
console.log('Task1', upperCase('Regexp'));

// task 2

function checkEmail(str) {
  const reg = /^\w+@\w+/;

  return reg.test(str);
}
console.log('Task2', checkEmail('Qmail2@gmail.com'));

// task 3 ???

function findDB(str) {
  const reg = /db{0,}d?/gi;

  return str.match(reg);
}

console.log('Task3', findDB('cdbBdbsbz'));

// task 4

function reverseStr(str) {
  const reg = /\w+/g;

  return str.match(reg).reverse().join(', ');
}

console.log('Task4', reverseStr('Java Script'));

// task 5

function checkNumBankCard(num) {
  const reg = /^(\d{4}-){3}\d{4}$/;
  return reg.test(num);
}

console.log('Task5', checkNumBankCard('9999-9999-9999-9999'));

// task 6!!

function checkValidEmail(str) {
  const reg = /^[A-Za-z0-9]+\w+([-\.]?\w+)*@\w+(([-\.]\w+)*\w+)$/;
  return reg.test(str) ? 'Email is correct!' : 'Email is not correct!';
}

console.log('Task6', checkValidEmail('my-mail@gm-ail.com'));
console.log('Task6', checkValidEmail('#my_mail@gmail.com'));

// task 7!!

function checkLogin(str) {
  const reg = /^[A-Za-z][^\W][A-Za-z\d\.?]{2,7}$/;
  const reg2 = /(\d(?:\.\d+)|\d)/g;
  console.log(reg.test(str));
  console.log(str.match(reg2));
}
checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');
