// const persons={
//     firstName:"Spongebob",
//     lastName:"Squarepants",
//     age:32,
//     isEmployed:"Np"
// };
// Object.entries(persons).forEach( ([key,value])=>{
//     console.log(key,value);
// })

let numbers=[1,2,3,4,5];
numbers.forEach(double);
numbers.forEach(display);

function display(element){
 console.log(element);
}
function double(element,index,array){
    array[index]=element*2;
}