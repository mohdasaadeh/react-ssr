import React from "react";

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "40px",
        fontWeight: "bold",
      }}
    >
      Ooops, the page is not found!
    </div>
  );
};

export default {
  component: NotFoundPage,
};
