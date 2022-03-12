import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { getPosts, getUsers } from "./data";
import "./styles/App.css";
import { i_post } from "./interfaces/i_post";
import { i_user } from "./interfaces/i_user";
import NavBar from "./components/navigation/NavBar";
import CreateCommunity from "./components/CreateCommunity";

type AppContextType = {
  users: () => i_user[];
  posts: () => i_post[];
  showCreateCommunity: boolean;
  setShowCreateCommunity: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = React.createContext<AppContextType | null>(null); //fix context

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
              <CreateCommunity />
            </>
          )}
          <NavBar />
        </div>
        <div className="rounded-md bg-slate-300 w-6/12 flex mt-6">
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
    </AppContext.Provider>
  );
}

export default App;
