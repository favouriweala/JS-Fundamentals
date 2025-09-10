const score = process.argv[2];
const number = parseInt(score,10);
if (isNaN(number)) {
    console.log('Not a number')
}
else{
    console.log('My number: ' + number)
}