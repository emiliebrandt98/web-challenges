import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Attributes</h2>
      <label htmlFor="usernameInput"></label>
      <input type="text" id="usernameInput" />
      <a
        href="https://reactz2h.com/chapter_01_the_absolute_basics/series_03_writing_markup_with_jsx/jsx-attributes"
        className="article__link"
      >
        click for more information!
      </a>
    </article>
  );
}
