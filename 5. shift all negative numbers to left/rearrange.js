let arr = [3, -4, 5, -7, -9, 4, 1, -23];

function rearrange(arr) {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo < hi) {
    if (arr[lo] < 0) {
      lo++;
    } else if (arr[hi] > 0) {
      hi--;
    } else {
      [arr[lo], arr[hi]] = [arr[hi], arr[lo]];
    }
  }
  return arr;
}
console.log(rearrange(arr));
