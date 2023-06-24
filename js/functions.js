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

// Задачка про рабочий день

const createTimeMinutes = (time) => {
  const sample = time.split(':');
  const hours = parseInt(sample[0], 10);
  const minutes = parseInt(sample[1], 10);
  return (hours * 60) + minutes;
};
const createWorkTime = (startWork, endWork, startMeeting, duration) => {
  const startDay = createTimeMinutes(startWork);
  const endDay = createTimeMinutes(endWork);
  const meeting = createTimeMinutes(startMeeting);
  const timeLeft = endDay - meeting;

  if (timeLeft >= duration && meeting >= startDay) {
    return true;
  }
  return false;
};
createWorkTime('08:00', '17:30', '14:00', 90);
