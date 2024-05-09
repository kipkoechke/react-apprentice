import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";

const initialState = {
  questions: [],

  // "loading","error", "ready", "active", "finished"
  status: "loading",
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
    default:
      throw new Error("Unkown action");
  }
}
function App() {
  const [state, dispatcher] = useReducer(reducer, initialState);

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
        <h1>React Quiz</h1>
        <p>
          This is a simple React app that will test your knowledge of React.
        </p>
      </Main>
    </div>
  );
}

export default App;
