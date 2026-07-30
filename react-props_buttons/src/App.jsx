export default function App() {
  return (
    <Button
      backgroundColor="#ca3702"
      color="#fdf5f2"
      text="Click me!"
      disabled
    />
  );
}

function Button({ backgroundColor, color, disabled, text }) {
  return (
    <button
      disabled={disabled}
      style={{
        backgroundColor,
        color,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",

        // Könnte man über className einfacher einfügen
        padding: "8px 16px",
        "border-radius": "8px",
        border: 0,
      }}
    >
      {text}
    </button>
  );
}
