// interface User{
//     firstName:string,
//     lastName:string,
//     age:number,
//     email?:string
// }

// function isLegal(user:User):boolean | string{
//     if(user.age>18) return true;
//     else return false;
// }   
// const value=isLegal({firstName:'sk',
//     lastName:'Ahmad',
//     age:29
// })
// console.log(value)


// interface Person{
//     name:string,
//     age:number,
//     greet(phrase:string):void;
// }
// class Employee implements Person{
//     name:string;
//     age:number;
//     constructor(n:string,a:number){
//         this.name=n;
//         this.age=a;
//     }
//     greet(phrase:string):void{
//         console.log(`${phrase} ${this.name}`);
//     }
// }


// type Employee={
//     name:string,
//     startData:Date;
// }
// interface Manager{
//     name:string;
//     department:string;
// };

// type TechLead=Employee & Manager;
// const t:TechLead={
//     name:"Ahmad",
//     startData:new Date(),
//     department:"Information Technology" 
// }