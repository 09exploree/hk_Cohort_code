// const user1={
//     firstName:"Ahmad",
//     gender:"Male"
// };
// console.log(user1["firstName"]+user1["gender"]);

// const allUser=[{
//     firstName:"Ahmad", Gender:"Male"
// }, 
// { firstName:"Mohd",Gender:"Male"} ,
// {firstName:"Asad",Gender:"Male" 
//     }];
//     for(let i=0;i<allUser.length;i++){
//         // if(allUser[i]["Gender"]=="Male") console.log(allUser[i]["firstName"]);
//         if(allUser[i]["firstName"]=="Ahmad") console.log(allUser[i]["Gender"]);
//     }

// ===============================================================================================================
// function getLength(str){
    //     console.log("Original string : ",str);
    //     console.log("Length : ",str.length);
    // }
    // getLength("Hellow World");
    // ===============================================================================================================

// function findIndexOf(str,target){
// console.log("Original string : ",str);
// console.log("Index : ",str.lastIndexOf(target));
// }
// findIndexOf("Hello World World World","World");

// <============================ Array ======================================>

// const personName=["Cretos" , "Simons" , "Dragon" ];

// for(let i =0 ; i<3; i++){
//     console.log(personName[i]);
// }

// ================================ object =============================

// let list={
    //     name:"Cretos",
    //     gender:"male"
    // };
    // console.log(list["gender"]);
    
    // <================================ Array of object =============================>
    
    // const allUser=[{firstName:"Creator",gender:"male"}
    //     ,{firstName:"Aman" , gender:"male"},
    //     {firstName:"Soni" , gender:"female"}
    // ]
    // for(let i =0  ; i<allUser.length  ; i++){
    //     if(allUser[i]["gender"]=="female"){
    //         console.log(allUser[i]["firstName"]);
    //     }
    // }
// <================================ functions =============================>

    // function findSum(num1 , num2){
    //     return num1+num2;
    // }
    // addition=findSum(10,29);
    // console.log("The sum of the input numbers are : "+addition);


    // =>  5. Functions CAN take other functions as input - this will confuse you (callbacks)  or <========= CallBacks ==================>
// Example 1->
    // function sum(num1, num2,fnToCall) {
    //     let result = num1 + num2;
    //     fnToCall(result);
    // }
    
    // function displayResult(data) {
    //     console.log("Result of the sum is : " + data);
    // }
    
    // function displayResultPassive(data) {
    //     console.log("Sum's result is : " + data);
    // }
    // // You are allowed to call only one function after this
    // // How will you display Result of this  
    // const ans = sum(1,2,displayResult);

// Example 2 ->
//   function calculateArithmetic(a , b , ){
//     if(type=="sum"){
//         const val=sum(a , b);
//         return val;
//     }
//     if(type=="minus"){
//         const val = sub(a , b);
//         return val;
//     }
//   }
//   function sum(a , b ){
//     return a+b;
//   }
//   function sub(a , b){
//     return a-b;
//   }
//   const value=calculateArithmetic(100,20,"sum");
//   console.log(value);
  
// Example 3->  
// function calculateArithmetic(a , b ,aritheticFinalFunction ){
//   const ans=aritheticFinalFunction(a,b);
//   return ans;
//   }
//   function sum(a , b ){
//     return a+b;
//   }
//   const value=calculateArithmetic(100,200,sum);
//   console.log(value);