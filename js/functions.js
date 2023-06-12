// Функция для проверки длины строки

const checkingLength = (line, numbers) => {
  const result = (line.length <= numbers);
  return result;
};
checkingLength('проверяемая строка', 20);
checkingLength('проверяемая строка', 18);
checkingLength('проверяемая строка', 10);

// Функция для проверки палиндрома

const checkingPalindrome = (line) => {
  line = line.toString().toLowerCase().replace(/\s|[,.?!"/-]/g, ''); // приравниваем к нижнему регистру, используем regEx: находим все пробелы и заменяем их. Для чисел используем метод toString.
  return line === line.split('').reverse().join(''); // делим слово по-символьно и меняем местасми

};
checkingPalindrome(12321);
