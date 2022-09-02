import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const goToFirstRoute = () => {
    navigate("/settings/user/one");
  };
  return (
    <div className="App">
      <button onClick={goToFirstRoute}>go to home route </button>
    </div>
  );
};

export default Home;
