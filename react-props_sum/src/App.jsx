export default function App() {
  return <Sum valueA={4} valueB={5} />;
}

function Sum({ valueA, valueB }) {
  return valueA + valueB;
}
