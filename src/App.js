import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";

function App() {
  // const history = useHistory();

  // const [isLogin, setIsLogin] = useState(0);
  // const [accountPassword, setAccountPassword] = useState({
  //   account: "",
  //   password: "",
  // });

  // useEffect(() => {

  //   const token = window.localStorage.getItem("loginToken");
  //   if ((accountPassword.account === "" || accountPassword.password === "") && !token) {
  //     return;
  //   }

  //   fetch(`http://localhost:3001/login`, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //       credentials: "include",
  //     },
  //     body: JSON.stringify({
  //       a1: accountPassword.account,
  //       a2: accountPassword.password,
  //       token: token,
  //     }),
  //   })
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const { message, status, userToken } = data; // 預設flase，避免後端掛掉
  //       if (userToken) {
  //         window.localStorage.setItem("loginToken", userToken);
  //       }
  //       setIsLogin(status);
  //       if (!status) {
  //         window.alert(message);
  //       }
  //     });
  // }, [accountPassword.account, accountPassword.password]);

  // isLogin變動後觸發，解決下面Route的render只會射後不理的問題（只執行一次）
  // useEffect(() => {
  //   if (isLogin) {
  //     history.push("/home");
  //   } else {
  //     history.push("/");
  //   }
  // }, [isLogin]);

  return (
    <Switch>
      {/* 一開始的保護，沒登入去login
      <Route
        path="/home"
        render={function ({ location }) {
          return isLogin ? (
            <Home />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          );
        }}
      /> */}
      {/* <Route path="/home">
          <Home />
        </Route> */}

      {/* <Route path="/">
        <Login setAccountPassword={setAccountPassword} />
      </Route> */}
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
