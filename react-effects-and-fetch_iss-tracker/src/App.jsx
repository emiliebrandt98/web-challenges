import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  async function getISSCoords() {
    try {
      const response = await fetch(URL);
      const data = await response.json();

      setCoords({
        longitude: Number(data.longitude),
        latitude: Number(data.latitude),
      });
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //   // setInterval() startet sofort und läuft alle 5 Sekunden weiter
  //   const intervalID = setInterval(getISSCoords(),

  //   // stoppt die setInterval-Funktion
  //   return () => {
  //     clearInterval(intervalID);
  //   },
  //   5000);
  // );[];

  useEffect(() => {
    const intervalID = setInterval(getISSCoords, 5000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
