// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let words = [];
  let word = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === ' ') {
      words.push(word);
      word = '';
    } else if (index === (string.length - 1)) {
      word += string[index];
      words.push(word);
      word = '';
    } else {
      word += string[index];
    }
  }
  return words;
}

// Desafio 4
function concatName(string) {
  let first = string[string.length - 1];
  let last = string[0];
  return `${first}, ${last}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestNumber(array) {
  let maior = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  return maior;
}

function highestCount(array) {
  let maior = highestNumber(array);
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maior) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((cat1 - mouse) < (cat2 - mouse)) {
    return 'cat1';
  }
  if ((cat1 - mouse) > (cat2 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
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
