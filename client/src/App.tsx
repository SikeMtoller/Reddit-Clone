import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { getPosts, getUsers } from "./data";
import "./styles/App.css";
import { i_post } from "./interfaces/i_post";
import { i_user } from "./interfaces/i_user";
import NavBar from "./components/navigation/NavBar";
import CreateCommunity from "./components/CreateCommunity";

type context = {
  users: () => i_user[];
  posts: () => i_post[];
  showCreateCommunity: boolean;
  setShowCreateCommunity: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = React.createContext<context | null>(null); //fix context

function App() {
  let location = useLocation();
  const [showCreateCommunity, setShowCreateCommunity] =
    useState<boolean>(false);

  const [setVisible, setSetVisible] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        users: getUsers,
        posts: getPosts,
        showCreateCommunity,
        setShowCreateCommunity,
      }}
    >
      <div className={`relative grid place-items-center`}>
        <div className="mx-4 flex flex-col items-center min-w-full bg-white">
          {showCreateCommunity && (
            <>
              <div
                className={`absolute w-full h-full ${
                  showCreateCommunity && "bg-black opacity-70 "
                }`}
              ></div>
              <div
                className={`absolute min-w-full min-h-full flex items-center justify-center`}
              >
                <div className="border-2 border-gray-400">
                  <section className="h-96 w-96">
                    <CreateCommunity />
                  </section>
                </div>
              </div>
            </>
          )}
          <NavBar />

          <div className="rounded-md bg-slate-300 w-6/12 flex">
            {location.pathname.endsWith("submit") || (
              <Link
                className="pl-5 m-2 rounded-lg bg-slate-200 w-full"
                to={"/submit"}
              >
                Create Post
              </Link>
            )}
          </div>

          <main className="main-sizes w-6/12 ">
            <Outlet />
          </main>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
