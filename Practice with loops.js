// Addition with For loop
function forAdd(arr) {
    let total = 0
    for ( let i = 0; i < arr.length; i++ ) {
        total += arr[i];
    }
    return total;
}

// Addition with While loop
function whileAdd(arr) {
    let total = 0;
    var i = 0;
    while ( i < arr.length ) {
        total += arr[i];
        i++;
    }
    return total;
}

// Addition with Do While loop
function doWhileAdd(arr) {
    let total = 0
    var i = 0;
    do {
        total += arr[i];
        i++;
    } while( i < arr.length );
    return total;
}

// Array
const Number = [1, 2, 3, 4, 5]

answer1 = forAdd(Number);
answer2 = whileAdd(Number);
answer3 = doWhileAdd(Number);

console.log( answer1 + " " + answer2 + " " + answer3 )