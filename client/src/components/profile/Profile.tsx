import React from "react";
import { i_user } from "../../interfaces/i_user";


interface Props {
  user: i_user;
}
function Profile() {
  // const { fullname, email, username: nickname, about } = user;
  return (
    //make responsive VISIBILITY BEN ZONA
    <section className="shadow-xl border-2 border-sky-500 rounded-lg min-h-fit w-80 ml-3 ">
      {/* <div className="bg-sky-500 flex items-center mb-9">
        <img
          className="half-push mt-10 ml-3 rounded-md shadow-sm w-5/12 mr-3 border-2 border-white -mb-8"
          src={image}
          alt={nickname}
        />
        <h2 className="font-bold text-xl pt-6">{fullname}</h2>
      </div>
      <div className="px-2">
        <h4 className="text-lg font-semibold">{`u/${nickname}`}</h4>
        <p className="opacity-60 pb-1">{about}</p>
        <h3 className="italic">{email}</h3>
      </div> */}
    </section>
  );
}

export default Profile;
