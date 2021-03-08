// Desafio 1

function compareTrue(n1, n2) {
  if (n1 === true && n2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
// usado material base para entendimento da solução https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(arrayselect) {
  return arrayselect[arrayselect.length - 1] + ', ' + arrayselect[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
// 1. Achar o maior numero do array
// 2. contar a quantidade de vezes que ele aparece no array
function highestCount(arraynumber) {
  let maior = 0; 
  let cont = 0;

  for (let index = 0; index < arraynumber.length; index += 1){
    if (arraynumber[index] > maior) {
      maior = arraynumber[index]
    };
  }
  for (let index = 0; index < arraynumber.length; index += 1) {
    if (arraynumber[index] === maior) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let huntingrats;
  if ((Math.abs(cat1 - mouse)) === (Math.abs(cat2 - mouse))) {
  huntingrats = "os gatos trombam e o rato foge";
  }
  if ((Math.abs(cat1 - mouse)) < (Math.abs(cat2 - mouse))) {
  huntingrats = "cat1";
  }
  if ((Math.abs(cat1 - mouse)) < (Math.abs(cat2 - mouse))) {
  huntingrats = "cat1";
  }
  return huntingrats; 
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
