import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";

function App() {

  const history = useHistory();

  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    fetch('http://localhost:3001/login/status').then(function (response) {
      return response.json()
    }).then(data => {
      const { status = false } = data // 預設flase，避免後端掛掉
      setIsLogin(status)
    })
  }, [])

  // isLogin變動後觸發
  useEffect(() => {
    if (isLogin) {
      history.push('/home')
    } else {
      history.push('/login')
    }
  }, [isLogin])

  return (
      <Switch>
        {/* 一開始的保護，沒登入去login */}
        <Route
          path="/home"
          render={function ({ location }) {
            return isLogin ? (
              <Home />
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location },
                }}
              />
            );
          }}
        />
        {/* <Route path="/home">
          <Home />
        </Route> */}

        <Route path="/">
          <Login />
        </Route>
      </Switch>
  );
}

export default App;
