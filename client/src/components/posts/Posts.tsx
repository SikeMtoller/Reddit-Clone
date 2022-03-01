import { mainModule } from "process";
import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import { i_post } from "../../interfaces/i_post";
import Post from "./Post";

function Posts() {
  const data = useContext(AppContext);

  if (data) {
    return (
      <ul>
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
