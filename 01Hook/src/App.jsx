import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  const [character, setCharacter] = useState("P");

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const addChareter = () => {
    setCharacter(String.fromCharCode(character.charCodeAt(0) + 1));
  };

  const removeChareter = () => {
    setCharacter(String.fromCharCode(character.charCodeAt(0) - 1));
  };

  return (
    <>
      <nav className="text-3xl font-bold text-white bg-gray-400 p-4">
        Chai aur code
      </nav>

      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-3xl font-bold text-white p-4 ">
          Counter Number : {counter}
        </h2>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded m-2 hover:bg-blue-700"
          onClick={addValue}
        >
          Add Value
        </button>{" "}
        <br />
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded m-2 hover:bg-blue-700"
          onClick={removeValue}
        >
          Remove Value
        </button>
      </div>

      <div  className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white p-4 ">
          Counter Chareter : {character}
        </h2>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded m-2 hover:bg-blue-700"
          onClick={addChareter}
        >
          Add Value
        </button>{" "}
        <br />
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded m-2 hover:bg-blue-700"
          onClick={removeChareter}
        >
          Remove Value
        </button>
      </div>
    </>
  );
}

export default App;
