import React, { useState } from "react";

export default ({ setAccountPassword }) => {
  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");

  function submit() {
    setAccountPassword({
      account: a1,
      password: a2,
    });
    setA1("");
    setA2("");
  }

  function register() {
    if (a1 === "" || a2 === "") {
      alert("輸入帳密");
      return;
    }
    fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: a1,
        pwd: a2,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        // TODO del
        console.log("data", data);
      });
  }

  function a1Change(e) {
    setA1(e.target.value);
  }

  function a2Change(e) {
    setA2(e.target.value);
  }
  return (
    <div>
      <input type="text" value={a1} onChange={a1Change} />
      <input type="text" value={a2} onChange={a2Change} />
      <button onClick={submit}>登入</button>
      <button onClick={register}>註冊</button>
    </div>
  );
};
