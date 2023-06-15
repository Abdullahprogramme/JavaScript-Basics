console.log("WELCOME");
var vehicles = ["FORD" , ["VOLVO" , "HONDA"] , "TOYOTA" ];

console.log(vehicles[1]);
const removedval = vehicles.shift()
console.log(removedval);

function myFunction(Para1, Para2, operator) {
    if (operator === '+') {
        return Para1 + Para2;
    } else if  (operator === '-') {
        return Para1 - Para2;
    }
}

const answer = myFunction(2, 3, '+');
console.log("Answer is: " + answer);


