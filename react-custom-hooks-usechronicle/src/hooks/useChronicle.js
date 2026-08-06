import { useState } from "react";

export function useChronicle(initialValue) {
  const [timeline, setTimeline] = useState([initialValue]);

  function setState(newValue) {
    setTimeline([...timeline, newValue]);
  }

  function resetState() {
    if (timeline.length >= 2) {
      setTimeline(timeline.slice(0, -1));
    }
  }

  const currentValue = timeline.at(-1);

  return [currentValue, setState, resetState];
}
