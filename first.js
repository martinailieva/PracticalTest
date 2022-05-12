const ar = [1, 2, 3];
function simpleArraySum(ar) {
  // Write your code here
  const result = ar.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return result;
}

console.log(simpleArraySum(ar));
