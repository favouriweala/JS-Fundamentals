const score = process.argv.slice(2)[0];

const number = parseInt(score, 10);

if (isNaN(number)) {
    console.log('Missing number of occurrences');
} else {
    for (let i = 0; i < number; i++) {
        console.log('C is fun');
    }
}
