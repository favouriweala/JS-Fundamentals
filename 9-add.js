const arg1 = parseInt(process.argv.slice(2)[0], 10);
const arg2 = parseInt(process.argv.slice(2)[1], 10);

function add(a, b) {
    return a + b;
}
console.log(add(arg1, arg2));
