import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const onCilck = () => setValue((current) => current + 1);
  console.log("i run all the time");
  useEffect(() => {
    console.log("call the API...");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onCilck}>click me</button>
    </div>
  );
}

export default App;
