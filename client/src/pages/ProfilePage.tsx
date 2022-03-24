import React from "react";
import { i_post } from "../interfaces/i_post";
import Post from "../components/posts/Post";
// import Profile from "../components/profile/Profile";
import { useParams } from "react-router-dom";
import { i_user } from "../interfaces/i_user";

// interface Props {
//   posts: i_post[];
// }
function profilePage() {
  // const { user } = useParams();
  const posts: i_post[] = [];
  return (
    <div className="flex flex-grow mt-4">
      <main className="flex flex-col">
        {posts.map((post) => {
          return <Post post={post}></Post>; //make authentication work.
        })}
      </main>
      <article className="hidden lg:block">
        {/* <Profile></Profile>  //add user prop */}
      </article>
    </div>
  );
}

export default profilePage;

//Switch User code, add Pages, Fix contexts

//posts + profile component
