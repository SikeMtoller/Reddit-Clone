import React, { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import Comment from "../components/posts/Comment";
import { getComments, getPosts } from "../data";

import { i_post } from "../interfaces/i_post";

function PostPage() {
  let { postId } = useParams();
  const { data: post, status } = useQuery<i_post>("post", fetchPost);
  async function fetchPost() {
    const res = await fetch(`http://localhost:9000/post/${postId}`);
    return res.json();
  }

  if (post) {
    const { author, body, community, title, comments, image } = post;
    return (
      <section className="flex justify-center" key={postId}>
        <div className="flex flex-col max-w-lg border-black border-2 mt-3 pl-1 pt-1 bg-white">
          <div className="flex">
            <h5 className="font-semibold">{`r/${community} ·`}</h5>
            &nbsp;
            <h5 className="text-slate-400">{`Posted by ${author}`}</h5>
          </div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p>{body}</p>

          {comments?.map((comment) => {
            return <Comment comment={comment} />;
          })}
        </div>
      </section>
    );
  } else {
    return (
      <>
        <div>nothing here</div>
      </>
    );
  }
}

export default PostPage;

//this page pops up when clicking on a post and reveals text and comments.
