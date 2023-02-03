/**
 * Break
 */

var x = 1;
while(x <21) {
    if(x == 5) {
        break;
    }
    // console.log('Roll Number: '+ x);
    x++;
}

/**
 * Continue
 */

var arr = [2, 50, 4, 3, 25, 5, 1, 20, 6];

for (var y = 0; y < arr.length; y++) {
    if(arr[y] > 5) {
        continue;
    }
    console.log(arr[y]);
}
