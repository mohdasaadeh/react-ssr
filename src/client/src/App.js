import React from "react";

const App = () => {
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

export default App;
