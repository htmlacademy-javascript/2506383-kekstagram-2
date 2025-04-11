/**
 * Проверяет, не превышает ли длина строки заданный лимит
 * @param {string} str - Проверяемая строка
 * @param {number} [maxLength=20] - Максимально допустимая длина
 * @returns {boolean} - Результат проверки (true, если длина <= лимита)
 */
const isStringWithinLimit = (str, maxLength = 20) => str.length <= maxLength;
// Тесты длины строки
['проверяемая строка'].forEach(str =>
  [20, 18, 10].forEach(maxLength =>
    console.log(isStringWithinLimit(str, maxLength))
  )
);

/**
 * Определяет, является ли строка палиндромом
 * @param {string} str - Проверяемая строка
 * @returns {boolean} - true, если строка - палиндром, иначе false
 */
function checkPalindrom(str) {
  const normalized = str.replace(/\s/g, '').toLowerCase();
  let reverseLine = '';

  for (let i = normalized.length - 1; i >= 0; i--) {
    reverseLine += normalized[i];
  }

  return reverseLine === normalized;
}

console.log(checkPalindrom('топот')); // true
console.log(checkPalindrom('ДовОд')); // true
console.log(checkPalindrom('Кекс'));  // false
console.log(checkPalindrom('Лёша на полке клопа нашёл ')); // true


/**
 * Извлекает все цифры из входных данных и преобразует их в число
 * @param {any} input - Входные данные (будут преобразованы в строку)
 * @returns {number} - Число из извлечённых цифр или NaN, если цифр нет
 */
const extractNumber = input => {
  const digits = String(input).match(/\d+/g)?.join('') ?? '';
  return digits ? Number(digits) : NaN;
};

console.log(extractNumber('2023 год'));            // 2023
console.log(extractNumber('ECMAScript 2022'));     // 2022
console.log(extractNumber('1 кефир, 0.5 батона')); // 105
console.log(extractNumber('агент 007'));           // 7
console.log(extractNumber('а я томат'));           // NaN

console.log(extractNumber(2023)); // 2023
console.log(extractNumber(-1));   // 1
console.log(extractNumber(1.5));  // 15
