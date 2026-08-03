import "./styles.css";
import Form from "./components/Form";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleCreateUser(submittedName, submittedEmail) {
    setName(submittedName);
    setEmail(submittedEmail);
  }
  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form onCreateUser={handleCreateUser} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}
