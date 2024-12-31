let count = 0; 
let intervalId;

function updateCounter() {
  count++;
  console.log(count); 
}

function startCounter() {
  intervalId = setInterval(updateCounter, 1000); 
}

function stopCounter() {
  clearInterval(intervalId);
}

function resetCounter() {
  clearInterval(intervalId);
  count = 0;
  console.log(count); 
  startCounter(); 
}

// startCounter();
// resetCounter();