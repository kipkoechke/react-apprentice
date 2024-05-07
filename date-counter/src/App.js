import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(step - 1);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleCountIncr() {
    setCount((c) => c + step);
  }

  function handleCountDecr() {
    setCount((c) => c - step);
  }

  function handleSteptIncr() {
    setStep((s) => s + 1);
  }

  function handleStepDecr() {
    setStep((s) => s - 1);
  }

  return (
    <div>
      <p>
        <span>
          <button onClick={handleStepDecr}>-</button>
        </span>{" "}
        Step: {step}{" "}
        <span>
          <button onClick={handleSteptIncr}>+</button>
        </span>
      </p>
      <p>
        <span>
          <button onClick={handleCountDecr}>-</button>
        </span>{" "}
        Counter: {count}{" "}
        <span>
          <button onClick={handleCountIncr}>+</button>
        </span>
      </p>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
        </span>
        <span> {date.toDateString()}</span>
      </p>
    </div>
  );
}
