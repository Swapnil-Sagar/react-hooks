import React, { useState } from "react";
import HookMouse from "./HookMouse";

function MouseContainer() {
  const [display, setDispay] = useState(true);
  return (
    <div>
      <button onClick={() => setDispay(!display)}>Toggle Display</button>
      {display && <HookMouse />}
    </div>
  );
}

export default MouseContainer;
