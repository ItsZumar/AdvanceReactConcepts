import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(15);

  const incVal = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decVal = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={incVal}>Increment value: {counter}</button>
      <br />
      <button onClick={decVal}>Decrement value: {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
