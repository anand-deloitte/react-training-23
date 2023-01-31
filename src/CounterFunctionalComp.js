import React, { useState, useEffect } from "react";

const CounterFunctional = () => {
  const [count, updateCount] = useState(0);
  const [ischanged, updateIschanged] = useState(false);
  const incCounter = () => {
    updateCount((prev) => prev + 1);
  };
  const decCounter = () => {
    updateCount((prev) => prev - 1);
  };

  useEffect(() => {
    debugger;
    updateIschanged(true); //
  }, [count]);

  const toAlert = () => {
    alert("React alert");
  };
  return (
    <div>
      <h2>Counter Functioanl : {count}</h2>
      <p>is Counter Updated : {ischanged ? "changed" : "Not Changed"} </p>
      <button onClick={incCounter}>+</button>

      <button onClick={decCounter}>-</button>
      <button
        onClick={() => {
          toAlert();
        }}
      >
        Alert
      </button>
    </div>
  );
};

export default CounterFunctional;

// useContext
// useCallBack
// useRef  =>  id
// useMemo
