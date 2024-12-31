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
            kitechenCleand=true;
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

async function doChores(){
    try{
    const walkDogResult=await walkDog();
    console.log(walkDogResult) ;

    const cleanCitchenResult=await cleanKitchen();
    console.log(cleanCitchenResult);

    const takeOutTrashResult= await cleanKitchen();
    console.log(cleanCitchenResult);

    console.log("You completed all the tasks");
    }
    catch(error){
        console.error(error);
    }
}

doChores();