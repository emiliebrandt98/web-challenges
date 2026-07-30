export default function App() {
  return <Greeting name="Emilie" />;
}

function Greeting({ name }) {
  return <h1>Hello, {name} !</h1>;
}
