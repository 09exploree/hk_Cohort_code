// function walkDog(callback){
//     setTimeout( () => {
//         console.log("You walk the dog 🐕");
//         callback();
//     },1500);
// }
// function cleanKitchen(callback){
//     setTimeout(() => {
//         console.log("You clean the kitechen 🧹");
//         callback();
//     },2500);
// }
// function takeOutTrash(callback){
//     setTimeout( () => {
//         console.log("You take out the trash 🗑️ ");
//         callback();
//     },500);
// }
// walkDog( () => {
//     cleanKitchen( () => {
//         takeOutTrash( () => {
//             console.log("You finished all the chores!");
//         })
//     });
// });

// ============================== Using promise =================================

function walkDog(){
    return new Promise( (resolve , reject) =>{
        setTimeout( () => {

            dogWalked=true;
            if(dogWalked){
            resolve("You walk the dog 🐕");
            }else{
                reject("You didn't walk the dog");
            }

        },1500);
    });
}
function cleanKitchen(){
    
    return new Promise( (resolve ,  reject) =>{
        setTimeout(() => {
            kitechenCleand=false;
            if(kitechenCleand){
            resolve("You clean the kitechen 🧹");
            }else{
                reject("You didn't clean the kitchen");
            }
        },2500);
    });
}
function takeOutTrash(){
   
    return new Promise( (resolve , reject) =>{
        setTimeout( () => {
            trashCleaned=true;
            if(trashCleaned){
            resolve("You take out the trash 🗑️ ");
            }else{
                reject("You didn't take out the treash");
            }

        },500);
    });
}

walkDog().then( (message)=>{ console.log(message); return cleanKitchen();})
.then( (message) => {console.log(message);return takeOutTrash();})
.then( ( message)=> {console.log(message) ; console.log("You finished all the chores!")}).catch( (error) =>console.log(error) );