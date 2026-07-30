export default function App() {
  function handleClick() {
    alert(`You clicked a button!`);
  }

  return (
    <div>
      <Button
        backgroundColor="#014336"
        color="#fdf5f2"
        text="Click me!"
        onClick={handleClick}
      />
      <Button
        backgroundColor="#ca3702"
        color="#fdf5f2"
        text="Click me!"
        onClick={handleClick}
      />
      <Button
        backgroundColor="#959190"
        color="#fdf5f2"
        text="Click me!"
        onClick={handleClick}
        disabled
      />
    </div>
  );
}

function Button({ backgroundColor, color, disabled, text, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor,
        color,

        // Könnte man über className einfacher einfügen
        padding: "8px 16px",
        "border-radius": "8px",
        border: 0,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {text}
    </button>
  );
}
