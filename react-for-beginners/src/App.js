import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeword] = useState("");
  const onCilck = () => setValue((current) => current + 1);
  const onChange = (event) => setKeword(event.target.value);
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]); // keyword 가 변화 할때 코드를 실행 watching
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1>{counter}</h1>
      <button onClick={onCilck}>click me</button>
    </div>
  );
}

export default App;
