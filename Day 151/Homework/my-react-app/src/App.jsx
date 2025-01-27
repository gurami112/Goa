import React, { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const calcResult = eval(input);
        setResult(calcResult);
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Simple Calculator</h1>
      <div style={{ margin: "20px auto", maxWidth: "200px", textAlign: "left" }}>
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            fontSize: "20px",
            minHeight: "50px",
            marginBottom: "10px",
          }}
        >
          {input || "0"}
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            fontSize: "20px",
            minHeight: "50px",
          }}
        >
          Result: {result || "0"}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 50px)", gap: "10px", justifyContent: "center" }}>
        {["7", "8", "9", "/"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
        {["4", "5", "6", "*"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
        {["1", "2", "3", "-"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
        {["0", ".", "=", "+"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
        <button onClick={() => handleClick("C")} style={{ gridColumn: "span 4", backgroundColor: "red", color: "white" }}>
          Clear
        </button>
      </div>
    </div>
  );
}
