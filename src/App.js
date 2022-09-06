import { useState } from "react";
import "./App.css";

function App() {
  const value = document.getElementById("count");
  const [count, setCount] = useState(0);
  if (count === 0) {
    console.log(count);
  } else if (count > 0) {
    value.style.color = "green";
  } else if (count < 0) {
    value.style.color = "red";
  }
  return (
    <div className="App">
      <h1 id="count"> {count} </h1>
      <div className="ButtonContainer">
        <button onClick={() => setCount(count - 1)}> Decrease </button>
        <button onClick={() => setCount(0)}> Reset</button>
        <button onClick={() => setCount(count + 1)}> Increase </button>
      </div>
    </div>
  );
}

export default App;
