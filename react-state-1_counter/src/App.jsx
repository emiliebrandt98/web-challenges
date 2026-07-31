import { useState } from "react";
import "./styles.css";

export default function App() {
  // let count = 0;
  const [count, setCount] = useState(0);

  function handleIncreaseCount() {
    setCount(count + 1);
  }
  function handleDecreaseCount() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={handleDecreaseCount}>
          -
        </button>
        <button type="button" onClick={handleIncreaseCount}>
          +
        </button>
      </div>
    </div>
  );
}

/* <button
          type="button"
          onClick={() => {
            console.log("🤔");
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("🤔");
          }}
        >
          +
        </button> */
