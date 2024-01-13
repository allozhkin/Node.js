"use strict";

function findAverage(array) {
  const average = array.reduce((value, acc) => value + acc) / array.length;
  return `В массиве ${array}:
  Среднее число равно: ${average}`;
}

function findMaxValue(array) {
  let acc = 0;
  array.forEach((element) => {
    if (element > acc) {
      acc = element;
    }
  });
  return `В массиве ${array}:
  Максимальное число равно: ${acc}`;
}

function findMinValue(array) {
  let acc = Infinity;
  array.forEach((element) => {
    if (element < acc) {
      acc = element;
    }
  });
  return `В массиве ${array}:
  Минимальное число равно: ${acc}`;
}

function findSumArray(array) {
  const sum = array.reduce((a, b) => a + b);
  return `В массиве ${array}:
  Сумма всех чисел ровна: ${sum}`;
}
module.exports = { findAverage, findMaxValue, findMinValue, findSumArray };
