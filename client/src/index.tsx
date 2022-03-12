import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Submit from "./pages/Submit";
import Posts from "./components/posts/Posts";
import ProfilePage from "./pages/ProfilePage";
import PostPage from "./pages/PostPage";
import Community from "./pages/Community";
import Login from "./pages/Login";
import Settings from "./pages/Settings";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Posts />} />
          <Route path="user" element={<ProfilePage />}></Route>
          <Route path="r" element={<Community />}>
            <Route path=":subreddit" element={<Posts />} />
          </Route>
          <Route path="submit" element={<Submit />}></Route>
          <Route path=":postId" element={<PostPage />} />
          <Route path="/settings" element={<Settings />}></Route>
        </Route>
        <Route index element={<Login />} />
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
