import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import DropDown from "./DropDown";

function NavBar() {
  const [communityName, setCommnuityName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  let navigate = useNavigate();

  const SearchCommunity = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = communityName;
    navigate(`/r/${name}`, { replace: true });
  };

  const SearchUser = (e: React.FormEvent<HTMLFormElement>) => {};
  return (
    <nav className="pb-2 pt-3 px-2 border-b-2 border-b-black flex w-full justify-between">
      <Link to={"/"} className="justify-self-start flex-shrink">
        <img src="/bread-logo.png" className="w-10 h-10 ml-2" alt="" />
      </Link>

      <form onSubmit={(e) => SearchCommunity(e)}>
        <Link to={"r/meni"}>
          <label htmlFor="subreddit">
            <BsSearch className="inline text-3xl" />
          </label>
        </Link>
        <input
          className="border-2 rounded-md border-gray-400 ml-2"
          type="text"
          name="subreddit"
          value={`${communityName}`}
          onChange={(e) => setCommnuityName(e.target.value)}
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
          value={`${userName}`}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="search User"
        />
      </form>

      <DropDown />
    </nav>
  );
}

export default NavBar;
