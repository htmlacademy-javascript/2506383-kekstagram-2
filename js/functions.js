/**
 * Проверяет, не превышает ли длина строки заданный лимит
 * @param {string} str - Проверяемая строка
 * @param {number} [maxLength=20] - Максимально допустимая длина
 * @returns {boolean} - Результат проверки (true, если длина <= лимита)
 */
const isStringWithinLimit = (str, maxLength = 20) => str.length <= maxLength;
isStringWithinLimit('строка');

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
checkPalindrom('топот');

/**
 * Извлекает все цифры из входных данных и преобразует их в число
 * @param {any} input - Входные данные (будут преобразованы в строку)
 * @returns {number} - Число из извлечённых цифр или NaN, если цифр нет
 */
const extractNumber = (input) => {
  const digits = String(input).match(/\d+/g)?.join('') ?? '';
  return digits ? Number(digits) : NaN;
};
extractNumber('2023 год');
