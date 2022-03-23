import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { AppContext } from "../../App";
import { i_post } from "../../interfaces/i_post";
import Post from "./Post";

function Posts() {
  const posts: i_post[] = useOutletContext();
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

export default Posts;
