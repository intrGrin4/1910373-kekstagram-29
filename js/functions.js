// Функция для проверки длины строки

const checkLengthString = (string, number) => string.length <= number;
checkLengthString('проверяемая строка', 20);
checkLengthString('проверяемая строка', 18);
checkLengthString('проверяемая строка', 10);

// Функция для проверки палиндрома

const checkPalindromeString = (string) => {
  string = string.toString().toLowerCase().replaceAll(' ', ''); // приравниваем к строке, к нижнему регистру, заменяем все пробелы
  return string === string.split('').reverse().join(''); // преобразуем в массив, делим слово по-символьно, меняем местасми и преобразуем в строку
};
checkPalindromeString(12321);

//Функция проверяет есть ли числа в строке

const checkExtractDigits = (number) => {
  const result = number.replace(/[^0-9]/g, '');
  return parseInt(result, 10);
};
checkExtractDigits('кефир, батона');
