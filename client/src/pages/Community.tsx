import React from "react";
import { useQuery } from "react-query";
import { Outlet, useParams } from "react-router-dom";
import { getCommunities } from "../data";
import i_community from "../interfaces/i_community";

function Community() {
  let { subreddit } = useParams();

  const { data, isError, error, isLoading } = useQuery<i_community[], Error>(
    "community",
    fetchCommnuity
  );
  async function fetchCommnuity() {
    const res = await fetch(
      `http://localhost:9000/community?name=r/${subreddit}`
    );
    return res.json();
  }

  if (isError) {
    return <div>ERROR</div>;
  } else if (!data) {
    return <div>DATA NOT AVAILABLE</div>;
  } else {
    const { name, title, posts, about, numberOfMembers } = data[0];
    return (
      <>
        <header className="ml-5 mt-4">
          <h1 className="text-3xl font-bold">{title}</h1>
          <h2 className="opacity-70 text-xl">{`r/${name}`}</h2>
        </header>

        <div key="id" className="flex flex-row-reverse">
          <aside className="mt-10 ml-3 border-2 border-slate-300 max-w-xs h-fit hidden md:block">
            <h3 className="bg-amber-400 py-1 px-2">About Community:</h3>
            <p className="p-2 bg-white">{about}</p>
          </aside>
          <Outlet />
        </div>
      </>
    );
  }
}

export default Community;
