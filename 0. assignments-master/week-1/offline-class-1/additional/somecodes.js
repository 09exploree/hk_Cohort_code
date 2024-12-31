// function someThing( a,b , fnToCall){

//     return fnToCall(a,b);
// }

// function sum(a , b ){
//     return a+b;
// }

// let sValue=someThing(10,20,sum);
// console.log("The addition is : ",sValue);


// function square(n){
//   return n*n;
// }
// function sumOfSqures(a,b){
//     let value1=square(a);
//     let value2=square(b);
//     return value1+value2;
// }
// function sumOfCube(n){
// return n*n*n;
// }
// function sumOfCubes(a,b){
//     let value1=sumOfCube(a);
//     let value2=sumOfCube(b);
//     return value1+value2;
// }
// console.log(sumOfSqures(10,22));

// let use callBack

function square(n){
    return n*n;
  }
  function sumOfSqures(a,b,callback){
      let value1=callback(a);
      let value2=callback(b);
      return value1+value2;
  }
    function cube(n){
    return n*n*n;
    }
 
  console.log(sumOfSqures(1,2,cube));
//     function sumOfCubes(a,b){
//         let value1=sumOfCube(a);
//         let value2=sumOfCube(b);
//         return value1+value2;
//     }

// Anonymus function

