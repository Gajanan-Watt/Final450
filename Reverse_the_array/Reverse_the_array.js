let array = [1,2,3,4,5,6,7];

function reverse_the_array(array){
    for(let i = 0; i < Math.floor(array.length/2); i++){
        [array[i], array[array.length-i-1]] = [array[array.length-1-i], array[i]];
    }
    console.log(array);
}

reverse_the_array(array);