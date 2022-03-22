import React, { useState } from "react";
import { Link } from "react-router-dom";

function Submit() {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [community, setCommunity] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body, community }),
    };

    fetch("http://localhost:9000/post", requestOptions).then(() =>
      console.log("New Post!")
    );
  };

  return (
    <section className="flex flex-row justify-center">
      <main className="w-6/12">
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
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="pl-1 border-neutral-400 border-2 rounded-md"
            name="text"
            id="text"
            cols={30}
            rows={10}
          ></textarea>
          <button
            type="submit"
            className="py-2 px-3 w-full rounded-lg bg-green-500"
          >
            Create Post
          </button>
        </form>
      </main>
    </section>
  );
}

export default Submit;
