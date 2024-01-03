function minMovesToReachTarget(plan, currentFloor, targetFloor) {
    let visited = new Array(Math.max(Math.max(...Object.keys(plan)), targetFloor) + 1).fill(false);
    let queue = [[currentFloor, 0]];

    while (queue.length > 0) {
        let [currentFloor, moves] = queue.shift();
        visited[currentFloor] = true;

        if (currentFloor === targetFloor) {
            return moves;
        }

        if (plan.hasOwnProperty(currentFloor)) {
            let connectedFloors = plan[currentFloor];
            for (let connectedFloor of connectedFloors) {
                if (!visited[connectedFloor]) {
                    queue.push([connectedFloor, moves + 1]);
                }
            }
        }
    }
    return -1;
}

// Example usage:
let plan = {
    1: [2, 3],
    2: [4, 5],
    3: [6, 7],
    4: [8, 9],
    5: [10, 11]
};

let startFloor = 1;
let targetFloor = 11;

let result = minMovesToReachTarget(plan, startFloor, targetFloor);
console.log(result);

function floydTri(N) {
    let num = 1;
    for (let i = 1; i <= N; i++) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row += num + " ";
            num++;
        }
        console.log(row);
    }
}

// Calling the function with N=5
floydTri(5);

function lastWord(string = 'I am a human') {
    const lastSpaceIndex = string.lastIndexOf(' ');
    const word = string.substring(lastSpaceIndex + 1);
    console.log(`The last word is '${word}' with length ${word.length}`);
}

// Calling the function
lastWord();

const spiral = (N) => {
    const n = N.length;
    let lengths = [];
    for (let i = 1; i < n; i++) {
        lengths.push(i, i)
    }
    lengths.push(n - 1);
    let row = Math.floor(n / 2);
    let col = Math.floor(n / 2);
    let direction = 0;
    let spiral = [N[row][col]]
    for (let dir of lengths) {
        for (let i = 0; i < dir; i++) {
            if (direction === 0) {
                row --;
            } else if (direction === 1) {
                col ++;
            } else if (direction === 2) {
                row ++;
            } else {
                col --;
            }
            spiral.push(N[row][col])
        }
        direction = (direction + 1) % 4
    }
    return spiral;
};

let spiral_matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(spiral(spiral_matrix))

const merge = function(arr) {
    if (arr.length > 1) {
        let mid = Math.floor(arr.length / 2); 
        let left = arr.slice(0, mid);
        let right = arr.slice(mid, arr.length);
        
        merge(left);
        merge(right);

        let i = j = k = 0;
        while ( i < left.length && j < right.length ) {
            if ( left[i] < right[j] ) {
                arr[k] = left[i];
                i ++;
            } else {
                arr[k] = right[j];
                j ++;
            }
            k ++;
        };

        while ( i < left.length ) {
            arr[k] = left[i];
            i ++;
            k ++;
        };

        while ( j < right.length ) {
            arr[k] = right[j];
            j ++;
            k ++;
        };
    };
}
var arr = [9,4,1,76,23,4,2,0,-2,5,-5]
merge(arr)
console.log(arr)

let collatz = (n) => {
    let result = String(n)
    while ( ![1, 5, 17].includes(n) ) {
        n = n % 2 == 0 ? Math.floor(n / 2) : n = 3 * n - 1;
        result += `, ${String(n)}`;
    };
    return result;
};

console.log(collatz(3))

let get_repeated_items = (cart) => {
    let repeated_items = [];
    for ( let item = 0; item < cart.length; item++) {
        if ( cart.slice(item + 1).includes(cart[item]) && !repeated_items.includes(cart[item]) ) {
            repeated_items.push(cart[item]);
        };
    };
    return repeated_items;
}

console.log(get_repeated_items(['b','a','b','c','d','a','e']))