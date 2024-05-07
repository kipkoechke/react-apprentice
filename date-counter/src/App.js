import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <CounterV2 />
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


function CounterV2() {
  // This component allows the user to select a step size and
  // increment/decrement a counter by that step size. It also
  // displays the current date, adjusted by the value of the counter.

  // We use the useState hook to keep track of the step size and
  // counter values.
  const [stepSize, setStepSize] = useState(1);
  const [counter, setCounter] = useState(stepSize - 1);

  // We create a new Date object and adjust it by the value of the
  // counter to get the final date that we'll display.
  const date = new Date();
  date.setDate(date.getDate() + counter);

  // These are the event handlers for the increment/decrement buttons
  // and the input field.
  function incrementCounter() {
    // We use an arrow function to make sure that we have access to
    // the current value of the counter when the function is called.
    setCounter(currentCounter => currentCounter + stepSize);
  }

  function decrementCounter() {
    setCounter(currentCounter => currentCounter - stepSize);
  }

  function incrementStepSize() {
    setStepSize(currentStepSize => currentStepSize + 1);
  }

  function decrementStepSize() {
    setStepSize(currentStepSize => currentStepSize - 1);
  }

  function handleReset() {
    // When the user clicks the reset button, we want to set the step
    // size back to 1 and the counter back to 0.
    setStepSize(1);
    setCounter(0);
  }

  return (
    <div>
      <div>
        {/* We use an <input type="range" /> element to let the user
             select the step size. The min, max, and value attributes
             are set based on the current state of the component. When
             the user changes the value, the onChange event handler is
             called, which updates the state. */}
        <input
          type="range"
          min={0}
          max={10}
          value={stepSize}
          onChange={e => setStepSize(+e.target.value)}
        />
        {/* We display the current value of the step size below the
             slider. */}
        {stepSize}
      </div>
      <p>
        {/* When the user clicks these buttons, we call the
             incrementCounter or decrementCounter event handlers,
             which update the state of the component. */}
        <button onClick={decrementCounter}>-</button>
        <input
          type="text"
          value={counter}
          onChange={e => setCounter(+e.target.value)}
        />
        <button onClick={incrementCounter}>+</button>
      </p>
      <p>
        {/* We display a message based on the value of the counter. If
             the counter is 0, we display "Today is ". If the counter is
             greater than 0, we display "{counter} days from today is
             ". If the counter is less than 0, we display "{abs(counter)}
             days ago was ". */}
        {counter === 0
          ? "Today is "
          : counter > 0
            ? `${counter} days from today is `
            : `${Math.abs(counter)} days ago was `}
        {/* We display the final date, which is the current date
             adjusted by the value of the counter. */}
        {date.toDateString()}
      </p>

      {/* If the counter is not 0, we display a reset button that
           allows the user to reset the step size and counter to their
           default values. */}
      {(counter > 0 || counter < 0) &&
        <div> <button onClick={handleReset}>Reset</button></div>}
    </div>
  );
}

