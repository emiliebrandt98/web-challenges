import { useEffect, useState } from "react";

// export default function useMouse() {
//   const [x, setX] = useState(0);
//   const [y, setY] = useState(0);

//   useEffect(() => {
//     document.body.addEventListener("mousemove", () => {
//       setX(event.clientX);
//       setY(event.clientY);
//     });
//   });
//   return [x, y];
// }

export default function useMouse() {
  const [cursorPosition, setCursorPosition] = useState([]);

  useEffect(() => {
    document.body.addEventListener("mousemose", (event) => {
      setCursorPosition([event.clientX, event.clientY]);
    });
  }, []);

  return cursorPosition;
}
