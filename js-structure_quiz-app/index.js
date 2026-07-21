import { cards } from "./utils/cards.js";
import { Header } from "./components/Header/Header.js";
import { App } from "./components/App/App.js";
import { CardList } from "./components/CardList/CardList.js";
import { Card } from "./components/Card/Card.js";
import { Bookmark } from "./components/Bookmark/Bookmark.js";
import { Form } from "./components/Form/Form.js";

// Header
const headerElement = Header();

// Form + handle Form Submit
const FormElement = Form();

// Bookmark
const bookmarkElement = Bookmark({ active: true });

// Card
const cardElement = Card(cards[0]);

// CardList
const cardListElement = CardList();

// App
const app = App();

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
