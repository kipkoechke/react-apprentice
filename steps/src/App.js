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
    /**
     * Takes the current `isOpen` state variable and negates its value.
     * Then sets the new value of `isOpen` state variable.
     *
     * @param {boolean} is The current state of the `isOpen` variable.
     * @return {boolean} The new value of the `isOpen` variable.
     */
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

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          {/* <p className="message">
            Step {step}: {messages[step - 1]}
          </p> */}

          <div className="buttons">
            <Button onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>

            <Button onClick={handleNext}>
              {" "}
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * The Button component renders a button element with customizable styles.
 *
 * @param {object} props - Component props
 * @param {string} [props.bgColor] - The background color of the button.
 * @param {string} [props.textColor] - The text color of the button.
 * @param {Function} props.onClick - The event handler for when the button is clicked.
 * @param {React.ReactNode} props.children - The content inside the button.
 * @returns {JSX.Element} The rendered button element.
 */
function Button({
  bgColor = "#7950f2",
  textColor = "#fff",
  onClick,
  children,
}) {
  return (
    // The button element
    <button
      // Style the button element with the given background color and text color
      style={{ backgroundColor: bgColor, color: textColor }}
      // When the button is clicked, call the onClick event handler
      onClick={onClick}
    >
      {/* Render the button's content */}
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}
