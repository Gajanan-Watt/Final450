var arr = [1000, 11, 445, 1, 330, 3000];

function Max_Min(arr) {
  let max = -1 / 0;
  let min = 1 / 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log("Maximum Element in the array is", max);
  console.log("Minimum Element in the array is", min);
}

Max_Min(arr);