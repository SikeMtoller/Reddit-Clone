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

    if (clickBtn === "like" && likeColor == "green-400") {
      setLikeColor(() => "black");
    } else if (clickBtn === "dislike" && likeColor == "red-500") {
      setLikeColor(() => "black");
    } else if (clickBtn === "like") {
      setLikeColor(() => "green-400");
    } else {
      setLikeColor(() => "red-500");
    }
  };

  const { id, text, user } = comment;
  return (
    <div key={id} className="mt-8">
      <h3 className="font-semibold text-xl">{user}</h3>
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
