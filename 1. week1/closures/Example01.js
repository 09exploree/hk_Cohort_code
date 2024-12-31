function Counter(){
    let count=0;
    function increment(){
        count++;
        console.log(`count incremented to ${count}`);
    }
    return {increment};
}

let counter=Counter();
counter.increment();
counter.increment();
counter.increment(); 