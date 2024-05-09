import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";

const initialState = {
  questions: [],

  // "loading","error", "ready", "active", "finished"
  status: "loading",
  index: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      return {
        ...state,
        status: "ready",
        questions: action.payload,
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    default:
      throw new Error("Unkown action");
  }
}
function App() {
  const [{ questions, status, index }, dispatcher] = useReducer(
    reducer,
    initialState,
  );

  const numQuestions = questions.length;

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatcher({ type: "dataRecieved", payload: data }))
      .catch((err) => dispatcher({ type: "dataFailed", payload: err }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatcher} />
        )}
        {status === "error" && <Error />}
        {status === "active" && <Question question={questions[index]} />}
      </Main>
    </div>
  );
}

export default App;
