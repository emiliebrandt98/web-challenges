import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const initialLights = [
    {
      id: 1,
      name: "Living Room",
      isOn: false,
    },
    {
      id: 2,
      name: "Kitchen",
      isOn: false,
    },
    {
      id: 3,
      name: "Bedroom",
      isOn: false,
    },
    {
      id: 4,
      name: "Bathroom",
      isOn: false,
    },
    {
      id: 5,
      name: "Garage",
      isOn: false,
    },
    {
      id: 6,
      name: "Porch",
      isOn: false,
    },
    {
      id: 7,
      name: "Garden",
      isOn: false,
    },
    {
      id: 8,
      name: "Office",
      isOn: false,
    },
  ];

  const [lights, setLights] = useState(initialLights);
  const turnedOnLightsCount = lights.filter((light) => light.isOn).length;

  const allLightsOn =
    lights.filter((light) => light.isOn).length === lights.length;
  const allLightsOff =
    lights.filter((light) => !light.isOn).length === lights.length;

  // Handler functions
  function handleToggle(id) {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light,
      ),
    );
  }

  function handleAllLightsOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }

  function handleAllLightsOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  return (
    <Layout isDimmed={allLightsOff}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        handleToggle={handleToggle}
        handleAllLightsOn={handleAllLightsOn}
        handleAllLightsOff={handleAllLightsOff}
        lightsOnCount={turnedOnLightsCount}
        allLightsOn={allLightsOn}
        allLightsOff={allLightsOff}
      />
    </Layout>
  );
}
