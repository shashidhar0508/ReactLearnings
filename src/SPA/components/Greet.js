import React from "react";
export const Greet = ({ match }) => {
  return (
    <div className="head">
      <h1>Welcome{match.params.username}</h1>
    </div>
  );
};
