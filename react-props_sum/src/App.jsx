export default function App() {
  return <Sum valueA={4} valueB={5} />;
}

function Sum({ valueA, valueB }) {
  const result = { valueA } + { valueB };
  return (
    <p>
      {" "}
      {valueA} + {valueB} = {result}
    </p>
  );
}
