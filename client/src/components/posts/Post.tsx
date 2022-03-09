import React, { useState } from "react";
import { i_post } from "../../interfaces/i_post";
import { getPosts } from "../../data";
import { Link, useSearchParams } from "react-router-dom";

interface Props {
  post: i_post;
}

function Post({ post }: Props) {
  const [posts, setPosts] = useState<i_post[]>(getPosts);
  const { id, community, title, text, user } = post;

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {};

  return (
    <Link //http://localhost:3000/r/meni/1
      to={`/${id}`}
      key={id}
      className="mb-1 mx-4 hover:border-zinc-800 py-2 flex border-2 border-t-slate-300"
    >
      <img
        className="w-3/12"
        src="https://www.gevim.co.il/wp-content/uploads/2013/12/default-placeholder-1024x1024-570x321.png"
        alt={title}
      />
      <article className="ml-5 flex flex-col">
        <h3 className="text-3xl  font-bold">{title}</h3>
        <div className="flex">
          <h5 className="font-semibold">{`r/${community} ·`}</h5>
          &nbsp;
          <h5 className="text-slate-400">{`Posted by ${user}`}</h5>
        </div>
        <p>{text}</p>
      </article>
    </Link>
  );
}

export default Post;
