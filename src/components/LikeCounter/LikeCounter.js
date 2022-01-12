import React, { useEffect, useState } from "react";
// import "./styles.css";

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
  //   const decreaseCount = () => {
  //     return setCount(count - 1);
  //   };

  return (
    <div className="App">
      <h1> Likes {count} </h1>
      <button onClick={increaseCount}>👍</button>
      {/* <button onClick={decreaseCount}>👎</button> */}
    </div>
  );
}
