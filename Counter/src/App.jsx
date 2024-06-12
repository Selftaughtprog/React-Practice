import { useState } from "react";


function App() {

  const [counter, setCounter] = useState(0)

  // let counter = 15;

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
    console.log("clicked", counter);
  }

  const deleteValue = () => {
    if (counter != 0) {
    setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Hello</h1>

      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={deleteValue}>Delete value</button>
    </>
  )
}

export default App
