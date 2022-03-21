import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import { ImCancelCircle } from "react-icons/im";
import Post from "../posts/Post";
function CreateCommunity() {
  const [name, setName] = useState<String>("");
  const [title, setTitle] = useState<String>("");
  const [about, setAbout] = useState<String>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Name is: ${name} title is ${title} about is ${about}`);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, title, about }),
    };

    fetch("http://localhost:9000/community", requestOptions).then(() =>
      console.log("New Community!")
    );
  };

  return (
    <>
      <div className="absolute w-full h-full bg-black opacity-70"></div>
      <div
        className={`absolute min-w-full min-h-full flex items-center justify-center`}
      >
        <div className="border-2 border-gray-400">
          <section className="h-96 w-96">
            <div className="bg-white h-full flex flex-col px-2">
              <header className="flex justify-between border-b-gray-200 border-b-2">
                <h1 className="py-3 px-2">Create a Community</h1>
                <button className="pr-1">
                  <ImCancelCircle />
                </button>
              </header>
              <form
                className="w-full h-full flex flex-col relative"
                onSubmit={(e) => handleSubmit(e)}
              >
                <label htmlFor="name" className="inline-block mt-3 mb-1">
                  Name
                </label>
                <h2 className="opacity-60 text-xs mb-4">
                  Names cannot have spaces (e.g., "r/bookclub" not "r/book
                  club"), must be between 3-21 characters, and underscores ("_")
                  are the only special characters allowed
                </h2>
                <input
                  autoComplete="off"
                  minLength={3}
                  maxLength={21}
                  required
                  value={`${name}`}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="r/"
                  className="border-2 border-gray-200 rounded-lg pl-1 mb-2"
                />
                <input
                  autoComplete="off"
                  minLength={3}
                  maxLength={100}
                  required
                  value={`${title}`}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Short Description"
                  className="border-2 border-gray-200 rounded-lg pl-1 mb-2"
                />
                <textarea
                  name="about"
                  id="about"
                  placeholder="About This Community..."
                  minLength={3}
                  maxLength={250}
                  value={`${about}`}
                  onChange={(e) => setAbout(e.target.value)}
                  required
                  cols={30}
                  rows={5}
                  className="border-2 border-gray-200 rounded-lg pl-1 "
                ></textarea>
                <footer className="absolute bottom-0 right-0 pb-2 pr-3">
                  <button className="text-white bg-blue-500 font-semibold rounded-lg py-2 px-3 ">
                    Create a Community
                  </button>
                </footer>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default CreateCommunity;
