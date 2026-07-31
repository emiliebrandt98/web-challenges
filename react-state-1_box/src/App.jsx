import { useState } from "react";
import "./styles.css";

export default function App() {
  // let isActive = false;
  const [isActive, setIsActive] = useState(false);
  // const [text, setText] = useState("Activate");

  function handleClick() {
    // isActive = !isActive;
    setIsActive(!isActive);
    // setText(isActive ? "Activate" : "Deactivate");
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}
