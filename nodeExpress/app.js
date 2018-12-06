const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

const router = require("./routes/index");

// 给app配置bodyParser中间件  extended为true 接受格式为x-www-form-urlencoded
// 通过如下配置再路由种处理request时，可以直接获得post请求的body部分
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.use('', router);

// app.use(function (req, res) {
//     res.end(JSON.stringify(req.body, null, 2))
// })

let server = app.listen(8082, () => {
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});