// Desafio 1
function compareTrue() {}

// Desafio 2

function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let separator = ' ';
  let message = phrase.split(separator);

  return message;
}

// Desafio 4
function concatName(listNames) {
  let aux = `${listNames.pop()}, ${listNames.shift()}`;
  return aux;
}

// Desafio 5
function footballPoints(wins, ties) {
  let aux = wins * 3 + ties * 1;
  return aux;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let msg = '';
  if (mouse - cat1 < mouse - cat2) {
    msg = 'cat1';
  } else if (cat1 - mouse === cat2 - mouse) {
    msg = 'os gatos trombam e o rato foge';
  } else msg = 'cat2';

  return msg;
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
