import React, { useState } from "react";
import { Link } from "react-router-dom";

function Submit() {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [community, setCommunity] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};
  return (
    <main className="">
      <h2 className="border-black border-b-2 font-semibold my-8">
        Create a Post
      </h2>

      <input
        value={community}
        onChange={(e) => setCommunity(e.target.value)}
        type="text"
        placeholder="Choose a community"
        className="pl-1 border-neutral-400 border-2 rounded-md"
      />
      <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="pl-1 border-neutral-400 border-2 my-4 rounded-md"
          type="text"
          name="title"
          id="title"
          placeholder="Title"
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="pl-1 border-neutral-400 border-2 rounded-md"
          name="text"
          id="text"
          cols={30}
          rows={10}
        ></textarea>
        <Link to={"/user/:username"}>
          <button
            type="submit"
            className="py-2 px-3 w-full rounded-lg bg-green-500"
          >
            Create Post
          </button>
        </Link>
      </form>
    </main>
  );
}

export default Submit;
