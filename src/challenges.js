// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === true && number2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
  // seu código aqui
}

// Desafio 3
function splitSentence(sentence) {
  let array = [];
  array = sentence.split(' ');
  return array;
}

// Desafio 4
function concatName(phrase) {
  let array = [];
  let counter = phrase.length;
  array.push(phrase[counter - 1]);
  array.push(phrase[0]);
  return array;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points = wins * 3 + ties;
  return points;
  // seu código aqui
}

function calcCount(number, arrayCalc) {
  let counter = 0;
  for (let index = 0; index < arrayCalc.length; index += 1) {
    if (arrayCalc[index] === number) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 6
function highestCount(array) {
  let high = array[0];
  for (let key in array) {
    if (array[key] > high) {
      high = array[key];
    }
  }
  return calcCount(high, array);
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = 0;
  let positionCat2 = 0;
  positionCat1 = cat1 - mouse;
  positionCat2 = cat2 - mouse;
  if (positionCat2 > positionCat1) {
    return 'cat1';
  } if (positionCat1 > positionCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
  // seu código aqui
}

function arrayFizzBuzz(array) {
  if (array % 3 === 0 && array % 5 === 0) {
    return 'fizzBuzz';
  } else if (array % 3 === 0 && array % 5 != 0) {
    return 'fizz';
  } else if (array % 3 != 0 && array % 5 === 0) {
    return 'buzz';
  } else {
    return 'bug';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let arrayfb = [];
  let array1;
  for (let key in array) {
    array1 = arrayFizzBuzz(array[key]);
    arrayfb.push(array1);
  }
  return arrayfb;
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

let names = ['foguete', 'não', 'tem', 'ré'];
for (let ke in names) {
  console.log(names[ke]);
}

console.log(compareTrue(true, false));
console.log(calcArea(51, 1));
console.log(splitSentence('go Trybe'));
console.log(concatName(names));
console.log(footballPoints(14, 8));
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(catAndMouse(3, 9, 9));
console.log(fizzBuzz([2, 15, 7, 9, 45]));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
