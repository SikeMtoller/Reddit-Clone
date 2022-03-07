import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

// const handleSubmit = (e) => {
  
// }

  return (
    <div className="flex flex-col items-center border-2 border-black">
      <h1 className="text-2xl font-semibold">Login</h1>
      <h2>
        By continuing, you agree to our User Agreement and Privacy Policy.
      </h2>
      <form className="flex flex-col">
        <input
          className="border-gray-400 border-2 mt-3 pl-1 rounded-xl max-w-sm"
          type="text"
          placeholder="USERNAME"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border-gray-400 border-2 mt-3 pl-1 rounded-xl max-w-sm"
          type="text"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to={"home"}>
        <button className="mt-3 border-2 border-black ">Log In</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
