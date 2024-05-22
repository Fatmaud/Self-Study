import React, { useState, useEffect } from "react";

const useEffectPractice = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //the code that we want to run:

    console.log("the count is:", count);

    //optional return function
  }, [count]); //! []=dependency array---inside it we write what the hook should listen to/react to run the code in curly brackets

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};

export default useEffectPractice;
