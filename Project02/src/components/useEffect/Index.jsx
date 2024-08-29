import { useState, useEffect } from "react";

const ReactUseEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(()=>{

    console.log(name);
    
  },[name])

  useEffect(()=>{
    document.title=`count: ${count}`
  },[count]);



  return (
    <>
      <div className="bg-gray-200 flex items-center justify-center min-h-screen">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">useEffect Hook</h1>
          <p className="text-xl text-gray-700 mb-6">Count: {count}</p>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 mb-6"
          >
            Increase
          </button>

          <div className="mb-4">
            <p className="flex justify-center items-center mb-4 text-lg text-gray-700">
              Name: <span className="font-semibold text-blue-600 ml-2">{name}</span>
            </p>
            <input
              type="text"
              placeholder="Type your name"
              id="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full max-w-xs mx-auto p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReactUseEffect;
