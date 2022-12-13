import React from "react";

const HomePage = () => {
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

export default {
  component: HomePage,
};
