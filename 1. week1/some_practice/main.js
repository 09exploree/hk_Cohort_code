function x(){
    let value=10;
    function y(){
        console.log("The function is executed");
    }
    return y;
}
const val=x();
console.log(val);
val();