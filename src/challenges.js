// Desafio 1
function compareTrue(bool01, bool02) {
  if (bool01 === true && bool02 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string01) {
  let sentenceArray = [];
  sentenceArray = string01.split(' ');
  return sentenceArray;
}

// Desafio 4
function concatName(arrayString) {
  let arrayResult = `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
  return arrayResult.toString();
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(arrayNumbers) {
  let countNumber = 0;
  let hightestNumber = arrayNumbers.reduce((a, b) => Math.max(a, b));

  for (let index in arrayNumbers) {
    if (arrayNumbers[index] === hightestNumber) {
      countNumber += 1;
    }
  }

  return countNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  }
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  }
  return 'Valores inválidos';
}

// Desafio 8
function Div3(number) {
  let div3 = number % 3 === 0 ? true : false;
  return div3;
}
function Div5(number) {
  let div5 = number % 5 === 0 ? true : false;
  return div5;
}

function phrase(number) {
  let div3 = Div3(number);
  let div5 = Div5(number);
  
  if (div3 === true && div5 === true) {
    return 'fizzBuzz';
  } 
  if (div3 === true) {
    return 'fizz';
  } 
  if (div5 === true) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(arrayN8) {
  for (let index in arrayN8) {
    arrayN8[index] = phrase(arrayN8[index]);
  }
  return arrayN8;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function convert(stringX) {
}

function encode(stringIn) {
  let encodedString = stringIn;
  for (let indexIn in stringIn) {
    encodedString[indexIn] = convert(stringIn[indexIn]);
  }
  return encodedString;
}

function decode(stringOut) {
  let decodedString = stringOut;

  for (let indexDec in decodedString) {
    decodedString[indexDec] = convert(stringIn[indexDec])
  }
  return decodedString;
}

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
