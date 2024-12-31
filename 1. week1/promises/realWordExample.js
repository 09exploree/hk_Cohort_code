
// A promise in JavaScript is like a guarantee that something will happen in the future. When you create a promise, you are saying, "I’ll do something, but it may take some time, and I’ll tell you when I’m done."

// Imagine ordering food from a restaurant. After placing your order:

// The restaurant promises to deliver the food.
// While waiting, you don’t know exactly when the food will arrive (the promise is pending).
// When the food arrives, the restaurant fulfills the promise (promise is fulfilled).
// If something goes wrong (like the restaurant is out of ingredients), they call you to tell you the food won’t arrive (the promise is rejected).


let orderFood = new Promise((resolve,reject) => {
    foodAvailable=true;
    
    if(foodAvailable){
      resolve("Food Delivered!");
    }
      
    else{
      error("Sorry , Food is not available");
    }
  });
  
  orderFood
   .then(message => console.log(message))
   .catch(error => console.log(error));