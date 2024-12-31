let counter=0;
function startCounter(){
    console.log(counter);
    counter++;
    if(counter<=15){
    setTimeout(startCounter,1000);
    }
}
startCounter();