import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const goToFirstRoute = () => {
    navigate("/firstRoute");
  };
  return (
    <div className="App">
      <h1>hello world </h1>
      <button onClick={goToFirstRoute}>go to first route </button>
    </div>
  );
};

export default Home;
