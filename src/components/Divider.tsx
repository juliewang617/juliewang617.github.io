import React from "react";
import "../styles/Styles.css";
import flower from "../assets/flower.svg";

const Divider: React.FC = () => {
  return (
    <div className="divider">
      <hr />
      <img src={flower}></img>
      <hr />
    </div>
  );
};

export default Divider;
