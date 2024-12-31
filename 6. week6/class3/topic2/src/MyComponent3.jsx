import React, { useCallback, useEffect, useMemo, useState } from 'react';
import List from './List.jsx';

function MyComponent3() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // const getItems=useCallback(()=>{
  //   return [number,number+1 , number+2];
  // },[number])
  const getItems=useCallback((incrementor)=>{
    return [number+incrementor,number+1+incrementor , number+2+incrementor];
  },[number])

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333',
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      /> <br />
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}



export default MyComponent3;
