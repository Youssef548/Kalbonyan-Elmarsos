import { useState, useEffect } from 'react';
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((counterUpdateFn) => counterUpdateFn + 1);
      } else {
        setCounter((counterUpdateFn) => counterUpdateFn - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);
  return counter;
};

export default useCounter;
