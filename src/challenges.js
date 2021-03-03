// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  }else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ( (base * height) / 2)
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ')
}

// Desafio 4
function concatName(stringsArray) {
  let outputString = ''

  outputString = `${stringsArray[stringsArray.length - 1]} ${stringsArray[0]}`

  return outputString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties

  return totalPoints;
}

// Desafio 6
function highestCount(numbersArray) {
  let highNumber = 0;
  let highNumberCount = 0;

  for (let index = 0 ; index < numbersArray.length ; index += 1){
    if (numbersArray[index] > highNumber) {
      highNumber = numbersArray[index];
    }
  }

  numbersArray.map((number) => {
    if (highNumber == number) {
      highNumberCount += 1;
    }
  })

  return highNumberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceFirstCat = Math.abs(mouse - cat1);
  let distanceSecondCat = Math.abs(mouse - cat2);

  if (distanceFirstCat > distanceSecondCat) {
    return 'cat2';
  } else if (distanceFirstCat < distanceSecondCat) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbersArrayFizzBuzz) {
  let fizzBuzzStringArray = [];

  numbersArrayFizzBuzz.map((num) => {
    if ( (num % 3) == 0 && (num % 5) == 0 ) {
      fizzBuzzStringArray.push('fizzBuzz');
    } else if ( (num % 3) == 0 ) {
      fizzBuzzStringArray.push('fizz');
    } else if ( (num % 5) == 0 ) {
      fizzBuzzStringArray.push('buzz');
    } else {
      fizzBuzzStringArray.push('bug!')
    }
  })

  return fizzBuzzStringArray;
}

// Desafio 9
function encode(encodeStringParam) {
  function encodeLetter(letter) {
    switch (letter) {
      case 'a': 
        return '1'
      case 'e': 
        return '2'
      case 'i': 
        return '3'
      case 'o': 
        return '4'
      case 'u': 
        return '5'
      default:
        return letter
    }
  }

  let encodedString = encodeStringParam.split(' ').map((item) => {
    return item.split('').map(encodeLetter).join('')
  }).join(' ');

  return encodedString;
}

function decode(decodeStringParam) {
  function decodeNumber(number) {
    switch (number) {
      case '1': 
        return 'a'
      case '2': 
        return 'e'
      case '3': 
        return 'i'
      case '4': 
        return 'o'
      case '5': 
        return 'u'
      default:
        return number
    }
  }

  let decodedString = decodeStringParam.split(' ').map((item) => {
    return item.split('').map(decodeNumber).join('')
  }).join(' ');

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
