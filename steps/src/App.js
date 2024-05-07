import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  /**
   * Decrements the step state variable by 1 if it is greater than 1.
   *
   * @return {void} This function does not return anything.
   */
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  /**
   * Increments the step state variable by 1 if it is less than 3.
   *
   * @return {void} This function does not return anything.
   */
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  /**
   * Toggles the value of `isOpen` state variable.
   *
   * @return {void} No return value.
   */
  function handleIsOpen() {
    setIsOpen((is) => !is);
  }

  return (
    <>
      <div>
        {" "}
        <button className="close" onClick={handleIsOpen}>
          &times;
        </button>
      </div>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <Button
              onClick={handlePrevious} 
              ><span>👈</span>Previous</Button>
              
            <Button
              onClick={handleNext}
               > Next <span>👉</span></Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ bgColor = "#7950f2",  textColor="#fff", onClick, children }) {
  return <button
    style={{ backgroundColor: bgColor, color: textColor }}
    onClick={onClick}>
    {children}
  </button>
}