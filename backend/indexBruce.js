require('dotenv').config()
// https://www.npmjs.com/package/express
const express = require('express')
const mysqlTool = require('mysql');

function allowOrigin(res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
}

// ---------初始化伺服器---------
const app = express()

// ---------開始連接資料庫---------
const connection = mysqlTool.createConnection(process.env.MYSQL_URL);
// ---------連接成功後做的事情---------
// callback
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

// ---------開始操作資料庫---------
// ---------查詢到資料後做的事情---------
// connection.query("SELECT * FROM `books`", function (error, results, fields) {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(results);
//   connection.destroy()
// });

// 登入api
// app.post('/login', function(request, response) {
//   allowOrigin(response)
//   response.json({
//     name: "john"
//   })
// })

// 判斷是否登入了的api
app.get('/login/status', function(request, response) {
  allowOrigin(response)
  // querystring
  const { a1, a2 } = request.query
  // 補資料庫的邏輯
  connection.query(`SELECT * FROM user where account='${a1}' and password='${a2}'`, function (error, results, fields) {
    if (error) {
      console.log(error);
      return;
    }
    if (results.length > 0) {
      response.json({
        status: true // false 未登入
      })
    } else {
      response.json({
        status: false // false 未登入
      })
    }
  });
})


// ---------啟動伺服器--------- port 3001
app.listen(3001, () => {
  console.log(`server 啟動了！`)
})