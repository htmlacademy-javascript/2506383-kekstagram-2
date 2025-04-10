function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

console.log(checkStringLength('проверяемая строка', 20));
console.log(checkStringLength('проверяемая строка', 18));
console.log(checkStringLength('проверяемая строка', 10));

function checkPalindrom(str) {
  const normalized = str.replaceAll(' ', '').toLowerCase();
  let reverseLine = '';

  for (let i = normalized.length - 1; i >= 0; i--) {
    reverseLine += normalized[i];
  }

  return reverseLine === normalized;
}

console.log(checkPalindrom('топот'));
console.log(checkPalindrom('ДовОд'));
console.log(checkPalindrom('Кекс'));
console.log(checkPalindrom('Лёша на полке клопа нашёл '));

function getNumberFromString(input) {
  let str = input.toString();
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let symbol = str[i];

    if (symbol >= '0' && symbol <= '9') {
      result += symbol;
    }
  }
  if(result.length === 0) {
    return NaN;
  } else {
    return Number(result);
  }


}

