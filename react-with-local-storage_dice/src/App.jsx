import useLocalStorageState from "use-local-storage-state";
import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";

export default function App() {
  // const [rolls, setRolls] = useState([]);
  const [rolls, setRolls] = useLocalStorageState("rolls", { defaultValue: [] });

  // handleRoll nimmt den neuen Wert entgegen
  function handleRoll(newValue) {
    // App verwaltet hier den rolls-State weshalb es hier
    // sinnvoller ist als in D6Button.

    // Hier wir das neue Objekt gebaut (Wurf-Wert +
    // Zeitstempel) und alle bisherigen Einträge werden hinzugefügt.
    setRolls([{ value: newValue, time: Date.now() }, ...rolls]);
  }

  // Das ?. (Optional Chaining) fängt den Fall ab, dass rolls noch leer ist
  // (ganz am Anfang, vor dem ersten Klick) – sonst gäbe es einen Fehler
  // beim Zugriff auf .value von undefined.
  const currentRollValue = rolls[0]?.value;

  return (
    <div className="app">
      <main className="app__main">
        <D6Button value={currentRollValue} onRoll={handleRoll} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
