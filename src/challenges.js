// Desafio 1
function compareTrue(bool1, bool2) {
  return (bool1 && bool2);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return (string.split(' '));
}

// Desafio 4
function concatName(arrayOfStrings) {
  let lastString = arrayOfStrings[arrayOfStrings.length - 1];
  let firstString = arrayOfStrings[0];
  return (`${lastString}, ${firstString}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins + ties);
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
};
