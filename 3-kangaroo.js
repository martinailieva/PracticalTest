const x1 = 0;
const x2 = 3;
const v1 = 4;
const v2 = 2;

function kangaroo(x1, v1, x2, v2) {
  if ((x2 - x1) * (v2 - v1) < 0) {
    return "yes";
  } else {
    return "no";
  }
}

console.log(kangaroo(x1, x2, v1, v2));
