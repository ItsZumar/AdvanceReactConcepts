import { useState } from "react";
import Button from "./components/Button";
import "./App.css";

const btnData = [
  { id: 0, color: "#ffffff" },
  { id: 1, color: "#ff0000" },
  { id: 2, color: "#00ff00" },
  { id: 3, color: "#0000ff" },
  { id: 4, color: "#ffff00" },
  { id: 5, color: "#ff00ff" },
  { id: 6, color: "#00ffff" },
  { id: 7, color: "#ff8000" },
  { id: 8, color: "#8000ff" },
  { id: 9, color: "#0080ff" },
  { id: 10, color: "#ff0080" },
  { id: 11, color: "#80ff00" },
];

function App() {
  const [bgColor, setBgColor] = useState<string>("#ffffff");

  const onBtnClick = (color: string) => {
    setBgColor(color);
  };

  return (
    <div className="flex  w-full h-screen items-end justify-center" style={{ backgroundColor: bgColor }}>
      <div className="flex bg-black w-2/3 h-[60px] rounded-3xl justify-evenly items-center mb-[20px]">
        {btnData.map((data) => (
          <Button btnColor={data.color} onBtnClick={() => onBtnClick(data.color)} />
        ))}
      </div>
    </div>
  );
}

export default App;
