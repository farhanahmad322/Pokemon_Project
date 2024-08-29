import { useState } from "react";

const ContactForm = () => {
    const [user, setUser] = useState({
        text: "",
       email: "",
        message: ""
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(user);
    };

    return (
        <>
            <div className="flex items-center justify-center bg-gray-200 min-h-screen">
                <form
                    className="p-8 rounded-xl shadow-lg w-full max-w-md bg-white"
                    onSubmit={handleOnSubmit}
                >
                    <h1 className="font-bold text-3xl text-center mb-6 text-blue-600">Contact Form</h1>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            id="text"
                            name="text"
                            required
                            value={user.text}
                            onChange={handleOnChange}
                            autoComplete="username" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                           Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            id="email"
                            name="email"
                            required
                            value={user.email}
                            onChange={handleOnChange}
                            autoComplete="email" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            placeholder="Enter your message"
                            id="message"
                            name="message"
                            required
                            value={user.message}
                            onChange={handleOnChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                            rows="4"
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition duration-200"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ContactForm;
