import { useState } from "react";

const Usestate = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    setCount(count + step);
  };

  const handleDecrement = () => {
    if (step > 0) {
      setCount(count - step);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="bg-gradient-to-br from-green-400 to-blue-500 min-h-screen flex items-center justify-center">
        <div className="bg-white p-10 rounded-xl shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-3xl text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
            useState Hook!
          </h1>
          <p className="text-5xl font-semibold text-blue-600 mb-8 animate-fade-in-slow">
            {count}
          </p>

          <div className="mb-6">
            <label className="mr-3 text-lg font-medium text-gray-700">
              Step:
            </label>
            <input
              className="border p-2 rounded-lg shadow-inner text-center w-20 text-lg"
              type="number"
              min="0"
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
            />
          </div>

          <div className="flex justify-center space-x-4">
            <button
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-bold w-40 h-12 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              onClick={handleIncrement}
              disabled={step < 0}
            >
              Increment
            </button>

            <button
              className="bg-gradient-to-r from-red-400 to-red-500 text-white font-bold w-40 h-12 rounded-full hover:from-red-500 hover:to-red-600 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              onClick={handleDecrement}
              disabled={count <= 0 || step <= 0}
            >
              Decrement
            </button>

            <button
              className="bg-gradient-to-r from-purple-400 to-purple-500 text-white font-bold w-40 h-12 rounded-full hover:from-purple-500 hover:to-purple-600 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Usestate;
