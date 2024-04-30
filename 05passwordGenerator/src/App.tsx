import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState<number>(8);
  const [numAllowed, setNumAllowed] = useState<boolean>(false);
  const [charAllowed, setCharAllowed] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const passwordRef = useRef(null);

  const copyHandler = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="flex bg-black flex-col items-center h-screen ">
      <h1 className="text-4xl text-center pt-[20px] text-white">Password Generator</h1>
      {/* card */}
      <div className="bg-slate-800 p-[20px] mt-[40px] rounded-lg">
        <div>
          <input
            type="text"
            ref={passwordRef}
            value={password}
            className="p-[10px] w-[500px] rounded-xl text-[18px] text-amber-600"
          />
          <button
            className="bg-blue-700 p-[10px] rounded-xl text-gray-50 ml-[10px] w-[100px] text-2xl"
            onClick={copyHandler}
          >
            Copy
          </button>
        </div>
        <div className="flex py-[20px] items-center">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              value={length}
              min={6}
              max={100}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="cursor-pointer"
            />
            <label className="text-amber-600 text-xl px-[10px]">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" onChange={() => setNumAllowed((prev) => !prev)} />
            <label className="text-amber-600 text-xl px-[10px]">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" onChange={() => setCharAllowed((prev) => !prev)} />
            <label className="text-amber-600 text-xl px-[10px]">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
