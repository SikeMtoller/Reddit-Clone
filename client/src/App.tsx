import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import data from "./data";
import "./App.css";
import { i_post } from "./interfaces/i_post";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export const AppContext = React.createContext<i_post[] | null>(null);

function App() {
  let location = useLocation();
  const SearchCommunity = (e: React.FormEvent<HTMLFormElement>) => {};

  const SearchUser = (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <AppContext.Provider value={data}>
      <div className="mx-4 pt-2 flex flex-col items-center">
        <nav className="py-2 mb-2 border-b-2 border-black flex w-full justify-between">
          <Link to={"/"} className="justify-self-start">
            <img src="/bread-logo.png" className="w-10 h-10" alt="" />
          </Link>
          <form onSubmit={(e) => SearchCommunity(e)}>
            <label htmlFor="subreddit">
              <BsSearch className="inline text-3xl" />
            </label>
            <input
              className="border-2 rounded-md border-gray-400 ml-2"
              type="text"
              name="subreddit"
              placeholder="search Community"
            />
          </form>
          <form onSubmit={(e) => SearchUser(e)}>
            <label htmlFor="username">
              <BsSearch className="inline text-3xl" />
            </label>
            <input
              className="border-2 rounded-md border-gray-400 ml-2"
              type="text"
              name="username"
              placeholder="search User"
            />
          </form>
          <Link to={"/settings"}>
            <CgProfile className="text-3xl" />
          </Link>
        </nav>
        <div className="flex rounded-md  w-5/12 bg-slate-300">
          {location.pathname.endsWith("submit") || (
            <Link
              className=" pl-5 m-2 rounded-lg w-8/12  bg-slate-200"
              to={"/submit"}
            >
              Create Post
            </Link>
          )}
        </div>
        <Outlet />
      </div>
    </AppContext.Provider>
  );
}

export default App;
