import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Submit from "./routes/Submit";
import Posts from "./components/posts/Posts";
import ProfilePage from "./routes/ProfilePage";
import PostPage from "./routes/PostPage";
import Community from "./components/Community";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Posts />} />

          <Route path="user" element={<ProfilePage />}>
            //proflie page
          </Route>
          <Route path="r" element={<Outlet />}>
            <Route path=":subreddit" element={<Community />} />
            <Route path=":subreddit/:postId" element={<PostPage />} />
          </Route>
          <Route path="submit" element={<Submit />}></Route>
        </Route>

        <Route path="/settings" element={<App />}></Route>

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
