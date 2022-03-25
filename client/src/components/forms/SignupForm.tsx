import React, { useReducer, useState } from "react";
import { i_user } from "../../interfaces/i_user";
import { parseISO } from "date-fns";
function SignupForm() {
  const [user, setUser] = useState<i_user>({
    id: "1",
    fullname: "",
    email: "",
    birthday: "",
    username: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { birthday, email, fullname, password, username } = user;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        birthday,
        email,
        fullname,
        password,
        username,
      }),
    };

    fetch("http://localhost:9000/register", requestOptions).then(() =>
      console.log("New User!")
    );
  };

  return (
    <div className="flex-1 max-w-2xl mx-2">
      <div>
        <div className="mt-5 md:mt-0 md:col-span-2 ">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <h1 className="font-bold text-3xl mb-3">Sign Up</h1>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      value={user.fullname}
                      onChange={(e) =>
                        setUser({ ...user, fullname: e.target.value })
                      }
                      autoComplete="given-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      value={`${user.password}`}
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                      autoComplete="family-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      value={`${user.email}`}
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                      autoComplete="email"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Birth Date
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="date"
                      value={`${user.birthday}`}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          birthday: e.target.value,
                        })
                      }
                      className="mt-1 block w-max py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    ></input>
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      User name
                    </label>
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      value={`${user.username}`}
                      onChange={(e) =>
                        setUser({
                          ...user,
                          username: e.target.value,
                        })
                      }
                      autoComplete="street-address"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6">
                    <label className="block text-sm font-medium text-gray-700">
                      Cover photo
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
