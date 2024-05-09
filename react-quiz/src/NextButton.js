function NextButton({ answer, dispatch }) {
  return (
    <div>
      {answer !== null && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default NextButton;
