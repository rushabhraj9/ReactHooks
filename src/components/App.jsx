import React from "react";

function App() {
  let curTime = new Date().toLocaleTimeString();
  const [count, setCount] = React.useState(curTime);

  setInterval(UpdateTime, 1000);

  function UpdateTime() {
    curTime = new Date().toLocaleTimeString();
    setCount(curTime);
  }

  function increase() {
    curTime = new Date().toLocaleTimeString();
    setCount(curTime);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
