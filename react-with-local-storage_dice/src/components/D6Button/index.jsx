import { getD6Roll } from "../../utils";
import D6 from "../D6";
import "./D6Button.css";

export function D6Button({ value, onRoll }) {
  // Löst nur noch einen Würfelwurf aus und die historie nicht.
  const handleRoll = () => {
    onRoll(getD6Roll());
  };

  // currentRollValue musste vorher den aktuellen Wert
  // rausziehen, nun ist value aber schon der aktuelle Wert.

  return (
    // <D6 value={value} /> zeigt nur noch den aktuellen Wert an
    <button className="d6-button" type="button" onClick={handleRoll}>
      <D6 value={value} />
    </button>
  );
}

// export function D6Button({ value, onRoll }) {
//   const handleRoll = () => {
//     onRoll([{ value: getD6Roll(), time: Date.now() }, ...value]);
//   };

//   const currentRollValue = value[0]?.value;

//   return (
//     <button className="d6-button" type="button" onClick={handleRoll}>
//       <D6 value={currentRollValue} />
//     </button>
//   );
