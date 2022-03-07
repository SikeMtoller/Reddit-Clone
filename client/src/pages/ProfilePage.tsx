import React from "react";
import { getPosts, getUsers } from "../data";
import Post from "../components/posts/Post";
import Profile from "../components/profile/Profile";
function profilePage() {
  const posts = getPosts();
  const user = getUsers()[0];
  return (
    <div className="flex flex-grow mt-4">
      <main className="flex flex-col">
        {posts.map((post) => {
          return <Post post={post}></Post>; //make authentication work.
        })}
      </main>
      <article className="hidden lg:block">
        <Profile user={user}></Profile>
      </article>
    </div>
  );
}

export default profilePage;

//Switch User code, add Pages, Fix contexts

//posts + profile component
