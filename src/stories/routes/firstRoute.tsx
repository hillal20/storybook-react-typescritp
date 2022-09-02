import React from "react";
import { useNavigate } from "react-router-dom";

const FirstRoute = () => {
  const navigate = useNavigate();
  const goToHomeRoute = () => {
    navigate("/");
  };
  return (
    <div className="App">
      <h1> FirstRoute </h1>
      <button onClick={goToHomeRoute}>go to home route </button>
    </div>
  );
};

export default FirstRoute;
