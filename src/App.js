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
  const [accountPassword, setAccountPassword] = useState({ account: '', password: '' })

  useEffect(() => {
    if (accountPassword.account === '' || accountPassword.password === '') {
      return
    }
    
    fetch(`http://localhost:3001/login/status?a1=${accountPassword.account}&a2=${accountPassword.password}`).then(function (response) {
      return response.json()
    }).then(data => {
      const { status = false } = data // 預設flase，避免後端掛掉
      setIsLogin(status)
      if (!status) {
        window.alert("帳號密碼錯誤")
      }
    })
  }, [accountPassword.account, accountPassword.password])

  // isLogin變動後觸發，解決下面Route的render只會射後不理的問題（只執行一次）
  useEffect(() => {
    if (isLogin) {
      history.push('/home')
    } else {
      history.push('/')
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
                  pathname: "/",
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
          <Login setAccountPassword={setAccountPassword} />
        </Route>
      </Switch>
  );
}

export default App;
