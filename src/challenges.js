// Desafio 1
function compareTrue(a, b) {
  return a === true && b === true;
}
 
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2; 
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  let greatest = array[0];
  let times = 0;
  for (let index in array)
  { if (array[index] > greatest)
  { 
    greatest = array[index] 
  }; 
}
  for (let index in array)
  { if (array[index] === greatest)
{ times += 1 };
}
  return times;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = cat1 - mouse;
  let distance2 = cat2 - mouse
  if (distance1 < 0)
  { 
    distance1 = distance1 * -1 
  }
  if (distance2 < 0)
  { distance2 = distance2 * -1 };
  if ( distance2 === distance1)
  {
    return 'os gatos trombam e o rato foge'
  }
  else if (distance1 < distance2)
  {
    return 'cat1'
  }
  else {
    return 'cat2'
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
};
