import React from "react";
import Center from "./Center";
import Right from "./Right";
import Left from "./Left";
import "./index.css";

export default () => {
  return (
    <div className="allBox">
      <Left />
      <Center />
      <Right />
    </div>
  );
};
