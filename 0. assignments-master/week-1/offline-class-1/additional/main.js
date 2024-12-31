// <============================ String  and String Manipulation =====================================>

//     const str="Shaikh Ahmad";
//     console.log(str.length);

// function getLength(str){
//     console.log("Original string : "+str)
//     console.log("Length : "+str.length);
// }
// getLength("Hellow World");


// function findIndexOf(str , target){
//     console.log("Original string : "+str);
//     console.log("Index : "+str.lastIndexOf(target));
// }
// findIndexOf("Hellow World World World","World");


// Slice. 

// function getSlice(str, start, end) {
//     console.log("Original String:", str);
//     console.log("After slice:", str.slice(start, end));
//   }
//   getSlice("Hello World", 5, 11);

// method 2 . 
// let ans = "Shaikh Ahmad".slice(0,10);
// console.log(ans);

//  Alternate of slice => substr

// let ans="Shaikh Ahmad".substr(2,5);
// let ans2="Shaikh Ahmad".slice(2,5)
// console.log(ans," , " ,ans2);
// ========================Implentation of slicing ========================>

// function cutIt(str , startIndex , endIndex){
//     let newStr="";
//     for(let i = 0 ; i<str.length;i++){
//         if(i>=startIndex && i < endIndex){
//             newStr=newStr+str[i];
//         }
//     }
//     return newStr;
// }

// const value="Harkirat Singh";
// let ans2 =  value.slice(2,5);
// console.log(ans2);
// console.log(cutIt(value , 2,5));
 
// const str="Hello World";
// console.log(str.replace("World","JavaScript"));
// console.log(str.replace("He","Yelle "));

// Split.
// const value = "hi,my,name,is,harkirat";
// const words = value.split(",");
// console.log(words);

// ========================trim  ========================>

// const value="    Ahmad    ";
// console.log(value.trim());
// ======================== UpperCase and lower case methods  ========================>
// let value="shaikh ahmad";
// const newValue=value.toUpperCase();
// console.log("Using upper case method : ",newValue);
// const newValue2=value.toLowerCase();
// console.log(newValue2);
// console.log("Using lower case method : ",newValue);


// ======================== parseInt ========================>
    // it convert string to a number (it can not have decimal value)
// console.log(parseInt("40"));
// console.log(parseInt("42jhdjajhf"));
// console.log(parseInt("3.14"));
// console.log(parseInt("start42end"));

// parseFloat => it can have decimal value
// console.log(parseFloat("40"));
// console.log(parseFloat("42jhdjajhf"));
// console.log(parseFloat("3.14"));
// console.log(parseFloat("start42end"));


// =========================== callback==========================

//  function square(n){
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
    
    // function square(n){
    //     return n*n;
    //   }
    //   function sumOfSqures(a,b,callback){
    //       let value1=callback(a);
    //       let value2=callback(b);
    //       return value1+value2;
    //   }
    //     function cube(n){
    //     return n*n*n;
    //     }
     
    //   console.log(sumOfSqures(1,2,cube));
    //     function sumOfCubes(a,b){
    //         let value1=sumOfCube(a);
    //         let value2=sumOfCube(b);
    //         return value1+value2;
    //     }
    
    // Anonymus function==================>

        function square(n){
            return n*n;
        }
        function sumOfSomeThing(a,b,callback){
            console.log(a);
            console.log(callback);  
            const value1=callback(a);
            const value2=callback(b);
            return value1+value2;
        }
        const ans=sumOfSomeThing(2,2,function(n){
            return n*n*n;
        });
        console.log(ans);
    
    