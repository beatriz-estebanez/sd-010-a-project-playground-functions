// Desafio 10
function techList(techArray, name) {
  let resultArray = [];
  for (let index = 0; index < techArray.length; index += 1) {
    let objectList = {
      tech: techArray[index],
      nome: name,
    };
    resultArray.push(objectList);
  }
  if (techArray.length === 0) {
    objectList = 'Vazio!';
  }
  console.log(resultArray);
  return resultArray;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(str) {
  let numDrinks = str.match(/\d+/g);
  let copos = 0;
  
  for (let index = 0; index < numDrinks.length; index += 1) {
    let drinks = Number(numDrinks[index]);
    copos += drinks;
  }
  if (copos === 1) {
    return `${copos} copo de água`;
  } else {
  return `${copos} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
