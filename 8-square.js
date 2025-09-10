const sizeArg = process.argv.slice(2)[0];

const size = parseInt(sizeArg, 10);

if (isNaN(size)) {
    console.log('Missing size');
} else {
    for (let i = 0; i < size; i++) {
        console.log('X'.repeat(size)); 
    }
}
