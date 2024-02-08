import { useState } from "react";

export default function Player() {
  const [enterPlayerName, setEnterPlyerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setEnterPlyerName(event.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enterPlayerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enterPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
