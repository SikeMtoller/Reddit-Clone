import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import DropDown from "./DropDown";

function NavBar() {
  const SearchCommunity = (e: React.FormEvent<HTMLFormElement>) => {};


  const SearchUser = (e: React.FormEvent<HTMLFormElement>) => {};
  return (
    <nav className="py-2 px-2 mb-2 border-b-2 border-black flex w-full justify-between">
      <Link to={"/"} className="justify-self-start">
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
      <Link to="/user?q=meni">
        <DropDown />
      </Link>
    </nav>
  );
}

export default NavBar;
