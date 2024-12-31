import React, { useState } from 'react';

// Without useCallback
function Child({ onClick }) {
  console.log("Child rendered"); // This runs every time Parent renders.
  return <button onClick={onClick}>Click Me</button>;
}

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Button clicked");
  }; // This function is recreated every time Parent renders.

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}
// ===================================

// with useCallback

// import React, { useState, useCallback } from 'react';

function Child({ onClick }) {
  console.log("Child rendered"); // This will NOT run unnecessarily.
  return <button onClick={onClick}>Click Me</button>;
}

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); // The function is "memorized" and doesn't change between renders.

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}
