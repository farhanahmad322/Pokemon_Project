import { useState } from "react";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;

      case "lastName":
        setLastName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      case "phone":
        setPhoneNumber(value);
        break;

      default:
        break;
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    };
    console.log(formData);
  };

  return (
    <>
      {/* Information Section */}
      <section className="bg-blue-100 p-4 shadow-md text-center fixed w-full top-0 left-0">
        <p>
          Hello, my name is <span className="font-bold">{firstName} {lastName}</span>. 
          My email address is <span className="font-bold">{email}</span> 
          and my phone number is <span className="font-bold">{phoneNumber}</span>.
        </p>
      </section>

      {/* Registration Form */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100 pt-20">
        <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md" onSubmit={handleFormSubmit}>
          <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
          <p className="mb-6 text-center text-gray-600">
            Please fill in this form to create an account
          </p>

          {/* First Name */}
          <div className="flex items-center mb-4">
            <label htmlFor="firstName" className="w-1/3 font-semibold">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              required
              className="w-2/3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={firstName}
              onChange={handleInputChange}
            />
          </div>

          {/* Last Name */}
          <div className="flex items-center mb-4">
            <label htmlFor="lastName" className="w-1/3 font-semibold">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              required
              className="w-2/3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={lastName}
              onChange={handleInputChange}
            />
          </div>

          {/* Email */}
          <div className="flex items-center mb-4">
            <label htmlFor="email" className="w-1/3 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              required
              className="w-2/3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={email}
              onChange={handleInputChange}
            />
          </div>

          {/* Password */}
          <div className="flex items-center mb-4">
            <label htmlFor="password" className="w-1/3 font-semibold">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              required
              className="w-2/3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={password}
              onChange={handleInputChange}
            />
          </div>

          {/* Phone Number */}
          <div className="flex items-center mb-6">
            <label htmlFor="phone" className="w-1/3 font-semibold">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Your Number"
              required
              className="w-2/3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={phoneNumber}
              onChange={handleInputChange}
            />
          </div>

          {/* Terms & Privacy */}
          <p className="text-sm text-gray-600 mb-6 text-center">
            By creating an account you agree to our{' '}
            <a href="#" className="text-blue-500 hover:underline">Terms & Privacy</a>
          </p>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition duration-200"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Registration;
