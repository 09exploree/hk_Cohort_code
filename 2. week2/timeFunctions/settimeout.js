function sayHello() {
    console.log("Hello, World!");
}

const intervalId = setInterval(sayHello, 1000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval cleared");
}, 5000);
