let intervalId;
function startCounter(){
  intervalId=setInterval(() =>{
    const s =new Date();
    console.log(s.toLocaleTimeString());
  },1000)
}
function stopCounter(afterMilliseconds) {
  setTimeout(() => {
    clearInterval(intervalId); 
    console.log("Timer stopped.");
  }, afterMilliseconds); 
}
startCounter();
stopCounter(5000);

