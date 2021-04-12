//引入

require("dotenv").config()
const express = require('express')
const mysql = require("mysql")

//初始化伺服器
const app = express()

//連接伺服器
const connection = mysql.createConnection(process.env.MYSQL_URL)

//連接之後做的事 包含callback
connection.connect(function (err) {
    if (err) {
        console.error("error connecting:" + err.stack)
        return
    }
    console.log('connected as id ' + connection.threadId)
})

//開始操作伺服器    查詢到資料後的事情
connection.query("SELECT * FROM 'Books'",function (error,results,fields) {
    if (error) {
        console.log(error)
        return;
    }
    console.log(results)
    connection.destroy()
})

//最後啟動伺服器
app.listen(3000,()=>{
    console.log(`Example app listening at http://localhost:3000`)
})