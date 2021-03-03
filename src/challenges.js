// Desafio 1
function compareTrue(values1, values2) {
  // seu código aqui
  if (values1 === true && values2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let result;
  result = (base * height) / 2;
  return result;
}

// Desafio 3
// pesquisei sobre o método no site https://www.w3schools.com/jsref/jsref_split.asp
function splitSentence(phrase) {
  // seu código aqui
  let phraseArray = [];
  phraseArray = phrase.split(' ');
  return phraseArray;
}

// Desafio 4
// Pesquisei sobre como pegar o último valor de um vetor aqui: https://pt.stackoverflow.com/questions/87416/como-retornar-o-%C3%BAltimo-registro-de-um-array-com-javascript-ou-jquery
// E sobre o método que concatena strings, pesquisei aqui: https://www.w3schools.com/jsref/jsref_concat_string.asp
function concatName(names) {
  // seu código aqui
  let arrayNames = [];
  arrayNames = names;
  let lastName = arrayNames[arrayNames.length - 1];
  let firstName = arrayNames[0];
  return lastName.concat(`, ${ firstName }`);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winsPoints = (wins * 3);
  let tiesPoints = (ties * 1);
  let score = (winsPoints + tiesPoints);
  return score;
}

// Desafio 6
// Pesquisei como função retornaria a quantidade de vezes que ele aparece no vetor no canal AlgoritmosAZ
// Link: https://youtu.be/pkJXwPvselI
function higherNumber(array) {
  let maior = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  return maior;
}

function contNumber(array, higher) {
  let cont = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === higher) {
      cont += 1;
    }
  }
  return cont;
}

function highestCount(array) {
  // seu código aqui
  let higher = higherNumber(array);
  let cont = contNumber(array, higher);
  return cont;
}

// Desafio 7
// A Função Math.abs pesquisei aqui: https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/math/abs
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  let win;

  if (distanciaCat1 > distanciaCat2) {
    win = 'cat2';
    return win;
  } if (distanciaCat2 > distanciaCat1) {
    win = 'cat1';
    return win;
  }
  return "os gatos trombam e o rato foge";
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
