import { useState } from "react";
import "./FeedbackItem.css";

function FeedbackItem() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState(
    "This is an example of a feedback item"
  );

  const handleClick = () => setRating((previous) => previous + 1);

  return (
    <div className="card">
      <div className="num-display">
        <span>{rating}</span>
      </div>
      <div className="text-display">{comment}</div>
      <button
        style={{
          display: "block",
          border: "none",
          borderRadius: "5px",
          padding: "5px",
          marginLeft: "5px",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        {" "}
        Increment Rating
      </button>
    </div>
  );
}

export default FeedbackItem;
