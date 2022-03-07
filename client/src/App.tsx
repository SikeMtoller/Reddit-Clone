import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { getPosts, getUsers } from "./data";
import "./styles/App.css";
import { i_post } from "./interfaces/i_post";
import { i_user } from "./interfaces/i_user";
import NavBar from "./components/NavBar";
import CreateCommunity from "./components/CreateCommunity";

type context = {
  users: () => i_user[];
  posts: () => i_post[];
};

export const AppContext = React.createContext<context | null>(null); //fix context

function App() {
  let location = useLocation();
  const [showCreateCommunity, setShowCreateCommunity] =
    useState<boolean>(false);

  return (
    <AppContext.Provider value={{ users: getUsers, posts: getPosts }}>
      <div
        className={`relative grid place-items-center ${
          showCreateCommunity && "brightness-75"
        }`}
      >
        {showCreateCommunity && (
          <div className="absolute">
            <section className="">
              <CreateCommunity />
            </section>
          </div>
        )}

        <div className="mx-4 pt-2 flex flex-col items-center">
          <NavBar />
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
          <button onClick={() => setShowCreateCommunity(!showCreateCommunity)}>
            meni
          </button>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
