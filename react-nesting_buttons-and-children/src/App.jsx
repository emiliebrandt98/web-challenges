import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>button 01</Button>
      <Button>button 02</Button>
      <Button>button 03</Button>
      <Button>button 04</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
