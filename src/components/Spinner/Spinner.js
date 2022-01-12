import React from "react";
import "./Spinner.scss";

const Spinner = () => {
  return (
    <>
      <section className="load_container">
        <div className="loader"></div>
        <p className="load_text">Loading...</p>
      </section>
    </>
  );
};

export default Spinner;
