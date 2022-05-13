let array1 = [85, 25, 1, 32, 54, 6];
let array2 = [85, 2, 32];

function Union_Intersection(array1, array2) {
  let object1 = {};

  //   let intersection_array = array1.filter((x) => array2.indexOf(x) !== -1);
  let intersection_array = array1.filter((x) => array2.includes(x));

  for (let i = 0; i < array1.length; i++) {
    if (object1[array1[i]] == undefined) {
      object1[array1[i]] = 1;
    } else {
      object1[array1[i]]++;
    }
  }
  for (let i = 0; i < array2.length; i++) {
    if (object1[array2[i]] == undefined) {
      object1[array2[i]] = 1;
    } else {
      object1[array2[i]]++;
    }
  }
  let union_array = [];
  for (let key in object1) {
    union_array.push(key);
  }

  console.log(
    "Intersection of these two array is: ",
    intersection_array,
    ",",
    "Union of these two arrays is: ",
    union_array
  );
}
Union_Intersection(array1, array2);
