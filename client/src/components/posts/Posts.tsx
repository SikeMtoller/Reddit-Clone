import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { AppContext } from "../../App";
import { i_post } from "../../interfaces/i_post";
import Post from "./Post";
function Posts() {
  const {
    data: posts,
    isError,
    status,
    isLoading,
  } = useQuery("posts", fetchPosts);
  async function fetchPosts() {
    const res = await fetch("http://localhost:9000/home");
    return res.json();
  }

  if (isLoading) {
    return <div key={"loading"}>Loading Data...</div>;
  }

  if (isError) {
    return (
      <div>
        <h1 key={"error"}>Error fetching Data..</h1>
      </div>
    );
  } else {
    return (
      <ul className="w-full mt-10">
        {posts.map((item: i_post) => {
          return (
            <li key={item._id}>
              <Post post={item}></Post>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Posts;
