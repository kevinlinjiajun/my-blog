const mysql = require('mysql');

// let addSql = 'INSERT INTO user(Id,name,password) VALUES(0,?,?,?,?)';

module.exports = {
    query: function(sql, params, callback){
        // mysql数据库配置，需要做成一个单独的配置文件
        let connection = mysql.createConnection({
            host: '10.167.1.148',
            port: '3306', 
            user: 'root',
            password: 'beaconweb',
            database: 'kevin_test'
        });
        // 链接数据库
        connection.connect(function(err){
            if (err) {
                console.log('数据库连接失败！');
                throw err;
            }
        })
        // 数据操作
        // sql语句，sql语句中需要的数据，第三个回调函数
        connection.query(sql, params, function(error, results, fields){
            if(error){
                console.log('数据库操作失败！');
                throw error;
            }
            // 将查询出来的数据返回给回调函数
            callback && callback(error, results, fields);
            // results作为数据操作后的结果， fields作为数据库链接的一些字段
            // 停止链接数据库（必须）
            connection.end(function(err){
                if(err){
                    console.log('关闭数据库链接失败！');
                    throw err;
                }
            });
        })
    }
};