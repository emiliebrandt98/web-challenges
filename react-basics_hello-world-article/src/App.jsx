import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>React Components</h1>
      <p>
        React components are reusable, independent building blocks of a React
        application. Each component combines logic and appearance and represents
        a part of the user interface that can be used multiple times.
      </p>
    </article>
  );
}
