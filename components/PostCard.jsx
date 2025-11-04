import React, { useState } from "react";
import "./PostCard.css";

const PostCard = ({ title, body }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="post-card">
      <h3 className="post-title">{title}</h3>
      <p className="post-content">{body}</p>
      <div className="post-footer">
        <button
          className={`post-button ${isClicked ? "clicked" : ""}`}
          onClick={handleButtonClick}
        >
          {isClicked ? "Tombol sudah diklik" : "Silakan Klik"}
        </button>
      </div>
    </div>
  );
};

export default PostCard;
