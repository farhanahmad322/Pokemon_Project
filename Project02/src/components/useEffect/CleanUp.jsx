import { useEffect, useState } from "react";

const CleanUp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <>
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center min-h-screen">
        <div className="text-center bg-white p-10 rounded-2xl shadow-xl transform transition duration-500 hover:scale-105">
          <p className="text-3xl font-bold text-gray-900 mb-4">
            My Subscribers on YouTube
          </p>
          <div className="text-6xl font-extrabold text-blue-600 mb-6 animate-pulse">
            {count}
          </div>
          <h1 className="text-2xl font-medium text-gray-800">
            Subscribers  Realtime Counter
          </h1>
          <div className="mt-6">
            <img
              src="https://img.icons8.com/color/96/000000/youtube-play.png"
              alt="YouTube Icon"
              className="w-16 h-16 mx-auto animate-bounce"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CleanUp;
