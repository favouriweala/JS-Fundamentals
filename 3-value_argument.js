let age = process.argv.slice(2);
if(age[0] === undefined){
    console.log('No argument')
}
else{
    console.log(age[0])
};