import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./App.css";
function App() {
  const SearchCommunity = (e: React.FormEvent<HTMLFormElement>) => {};

  const SearchUser = (e: React.FormEvent<HTMLFormElement>) => {};

  let location = useLocation();
  console.log(location);
  return (
    <div className="mx-4">
      <nav className="py-2 mb-2 border-b-2 border-black flex w-full justify-between">
        <Link to={"/"} className="justify-self-start">
          Home
        </Link>
        <form onSubmit={(e) => SearchCommunity(e)}>
          <label htmlFor="subreddit">Search Community</label>
          <input
            className="border-black border-2 ml-2"
            type="text"
            name="subreddit"
          />
        </form>
        <form onSubmit={(e) => SearchUser(e)}>
          <label htmlFor="username">Search User</label>
          <input
            className="border-black border-2 ml-2"
            type="text"
            name="username"
          />
        </form>

        <Link to={"/settings"}>profile</Link>
      </nav>
      <div className="flex justify-center">
        {location.pathname.endsWith("submit") ||  
          <Link className="" to={"/submit"}>
            Create Post
          </Link>
        }
      </div>
      <Outlet />
    </div>
  );
}

export default App;
