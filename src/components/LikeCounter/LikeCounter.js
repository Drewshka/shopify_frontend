import React, { useEffect, useState } from "react";
import "./LikeCounter.scss";

export default function LikeCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(JSON.parse(window.localStorage.getItem("count")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("count", count);
  }, [count]);

  const increaseCount = () => {
    return setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      return setCount(count - 1);
    }
  };

  return (
    <div className="Likes">
      <h3 className="Likes_counter">
        {" "}
        Likes <span>{count}</span>
      </h3>
      <button className="Likes_increment" onClick={increaseCount}>
        👍
      </button>
      <button className="Likes_decrease" onClick={decreaseCount}>
        👎
      </button>
    </div>
  );
}
