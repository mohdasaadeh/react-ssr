import React from "react";

export const Home = () => {
  return (
    <section>
      <button
        onClick={() => {
          console.log("clicked");
        }}
      >
        <span>Hello world</span>
      </button>
    </section>
  );
};
