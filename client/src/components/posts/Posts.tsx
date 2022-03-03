import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import { i_post } from "../../interfaces/i_post";
import Post from "./Post";
import {getPosts} from "../../data"

function Posts() {
  // const {posts} = useContext(AppContext);
  const data = getPosts();
  if (data) {
    return (
      <ul className="w-full mt-10">
        {data.map((item) => {
          return (
            <li>
              <Post post={item}></Post>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return (
      <div>
        <h1>NOTHING HERE!!</h1>
      </div>
    );
  }
}

export default Posts;
