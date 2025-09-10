const score = process.argv.slice(2)[0];
const number = parseInt(score, 5);
if (isNaN(score) || score<=0){
    console.log('Missing number of occurrences')
}
else{
    for(let i = 0; i < score; i++){
        console.log('C is fun')
    }
}