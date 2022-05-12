//MinMax - https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

const arr = [1, 2, 3, 4, 5];
const arr1 = [7, 69, 2, 221, 8974];

function miniMaxSum(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];
  let minValue = 0;
  let maxValue = 0;

  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }

  minValue = sum - max;
  maxValue = sum - min;
  console.log(minValue + " " + maxValue);
  return minValue + " " + maxValue;
}

console.log(miniMaxSum(arr));
