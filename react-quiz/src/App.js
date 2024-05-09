import { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
function App() {
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
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
