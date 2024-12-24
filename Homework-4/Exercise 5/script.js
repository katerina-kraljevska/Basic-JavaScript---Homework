let arr = [3, 5, 6, 8, 11];
function maxAndMin(arr) {
  let max = -Infinity;
  let min = Infinity;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  let sum = max + min;
  return `Max: ${max} Min: ${min} Sum:${sum}`;
}

console.log(maxAndMin(arr));
