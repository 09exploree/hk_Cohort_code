// 1. Write the program to greet a person given their first and last name 
// 2. Write a program that greets a person based on their gender. (If else) 
// 3. Write a program that counts from 0 - 1000 and prints (for loop)


// 1. 

// let firstName="Ahmad";
// let age=18;
// let isMarried =false;
// if(isMarried){
//     console.log(firstName+" is Married");
// } else{
//     console.log(firstName+" is not Married");
// }

// 2.

// let name="Cretos";
// let isMale=true;
// if(isMale){
//     console.log(name+" is male");
// } else{
//     console.log(name+" is female")
// }

// 3.

// let count=0;
// for(let i =0 ; i<1000 ; i++){
//     count=count+i;
// }
// console.log("The Addition from 1-1000 is "+count);


// ==========================================================================

// 1. Write a program prints all the even numbers in an array 
// 2. Write a program to print the biggest number in an arrya 
// 3. Write a program that prints all the male people’s first name given a complex object 
// 4. Write a program that reverses all the elements of an array

// 1. 
// const ages=[21,22,23,24,25];
// for(let i=0; i<ages.length;i++){
//     if(ages[i] % 2==0){
//         console.log(ages[i]);
//     }
// }

// 2.
// let numbers=[1,2,3,4,5,19,23,0,5];
// let largestNumber=numbers[0];
// for(let i =1 ; i<numbers.length;i++){
//     if(largestNumber<numbers[i]){
//         largestNumber=numbers[i];
//     }
// }
// console.log("The largest number is "+largestNumber);

// 3.
// method1 using array
// const personArray=["Crtaos","Raman","Drav"];
// const genderArray=["male","male","female"]; 
// const numberofUsers=personArray.length;
// for(let i=0; i<numberofUsers;i++){
//     if(genderArray[i]=="male"){
//         console.log(personArray[i]);
//     }
// }
// method2 using objects
// const allUser=[{firstName:"Creator",gender:"male"}
//     ,{firstName:"Aman" , gender:"male"},
//     {firstName:"Soni" , gender:"female"}
// ]
// for(let i =0  ; i<allUser.length  ; i++){
//     if(allUser[i]["gender"]=="female"){
//         console.log(allUser[i]["firstName"]);
//     }
// }

// 4.
function reverseArray(arr){
    let start=0;
    let end=arr.length - 1;
    while(start<end){
        let temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        start++;
        end--;
    }
    return arr;
}
let arr=[1,2,3,4,5,6,7,8];
console.log("Original array : "+arr);
rev=reverseArray(arr);
console.log("Reversed Array : "+rev);

