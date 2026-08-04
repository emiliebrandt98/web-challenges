import { useState } from "react";
import "./StatusCheck.css";

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

export default function StatusCheck() {
  // const statusIcon = "⁉️";
  const [statusIcon, setStatusIcon] = useState("⁉️");

  function handleCheckApiStatus() {
    async function apiStatus() {
      try {
        // Es wird gewartet bis wir ein "response" bekommen
        setStatusIcon("⏳");

        const response = await fetch(apiStatusUrl);

        // Wenn response.ok ist und wenn es nicht ok ist.
        if (response.ok) {
          setStatusIcon("✅");
        } else {
          setStatusIcon("❌");
        }

        // Wird hier in der Aufgabe nicht gebraucht
        const data = await response.json();
        return { data: data };

        //API kann nicht abgerufen werden.
      } catch (error) {
        setStatusIcon("🚨");
      }
    }
    apiStatus();
  }

  return (
    <article className="status-check">
      <div className="status-check__wrapper">
        <h2 className="status-check__heading">Status:</h2>
        <span className="status-check__icon">{statusIcon}</span>
      </div>
      <button
        type="button"
        className="status-check__button"
        onClick={handleCheckApiStatus}
      >
        Check API Status
      </button>
    </article>
  );
}
