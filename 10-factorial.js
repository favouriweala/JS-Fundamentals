const numArg = process.argv.slice(2)[0];
const n = parseInt(numArg, 10);

function factorial(x) {
    if (isNaN(x) || x <= 0) {
        return 1; 
    }
    if (x === 1) {
        return 1;
    }
    return x * factorial(x - 1); 
console.log(factorial(n));
}
