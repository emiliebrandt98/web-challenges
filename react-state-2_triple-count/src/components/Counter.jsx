import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    // Aktualisierungsfunktionen
    setCount((count) => count + 1); // count = 0 => 0 + 1 = 1
    setCount((count) => count + 1); // count = 1 => 1 + 1 = 2
    setCount((count) => count + 1); // count = 2 => 2 + 1 = 3
  }

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button
        type="button"
        className="counter__button"
        onClick={handleIncrement}
      >
        Increment count by 3
      </button>
    </div>
  );
}
