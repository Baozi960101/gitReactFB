import React, { useState } from "react";

export default ({ setAccountPassword }) => {

  const [a1, setA1] = useState('');
  const [a2, setA2] = useState('');

  function submit() {
    setAccountPassword({
      account: a1,
      password: a2
    })
    setA1('')
    setA2('')
  }

  function a1Change(e) {
    setA1(e.target.value)
  }

  function a2Change(e) {
    setA2(e.target.value)
  }
  return <div>
    <input type="text" value={a1} onChange={a1Change}/>
    <input type="password" value={a2} onChange={a2Change}  />
    <button onClick={submit}>登入</button>
  </div>;
};
