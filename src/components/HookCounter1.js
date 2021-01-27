import React, { useState, useEffect } from "react";

function HookCounter1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={incrementCount}>CLicked {count} times</button>
    </div>
  );
}

export default HookCounter1;
