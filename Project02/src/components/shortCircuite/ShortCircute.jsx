import { useState } from "react";

const ShortCircute = () => {
   const[isLogedIn,setIsLoggedIn]=useState(true)
   const[user,setUser]=useState("")
return (
  <>
    <section className="flex items-center justify-center h-screen">
      {/* Box container */}
        <div className="bg-gray-400 p-6 shadow-2xl rounded-lg text-center w-80 text-white">
        <h1 className="text-2xl font-semibold mb-4">Welcome to Short Circuit Evaluation</h1>
        <p className="mb-8">{isLogedIn && <span>You are logged in!</span>}</p>
         <p>{user? `hello ${user}`:"Please login in!"}</p>

         <div className="flex flex-col space-y-2">
          <button className=  "bg-blue-500  px-4 py-2 rounded " onClick={()=>setIsLoggedIn(!isLogedIn)}>Toggle Login State</button>
          <button className="bg-green-500  px-4 py-2 rounded" onClick={()=>setUser("farhan")}>Set User</button>
          <button className="bg-red-500  px-4 py-2 rounded" onClick={()=>setUser("")}>Clear User</button>
        </div>
      </div>
    </section>
  </>
);
};

export default ShortCircute;
