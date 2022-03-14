import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { i_post } from "../../interfaces/i_post";
import Post from "./Post";

import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState<i_post[]>();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await axios.get("http://localhost:9000/home");
        setPosts(res.data);
        console.log(posts);
      } catch {
        console.log("FAILED TO FETCH");
      }
    }
  },[]);

  if (posts) {
    return (
      <ul className="w-full mt-10">
        {posts.map((item) => {
          
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



