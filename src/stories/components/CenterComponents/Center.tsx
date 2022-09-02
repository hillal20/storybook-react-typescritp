import React from "react";
import "./Center.css";

type CenterProps = {
  children: React.ReactElement;
};
const Center = ({ children }: CenterProps) => {
  return <div className="center">{children} </div>;
};
export default Center;
