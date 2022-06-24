// Desafio 11
// eslint-disable-next-line complexity
function generatePhoneNumber(numbers) {
  // seu código aqui
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let obj = {};
  for (let index = 0; index < numbers.length; index += 1) {
    let newNum = obj[numbers[index]];
    if (newNum === undefined) {
      obj[numbers[index]] = 1;
    } else {
      obj[numbers[index]] += 1;
    }
    if (obj[numbers[index]] >= 3 || numbers[index] < 0 || numbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  const sum = lineA + lineB;
  const sub = lineA - lineB;
  const abs = Math.abs(sub);
  if (lineC < sum && lineC > abs) {
    return true;
  }
  return false;
}

console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(string) {
  // seu código aqui
  const reg = /\d/g;
  const result = string.match(reg);
  let sum = 0;
  for (let value of result) {
    // eslint-disable-next-line radix
    sum += parseInt(value);
  }
  if (sum > 1) {
    return `${sum} copos de água`;
  }
  return `${sum} copo de água`;
}

console.log(hydrate('1 cerva'));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
