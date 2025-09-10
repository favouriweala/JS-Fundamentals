const arg = process.argv[2];

if (arg === undefined) {
    console.log('No argument');
} else {
    function factorial(x) {
        x = parseInt(x, 10);
        if (isNaN(x) || x <= 0) return 1;
        if (x === 1) return 1;
        return x * factorial(x - 1);
    }

    console.log(factorial(arg));
}


