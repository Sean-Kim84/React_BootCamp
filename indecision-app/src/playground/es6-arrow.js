const square = function(x) {
    return x * x;
};

console.log(square(3));

// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = x => x*x;
console.log(squareArrow(3));

const spliting = (x) => {
    return x.split(' ')
}

console.log(spliting("sean kim"));