import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // const handleSubmit = (e) => {

  // }

  return (
    <>
      <main className="flex mt-10 justify-evenly">
        <section className="flex flex-col">
          <h1 className="font-bold text-3xl">Login</h1>
          <LoginForm />
        </section>
        <section>
          <h1 className="font-bold text-3xl">Sign up</h1>
          <LoginForm/>
        </section>
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
