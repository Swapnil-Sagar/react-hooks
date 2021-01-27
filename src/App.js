import "./App.css";
import ClassCounter from "./components/ClassCounter";
import ClassCounterOne from "./components/ClassCounterOne";
import HookCounter from "./components/HookCounter";
import HookCounter1 from "./components/HookCounter1";
import HookCounter2 from "./components/HookCounter2";
import HookCounter3 from "./components/HookCounter3";
import HookCounter4 from "./components/HookCounter4";
import HookMouse from "./components/HookMouse";
import IntervalHookCounter from "./components/IntervalHookCounter";
import MouseContainer from "./components/MouseContainer";

function App() {
  return (
    <div className="App">
      <IntervalHookCounter />
      {/* <MouseContainer/>
      <HookMouse />
      <HookCounter1 />
      <ClassCounterOne />
      <ClassCounter />
      <HookCounter />
      <HookCounter2 />
      <HookCounter3 />
      <HookCounter4 /> */}
    </div>
  );
}

export default App;
