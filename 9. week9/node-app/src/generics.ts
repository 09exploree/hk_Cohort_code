// function identity<T>(arg:T):T{
//     return arg;
// }
// let output1=identity<string>("My Codes")
// let output2=identity<number>(100)


function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

interface User {
    name: string;
}

// const el = getFirstElement<string>(['harkirat', 'singh']);
// console.log(el.toUpperCase()); 

const l = getFirstElement<User>([{ name: "Ahmad" }]);

// const el3 = getFirstElement<number>([1, 23, 4]);
// console.log(el3 + 1); 

// const sg = getFirstElement(['shks', 'aldhgil']);
// console.log(sg.toUpperCase()); // No error since `sg` is a string.
