// Desafio 1
function compareTrue(value1,value2) {
  if(value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }

}
// Desafio 2
function calcArea(base,height) {
  let triangleArea = (base * height)/2;
  return triangleArea;
} 

// Desafio 3
function splitSentence(string) {
  let sentenceSplit = string.split(" ");
  return sentenceSplit;
} 

// Desafio 4
function concatName(array) {
  let lastFirstArray = array[array.length-1] + ',' + array[0];
  return lastFirstArray;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
// Desafio 5
let wins = 14;
let ties = 8;

function footballPoints(wins,ties) {
  let championshipPoints = wins*3 + ties*1 ;
  return championshipPoints;
}

// Desafio 6

function highestCount([9, 1, 2, 3, 9, 5, 7]) {

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
if (mouse < cat1 && cat1 < cat2) {
return 'cat1';
} else if (mouse < cat2 && cat2 < cat1) {
  return 'cat2';
} else {
  return 'os gatos trombam e o rato foge';
}
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
}

