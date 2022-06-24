/* eslint-disable complexity */
/* eslint-disable sonarjs/cognitive-complexity */
// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  let result = 0;
  if (param1 === true && param2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = string.split(' ');
  return array;
}

console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  // seu código aqui
  let concat = `${array[array.length - 1]}, ${array[0]}`;
  return concat;
}

console.log(concatName(['captain', 'my', 'captain', 'rato']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = (wins * 3) + (ties * 1);
  return points;
}

console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let highest = Math.max.apply(null, array);
  let count = 0;
  for (let index of array) {
    if (index === highest) {
      count += 1;
    }
  }
  return count;
}

console.log(highestCount([0, 0, 0]));

// Desafio 7
// eslint-disable-next-line max-lines-per-function
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;
  let result;
  if (distanceCat1 < 0) {
    distanceCat1 = Math.abs(distanceCat1);
  }
  if (distanceCat2 < 0) {
    distanceCat2 = Math.abs(distanceCat2);
  }

  if (distanceCat1 > distanceCat2) {
    result = 'cat2';
  } else if (distanceCat1 < distanceCat2) {
    result = 'cat1';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

console.log(catAndMouse(6, 8, 4));

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(numbers) {
  // seu código aqui
  let words = [];
  for (let index of numbers) {
    if (index % 3 === 0 && index % 5 !== 0) {
      words.push('fizz');
    } else if (index % 5 === 0 && index % 3 !== 0) {
      words.push('buzz');
    } else if (index % 3 === 0 && index % 5 === 0) {
      words.push('fizzBuzz');
    } else if (index % 5 !== 0 && index % 3 !== 0) {
      words.push('bug!');
    }
  }
  return words;
}

console.log(fizzBuzz([9, 25]));

// Desafio 9
// eslint-disable-next-line max-lines-per-function
function encode(phrase) {
  // seu código aqui
  let vogals = phrase.split('');
  for (let index = 0; index < vogals.length; index += 1) {
    if (vogals[index] === 'a') {
      vogals.splice(index, 1, 1);
    } else if (vogals[index] === 'e') {
      vogals.splice(index, 1, 2);
    } else if (vogals[index] === 'i') {
      vogals.splice(index, 1, 3);
    } else if (vogals[index] === 'o') {
      vogals.splice(index, 1, 4);
    } else if (vogals[index] === 'u') {
      vogals.splice(index, 1, 5);
    }
  }
  let string = vogals.toString();
  let result = string.replace(/,/g, '');
  return result;
}

console.log(encode('How are you today?'));

function decode(code) {
  // seu código aqui
  let numbers = code.split('');
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === '1') {
      numbers.splice(index, 1, 'a');
    } else if (numbers[index] === '2') {
      numbers.splice(index, 1, 'e');
    } else if (numbers[index] === '3') {
      numbers.splice(index, 1, 'i');
    } else if (numbers[index] === '4') {
      numbers.splice(index, 1, 'o');
    } else if (numbers[index] === '5') {
      numbers.splice(index, 1, 'u');
    }
  }
  let number = numbers.toString();
  let result2 = number.replace(/,/g, '');
  return result2;
}

console.log(decode(encode('How are you today?')));

// Desafio 10
function techList(arr, string) {
  // seu código aqui
  let object = [];
  let result;
  arr.sort();
  if (arr.length === 0) {
    return 'Vazio!';
  }
    for (let index of arr) {
    object.push({
      tech: index,
      name: string,
    });
    result = object;
  }
  return result;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

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
  techList,
};
