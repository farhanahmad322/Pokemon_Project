import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUsername((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(username);
    
  };

  return (
    <>
      <div className="bg-gray-200 flex items-center justify-center min-h-screen">
        <form
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
          onSubmit={handleFormSubmit}
        >
          <h1 className="text-2xl font-bold mb-4">Login Form</h1>

          {/* Username Input */}
          <div className="flex items-center mb-4">
            <label htmlFor="username" className="w-1/3 font-semibold">
              Username
            </label>
            <input
              type="text"
              id="username" // Added id attribute
              name="username"
              placeholder="Enter your username"
              value={username.username}
              onChange={handleOnChange}
              autoComplete="username" // Added autocomplete attribute
              className="w-2/3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center mb-4">
            <label htmlFor="password" className="w-1/3 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password" // Added id attribute
              name="password"
              placeholder="Enter your password"
              value={username.password}
              onChange={handleOnChange}
              autoComplete="new-password" // Added autocomplete attribute
              className="w-2/3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition duration-200"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
