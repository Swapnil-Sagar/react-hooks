import React, { useState, useEffect } from "react";

function HookCounter1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Updating useEffect");
    document.title = `You clicked ${count} times`;
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={incrementCount}>CLicked {count} times</button>
    </div>
  );
}

export default HookCounter1;
