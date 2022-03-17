import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import Comment from "../components/posts/Comment";
import { getComments, getPosts } from "../data";

function PostPage() {
  let { postId } = useParams();
  console.log(postId);
  let post = getPosts()[2];
  const {
    community,
    body: text,
    title,
    _id: id,
    author: user,
    comments,
    image,
  } = post;
  return (
    <section className="flex justify-center" key={postId}>
      <div className="flex flex-col max-w-lg border-black border-2 mt-3 pl-1 pt-1 bg-white">
        <div className="flex">
          <h5 className="font-semibold">{`r/${community} ·`}</h5>
          &nbsp;
          <h5 className="text-slate-400">{`Posted by ${user}`}</h5>
        </div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p>{text}</p>

        {comments?.map((comment) => {
          return <Comment comment={comment} />;
        })}
      </div>
    </section>
  );
}

export default PostPage;

//this page pops up when clicking on a post and reveals text and comments.
