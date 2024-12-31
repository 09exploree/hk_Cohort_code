// let sales:number=123_456_789;
// let course:string="Typescript"
// let is_published:boolean=true;

// function render(document){
//     console.log(document)
// }
   

// Arrays
// let number=[1,2,3]

// let  numbers:number[]=[];
// numbers.forEach(n=>console.log(n))

// touples=>
// let user:[number,string]=[1,'ahmad'];
// console.log(user[0]);

// enums:=======
// const small=1;
// const medium=2;
// const large=3;
// Pascal case:

// const enum Size{Small=1,Medium,Large}
// let mySize:Size=Size.Small;
// console.log(mySize);

// function:======

// function calculateTax(income:number,taxYear?:number):number{
//     if((taxYear || 2022)<2022){
//      return income*1.2;
//     }
//     return income*1.4;
// }
// function calculateTax(income:number,taxYear=2022):number{
//     if((taxYear)<2022){
//      return income*1.2; 
//     }
//     return income*1.4;
// }
// calculateTax(10_000,2022);

// object:========

// let employee:{
//     id:number,
//     name?:string
// }={id:1,}
// employee.name="Ahmad"

// let employee:{
//     readonly id:number,
//     readonly name:string
//     retire:(data:Date)=>void
// }={id:1,
//     name:'Ahmad',
//     retire:(date:Date)=>{
//         console.log(date);
//     }
// }

// TypeAliases:========

// type Employee={
//     readonly id:number,
//     name:string
//     retire:(data:Date)=>void
// }
// let employee:Employee={
//         id:1,
//         name:"Ahmad",
//         retire:(date:Date)=>{
//             console.log(date)
//         }
// }

// Union Type:=

// function kgToLbs(weight:number|string):number{
//     if(typeof weight==='number'){
//         return weight*2.2;
//     }else{
//         return parseInt(weight)*2.2;
//     }
// }
// kgToLbs(10);
// kgToLbs('10kg');

// Intersection Types:=

// type Dragable={
//     drag:()=>void
// }
// type Resizable={
//  resize:()=>void   
// };

// type UIWidget=Dragable & Resizable;

// let textBox:UIWidget={ 
//     drag:()=>{},
//     resize:()=>{}
// };

// Literal:=

// let quantity:50 | 100;

// type Quantity=50|100;
// let qunatity:Quantity=100;


// Nullable type :===

// function greet(name:string | null | undefined){
//     if(name) console.log(name.toUpperCase());
//     else console.log("No!")
// }
// greet(undefined);


// Optional chaining :===

//  type Customer={
//     birthday:Date,
//  }

//  function getCustomer(id:number):Customer|null | undefined{
//    return id===0?null:{birthday:new Date()};
//  }
//  let customer=getCustomer(1);   
// //method1.   if(customer!==null && customer!==undefined) 
// // Optional property access operator
//  console.log(customer?.birthday)


 type Customer={
    birthday?:Date,
 }

 function getCustomer(id:number):Customer|null | undefined{
   return id===0?null:{birthday:new Date()};
 }
 let customer=getCustomer(1);   
 console.log(customer?.birthday?.getFullYear()) 


//  Optional Element access operator
// cutomers?.[0]

// optional call
let log:any=null;
log?.('a')

