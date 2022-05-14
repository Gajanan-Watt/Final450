function rotateClockwise() {
  let array = [1, 2, 3, 4, 5];
  // if you want to rotate clockwise start loop from end
  let x = array[array.length - 1];
  for (let i = array.length - 1; i > 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = x;
  console.log("clockwise rotation of the array", array);
}

function rotateAnticlockwise() {
  let array = [1, 2, 3, 4, 5];

  // if you want to rotate anticlockwise start loop from start
  let y = array[0];
  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array[array.length - 1] = y;
  console.log("Anti-Clockwise rotation of the array", array);
}

rotateClockwise();
rotateAnticlockwise();
