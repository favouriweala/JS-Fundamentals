const score = process.argv.slice(2);
if (score.length === 0){
    console.log('No argument')
}
else if(score.length === 1){
    console.log('Argument found')
} else {
    console.log('Arguments found')
}