import React, { useState } from "react";

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
        className="border-black border-2 rounded-md"
      />
      <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-black border-2 my-4 rounded-md"
          type="text"
          name="title"
          id="title"
          placeholder="Title"
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border-black border-2 rounded-md"
          name="text"
          id="text"
          cols={30}
          rows={10}
        ></textarea>
      </form>
    </main>
  );
}

export default Submit;
