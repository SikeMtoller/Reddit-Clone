import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import Comment from "../components/posts/Comment";
import { getComments, getPosts } from "../data";

function PostPage() {
  let params = useParams();
  let post = getPosts()[2];
  const { community, text, title, id, user, comments, image } = post;
  return (
    <div className="flex flex-col max-w-lg border-black border-2 mt-3">
      <div className="flex">
        <h5 className="font-semibold">{`r/${community} ·`}</h5>
        &nbsp;
        <h5 className="text-slate-400">{`Posted by ${user}`}</h5>
      </div>
      <h2 className="text-3xl font-bold">{title}</h2>
      <p>{text}</p>
      

  
      {comments?.map((comment)=> {
        return <Comment comment={comment}/>
      })}

    
      
    </div>
  );
}

export default PostPage;

//this page pops up when clicking on a post and reveals text and comments.
