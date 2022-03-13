import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";
import SignupForm from "../components/forms/SignupForm";

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // const handleSubmit = (e) => {

  // }

  return (
    <>
      <header className="mt-10">
        <article className="w-1/2 text-center">
          <h1 className="font-semibold text-4xl">Welcome to</h1>
          <h2
            className="font-bold text-6xl pl-6
        text-blue-500"
          >
            Breddit
          </h2>
        </article>
      </header>
      <main className="flex mt-10 justify-evenly">
        <LoginForm/>
        <SignupForm />
      </main>
    </>
  );
}
// <main className="flex flex-row justify-center mt-64">
//   <div className="flex flex-col items-center border-2 border-black w-6/12">
//     <h1 className="text-2xl font-semibold">Login</h1>
//     <h2 className="pl-3 pt-2">
//       By continuing, you agree to our User Agreement and Privacy Policy.
//     </h2>
//     <form className="flex flex-col">
//       <input
//         className="border-gray-400 border-2 mt-3 pl-1 rounded-xl max-w-sm"
//         type="text"
//         placeholder="USERNAME"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         className="border-gray-400 border-2 mt-3 pl-1 rounded-xl max-w-sm"
//         type="text"
//         placeholder="PASSWORD"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <Link to={"home"}>
//         <button className="mt-3 border-2 border-black ">Log In</button>
//       </Link>
//     </form>
//   </div>
// </main>

export default Login;
