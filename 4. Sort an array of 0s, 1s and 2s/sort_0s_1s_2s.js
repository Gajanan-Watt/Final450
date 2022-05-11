let arr = [2, 1, 0, 2, 1, 0, 2, 0, 1, 1, 1, 1, 1];

function sort012(arr) {
  let lo = 0;
  let mid = 0;
  let hi = arr.length - 1;
  while (mid <= hi) {
    if (arr[mid] == 0) {
      [arr[lo], arr[mid]] = [arr[mid], arr[lo]];
      lo++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      [arr[mid], arr[hi]] = [arr[hi], arr[mid]];
      hi--;
    }
  }
  return arr;
}
console.log(sort012(arr));
