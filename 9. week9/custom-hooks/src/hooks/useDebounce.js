// import { useEffect, useRef, useState } from "react";

// export  function useDebounce(originalFn){
//     const currentClock=useRef();
//     const fn=()=>{
//       clearTimeout(currentClock.current);
//       currentClock.current=setTimeout(originalFn,200)
//     }
//     return fn;
//   }

import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

export default useDebounce;