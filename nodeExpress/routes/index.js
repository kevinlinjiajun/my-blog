const express = require('express');
const router = express.Router();
const crypto = require('crypto');

let token = require('./../config/middleware/token');

// let token = require('./')

let db = require('../config/database/mysql');

router.use(function timeLog(req, res, next){
    console.log('Time:', Date.now());
    next();
});

router.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});


router.post('/login', (req, res) => {
    let md5 = crypto.createHash("md5");
    let mdPassword = md5.update(req.body.password).digest('hex');
    let params = [req.body.usernumber, mdPassword];
    let sql = 'SELECT * from user WHERE usernumber="'+ req.body.usernumber + '" AND password="'+ mdPassword + '"';
    db.query(sql, params, function(err, result){
        if (err) {
            res.status(500).json({msg: err.message, code: 1, payload: ''});
        }else if (result.length === 0) {
            res.status(403).send({msg: 'Username or password is incorrect', code: 1, payload: ''});
        }else{
            console.log(token.createToken(req.body, 300000));
            res.send({msg: '', code: 0, payload: {token: token.createToken(req.body, 300000)}});
        }
    })
});
router.get('/listUsers', (req, res) => {
    let selectSql = 'select * from user';
    db.query(selectSql, [], function(err, result){
        if (err) {
            res.json({msg: err.message, code: 1, payload: ''});
        }else{
            res.send({msg: '', code: 0, payload: result});
        }
    })
});
router.post('/addUsers', (req, res) => {
    let md5 = crypto.createHash("md5");
    let mdPassword = md5.update(req.body.password).digest('hex');
    let params = [req.body.usernumber, mdPassword, req.body.name, req.body.age, req.body.birthday, req.body.profession, req.body.address];
    let addSql = 'INSERT INTO user(id,usernumber,password,name,age,birthday,profession,address) VALUES(0,?,?,?,?,?,?,?)';
    db.query(addSql, params, function(err, result){
        if (err) {
            console.log(err, result);
            res.json({msg: err.message, code: 1, payload: ''});
        }else{
            res.json({msg: '', code: 0, payload: 'add success'});
        }
    })
});
router.delete('/deleteUsers', (req, res) => {
    if (req.query.id) {
        let deleteSql = 'DELETE FROM user WHERE id=' + req.query.id;
        db.query(deleteSql, function(err, result){
            console.log(result);
            if (err) {
                res.json({msg: err.message, code: 1, payload: ''});
            }else if (result.fieldCount === 0) {
                res.json({msg: 'Unable to query this field', code: 1, payload: ''});
            }else{
                res.json({msg: '', code: 0, payload: 'delete success'});
            }
        })
    }else{
        res.json({msg: 'Unable to find "id" field', code: 1, payload: ''});
    }
});

router.get('/register', (req, res) => {
    res.send('Register Page');
});

module.exports = router;