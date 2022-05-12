// Diagonal Difference - https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true

//Works placed in the site, doesn't work here for some reason

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function diagonalDifference(arr) {
  let sumDiagonals = { main: 0, second: 0 },
    matrixLength = arr.length;

  for (let i = 0; i < matrixLength; i++) {
    sumDiagonals.main += arr[i][i];
    sumDiagonals.second += arr[i][matrixLength - i - 1];
  }
  const { main, second } = sumDiagonals;
  return Math.abs(main - second);
}

console.log(diagonalDifference(arr));
