import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind test</h1>
      <div className="flex">
        <Card username="Sara" btnText="click me" />
        <Card username="Aaila" />
      </div>
    </>
  );
}

export default App;
