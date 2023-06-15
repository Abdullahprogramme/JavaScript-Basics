Stack =[
    ["Abdullah", 18],
    ["Muzammil", 24],
    ["Zainab", 16]
]

let size = 2;

function push(val) {
    const max = 2;
    if (size === max) {
        console.log("Stack is full");
    } else {
        size += 1
        Stack.push(val);
    }
}

function pop() {
    const max = 2;
    if (size === 0) {
        console.log("Stack is empty");
    } else {
        size -= 1
        const removedVal = Stack.shift();
        return removedVal;
    }
}

push(3);
let value = pop();
console.log(value)