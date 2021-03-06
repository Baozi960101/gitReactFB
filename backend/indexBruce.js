require("dotenv").config();
// https://www.npmjs.com/package/express
const express = require("express");
const mysqlTool = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const md5 = require("md5");


// ---------初始化伺服器---------
const app = express();
app.use(cors());
app.use(bodyParser.json());

// ---------開始連接資料庫---------
const connection = mysqlTool.createConnection(process.env.MYSQL_URL);
// ---------連接成功後做的事情---------
// callback
connection.connect(function (err) {
  if (err) {

    console.error("error connecting: " + err.stack);
    return;
  }


  // 0 = 註冊失敗
  // 1 = 註冊成功
  // Restful api
  const Status = {
    fail: 0,
    success: 1,
  };

  app.post("/register", function (request, response) {
    const {
      username,
      pwd
    } = request.body;
    const encryptedPwd = md5(pwd + process.env.SALT);
    connection.query(
      `SELECT * FROM user where account='${username}'`,
      function (error, results, fields) {
        if (error) {
          console.log(error);
          response.json({
            message: error,
            status: Status.fail,
          });
          return;
        }
        if (results.length > 0) {
          response.json({
            message: "已被註冊",
            status: Status.fail,
          });
          return;
        }
        connection.query(
          `INSERT INTO user (account, password) VALUES ('${username}', '${encryptedPwd}')`,
          function (error, results, fields) {
            if (error) {
              console.log(error);
              response.json({
                message: error,
                status: Status.fail,
              });
              return;
            }
            console.log("results", results);
            response.json({
              message: "註冊成功！",
              status: Status.success,
            });
          }
        );
      }
    );
  });

  // 判斷是否登入了的api
  app.post("/login", function (request, response) {
    // body
    const {
      a1,
      a2,
      token
    } = request.body;

    if (token) {
      connection.query(
        `SELECT * FROM tokentable where token='${token}'`,
        function (error, results, fields) {
          if (error) {
            console.log(error);
            response.json({
              message: error,
              status: Status.fail,
            });
            return;
          }
          response.json({
            message: "登入成功",
            status: Status.success,
            userToken: token,
          });
        }
      );
    } else {
      const encryptedPwd = md5(a2 + process.env.SALT);
      console.log(encryptedPwd);
      // 補資料庫的邏輯
      connection.query(
        `SELECT * FROM user where account='${a1}' and password='${encryptedPwd}'`,
        function (error, results, fields) {
          if (error) {
            console.log(error);
            response.json({
              message: "登入失敗",
              status: Status.fail,
            });
            return;
          }
          if (results.length > 0) {
            const token = md5(a1);

            connection.query(
              `INSERT INTO tokentable (token) VALUES ('${token}')`,
              function (error, results, fields) {
                if (error) {
                  console.log(error);
                  response.json({
                    message: error,
                    status: Status.fail,
                  });
                  return;
                }
                console.log("results", results);
                response.json({
                  message: "註冊成功！",
                  status: Status.success,
                });
              }
            );

            response.json({
              message: "登入成功",
              status: Status.success,
              userToken: token,
            });
          } else {
            response.json({
              message: "帳號密碼不存在",
              status: Status.fail,
            });
          }
        }
      );
    }
  });
});

// ---------啟動伺服器--------- port 3001
app.listen(3001, () => {
  console.log(`server 啟動了！`);
});