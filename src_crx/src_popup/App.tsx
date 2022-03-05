import { argv } from "config/env";
function App() {
  console.log(argv);
  return (
    <div>
      popup
      <h1>{argv}</h1>
      {import.meta.env.MODE === "development" ? "a" : "b"}
    </div>
  );
}

export default App;
