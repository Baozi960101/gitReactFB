import React, { useState } from "react";
import Center from "./Center";
import Right from "./Right";
import Left from "./Left";
import "./index.css";

export default () => {
  const [addEdit, setAddEdit] = useState(false);
  return (
    <div className="allBox">
      <Left />
      <Center addEdit={addEdit} setAddEdit={setAddEdit} />
      <Right addEdit={addEdit} setAddEdit={setAddEdit} />
    </div>
  );
};
