// iterative factorial

function IterativeFact(NUM) {
    let f = 1;
    for ( let i = NUM; i > 0; i--) {
        f = f * i;
    }
    console.log(f);
}

// recursive factorial

function RecursiveFact(num) {
    if ( num == 1) { // base case
        return 1
    } else {
        return num * RecursiveFact(num - 1); // general case
    }
}
// calling of functions

IterativeFact(5);

let answer = RecursiveFact(5);
console.log(answer)