import React from "react";
import { Outlet } from "react-router-dom";
import { getCommunities } from "../data";
function Community() {
  const { id, name, title, posts, about, numberOfMembers } =
    getCommunities()[0];

  return (
    <>
      <header className="p-2">
        <h1 className="text-3xl font-bold">{title}</h1>
        <h2 className="opacity-70">{`r/${name}`}</h2>
      </header>

      <div key="id" className="flex flex-row-reverse">
        <aside className="mt-10 ml-3 border-2 border-slate-300 max-w-xs h-fit hidden md:block">
          <h3 className="bg-amber-400 py-1 px-2">About Community:</h3>
          <p className="p-2">{about}</p>
        </aside>
        <Outlet />
      </div>
    </>
  );
}

export default Community;
