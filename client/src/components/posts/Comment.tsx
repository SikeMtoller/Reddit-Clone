import React, { useState } from "react";
import i_comment from "../../interfaces/i_comment";

interface Props {
  comment: i_comment;
}

function Comment({ comment }: Props) {
  const [likeColor, setLikeColor] = useState<string>("black");
  const [numLikes, setNumLikes] = useState<number>(comment.likes);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const clickBtn = e.currentTarget.innerText;

    if (clickBtn === "like") {
      switch (likeColor) {
        case "black":
          setLikeColor(() => "green-400");
          setNumLikes(() => {
            const newNum = numLikes + 1;
            return newNum;
          });
          break;
        case "green-400":
          setLikeColor(() => "black");
          setNumLikes(() => {
            const newNum = numLikes - 1;
            return newNum;
          });
          break;
        case "red-500":
          setLikeColor(() => "green-400");
          setNumLikes(() => {
            const newNum = numLikes + 2;
            return newNum;
          });
          break;
      }
    }
    if (clickBtn === "dislike") {
      switch (likeColor) {
        case "black":
          setLikeColor(() => "red-500");
          setNumLikes(() => {
            const newNum = numLikes - 1;
            return newNum;
          });
          break;
        case "green-400":
          setLikeColor(() => "red-500");
          setNumLikes(() => {
            const newNum = numLikes - 2;
            return newNum;
          });
          break;
        case "red-500":
          setLikeColor(() => "black");
          setNumLikes(() => {
            const newNum = numLikes + 1;
            return newNum;
          });
          break;
      }
    }
  };

  const { id, text, user } = comment;
  return (
    <div key={id} className="mt-6 pl-2 pb-2">
      <h3 className="font-semibold text-xl">{`u/${user}`}</h3>
      <p>{text}</p>

      <div className="flex mt-2">
        <button
          onClick={(e) => handleClick(e)}
          className="border-2 border-emerald-300"
        >
          like
        </button>
        <span className={`text-${likeColor}`}>{numLikes}</span>
        <button onClick={handleClick} className="border-2 border-emerald-300">
          dislike
        </button>
      </div>
    </div>
  );
}

export default Comment;
