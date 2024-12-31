// Withoout useCallback()

// import React, { useState } from "react";

// function Child({ onClick }) {
//   console.log("Child rendered"); // Logs every time Parent renders.
//   return <button onClick={onClick}>Click Me</button>;
// }

// function App() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     console.log("Button clicked");
//   }; // This function is re-created on every render.

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <Child onClick={handleClick} />
//     </div>
//   );
// }

// export default App;

// with useCallback()

import React, { useState, useCallback } from "react";

function Child({ onClick }) {
  console.log("Child rendered"); // Logs only if the function reference changes.
  return <button onClick={onClick}>Click Me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); // Memoizes handleClick to prevent re-creation on each render.

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}

export default App;
