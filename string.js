// Функция для генерации всех перестановок чисел от заданного числа
function generatePermutations(num) {
  let numbers = [];
  for (let i = 0; i <= num; i += 2) {
    numbers.push(i);
  }

  let permutations = [];

  // Перебор всех перестановок чисел
  function permute(arr, start) {
    if (start === arr.length - 1) {
      permutations.push(arr.slice().join(', ')); // Добавляем текущую перестановку в массив
    } else {
      for (let i = start; i < arr.length; i++) {
        // Меняем местами текущий элемент с элементом на позиции start
        [arr[start], arr[i]] = [arr[i], arr[start]];
        // Рекурсивно генерируем перестановки начиная с позиции start + 1
        permute(arr, start + 1);
        // Возвращаем элементы в исходное положение для следующих итераций
        [arr[start], arr[i]] = [arr[i], arr[start]];
      }
    }
  }

  permute(numbers, 0); // Начинаем генерацию с позиции 0

  return permutations;
}

// Получаем все перестановки
let allPermutations = generatePermutations(10);
let stringOfNumbers = allPermutations.join(', ');

console.log(stringOfNumbers);
