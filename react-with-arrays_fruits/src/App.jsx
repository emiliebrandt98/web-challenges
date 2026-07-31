import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "🍑 peach", color: "orange" },
    { id: 2, name: "🍌 banana", color: "yellow" },
    { id: 3, name: "🍎 apple", color: "red" },
    { id: 4, name: "🫐 blueberry", color: "blue" },
    { id: 5, name: "🫒 olive", color: "green" },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </div>
  );
}
