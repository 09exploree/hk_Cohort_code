/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
 
    const promise=new Promise( (resolve,reject)=>{
    return new Promise( (resolve,reject)=>{
        const isResolve=true;
        if(isResolve)  resolve("the wait function is executes successfully");
        else reject("The wait function is not executed");
    })
    } ,n)
}
wait(2000).then( value =>{console.log(value)}).
catch(error =>{console.log(error)});
module.exports = wait;
