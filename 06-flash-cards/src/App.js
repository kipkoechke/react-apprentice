import React, { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

/**
 * Component: FlashCards
 * Description: This component renders a list of flash cards.
 *              Each flash card has a question and an answer.
 *              When a flash card is clicked, it will be highlighted
 *              and the answer will be displayed.
 *              Clicking on the same flash card again will hide the answer
 *              and deselect it.
 */
function FlashCards() {
  /**
   * State: selectedId
   * Description: holds the id of the currently selected flash card
   *              or null if no flash card is selected
   */
  const [selectedId, setSelectedId] = useState(null);

  /**
   * Event handler: handleSelectedItem
   * Description: handles the click event on a flash card
   *              When a flash card is clicked, it will be selected
   *              and the answer will be displayed.
   *              If the same flash card is clicked again, it will be deselected
   *              and the answer will be hidden.
   *
   * @param {number} id - The id of the flash card that was clicked
   */
  function handleSelectedItem(id) {
    /**
     * If the clicked flash card is already selected,
     * then deselect it by setting selectedId to null
     * Otherwise, select the clicked flash card by setting
     * selectedId to the id of the clicked flash card
     */
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {/*
        Map over the questions array and render a flash card
        for each question
      */}
      {questions.map((question) => (
        <div
          /**
           * Add a unique key to each flash card
           * based on the question id
           */
          key={question.id}
          /**
           * Add a click event handler to each flash card
           * that calls handleSelectedItem with the question id
           */
          onClick={() => handleSelectedItem(question.id)}
          /**
           * Add a className to each flash card based on
           * whether or not it is selected
           */
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {/*
              If the question is selected,
              display the answer
              Otherwise, display the question
            */}
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}

