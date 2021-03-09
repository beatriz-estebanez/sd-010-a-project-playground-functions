// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  /**  Source: https://docs.codeclimate.com/docs/cognitive-complexity#:~:text=Cognitive%20Complexity%20is%20a%20measure,be%20to%20read%20and%20understand.
  *            https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split */
  let words = phrase.split(' ');
  return words;
}

// Desafio 4
function concatName(arr) {
  let firstName = arr[0];
  let lastName = arr[arr.length - 1];
  let names = `${lastName}, ${firstName}`;
  return names;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestNumber(arr) {
  let highest = arr[0];

  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] > highest) {
      highest = arr[index];
    }
  }
  return highest;
}

function highestCount(arr) {
  let highest = highestNumber(arr);
  let countHighest = 0;
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] === highest) {
      countHighest += 1;
    }
  }
  return countHighest;
}

// Desafio 7

function calcDistance(position1, position2) {
  let distance;
  /** Source: https://www.tutorialspoint.com/How-to-convert-a-negative-number-to-a-positive-one-in-JavaScript#:~:text=Front%20End%20Technology-,To%20convert%20a%20negative%20number%20to%20a%20positive%20one%20in,absolute%20value%20of%20a%20number. */
  if (position1 > position2) {
    distance = Math.abs(position1 - position2);
  } else {
    distance = Math.abs(position2 - position1);
  }
  return distance;
}

function catAndMouse(mouse, cat1, cat2) {
  let distanceMouseCat1 = calcDistance(mouse, cat1);
  let distanceMouseCat2 = calcDistance(mouse, cat2);
  let message;

  if (distanceMouseCat1 === distanceMouseCat2) {
    message = 'os gatos trombam e o rato foge';
  } else if (distanceMouseCat1 < distanceMouseCat2) {
    message = 'cat1';
  } else {
    message = 'cat2';
  }
  return message;
}

// Desafio 8
function dividers(number) {
  let dividersArray = [];
  for (let index = 1; index <= number; index += 1) {
    if (number % index === 0) {
      dividersArray.push(index);
    }
  }
  return dividersArray;
}

function checkFizz(hasDivider3) {
  let isFizz = false;
  if (hasDivider3) {
    isFizz = true;
  }
  return isFizz;
}

function checkBuzz(hasDivider5) {
  let isBuzz = false;
  if (hasDivider5) {
    isBuzz = true;
  }
  return isBuzz;
}

function checkDivider3(dividersArray) {
  let divider3 = false;

  for (let index = 0; index < dividersArray.length; index += 1) {
    if (dividersArray[index] === 3) {
      divider3 = true;
    }
  }
  return divider3;
}

function checkDivider5(dividersArray) {
  let divider5 = false;

  for (let index = 0; index < dividersArray.length; index += 1) {
    if (dividersArray[index] === 5) {
      divider5 = true;
    }
  }
  return divider5;
}

function checkBug(hasDivider3, hasDivider5) {
  let isBug = false;

  if (!hasDivider3 && !hasDivider5) {
    isBug = true;
  }
  return isBug;
}

function fizzBuzzResult(dividersArray) {
  switch (true) {
  case checkBug(checkDivider3(dividersArray), checkDivider5(dividersArray)):
    return 'bug!';
  case checkFizz(checkDivider3(dividersArray) && checkDivider5(dividersArray)):
    return 'fizzBuzz';
  case checkBuzz(checkDivider5(dividersArray)):
    return 'buzz';
  case checkFizz(checkDivider3(dividersArray)):
    return 'fizz';
  default:
    console.log('Something went wrong!');
  }
}

function fizzBuzz(numbersArray) {
  let fizzBuzzArray = [];
  let word = '';

  for (let index = 0; index < numbersArray.length; index += 1) {
    let dividersArray = dividers(numbersArray[index]);

    word = fizzBuzzResult(dividersArray);
    fizzBuzzArray.push(word);
  }
  return fizzBuzzArray;
}

// Desafio 9
function findVowel(char) {
  switch (char) {
  case 'a':
    return '1';
  case 'e':
    return '2';
  case 'i':
    return '3';
  case 'o':
    return '4';
  case 'u':
    return '5';
  default:
    return char;
  }
}

function findNumber(char) {
  switch (char) {
  case '1':
    return 'a';
  case '2':
    return 'e';
  case '3':
    return 'i';
  case '4':
    return 'o';
  case '5':
    return 'u';
  default:
    return char;
  }
}

function encode(phrase) {
  let encodedPhrase = phrase;
  for (let index = 0; index < encodedPhrase.length; index += 1) {
  /** Source: https://www.w3schools.com/js/js_string_methods.asp */
    encodedPhrase = encodedPhrase.replace(encodedPhrase[index], findVowel(encodedPhrase[index]));
  }
  return encodedPhrase;
}

function decode(phrase) {
  let encodedPhrase = phrase;
  for (let index = 0; index < encodedPhrase.length; index += 1) {
  /** Source: https://www.w3schools.com/js/js_string_methods.asp */
    encodedPhrase = encodedPhrase.replace(encodedPhrase[index], findNumber(encodedPhrase[index]));
  }
  return encodedPhrase;
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
