const crypto = require('crypto');

let token = {
    createToken: function(obj, timeout){
        console.log(obj,parseInt(timeout)||0);
        let obj2 = {
            data: obj,
            created: parseInt(Date.now()/1000), // token生成的时间的，单位秒
            exp: parseInt(timeout)||10   // token有效期
        };

        // payload信息
        let base64Str = Buffer.from(JSON.stringify(obj2), 'utf8').toString('base64'); 

        // 添加签名，防篡改
        let secret = "kevin.linjiajun.com";
        let hash = crypto.createHmac('sha256', secret);
        hash.update(base64Str);
        let signature = hash.digest('base64');

        return base64Str + "." +signature
    },
    decodeToken: function (token) {
        let decArr = token.split(".");
        if(decArr.length<2){
            // token 不合法
            return false
        }

        let payload = {};
        // 将payload json字符串 解析为对象
        try {
            payload = JSON.parse(Buffer.from(decArr[0], "base64").toString("utf8"))
        }catch(err){
            return false
        }

        // 校验签名
        // 添加签名，防篡改
        let secret = "kevin.linjiajun.com";
        let hash = crypto.createHmac('sha256', secret);
        hash.update(base64Str);
        let checkSignature = hash.digest('base64');

        return {
            payload: payload,
            signature: decArr[1],
            checkSignature: checkSignature
        }
    },
    checkToken: function(token){
        let resDecode = this.decodeToken(token);
        if(!resDecode){
            return false
        }

        // 是否过期
        let expState = (parseInt(Date.now()/1000)-parseInt(resDecode.payload.created))>parseInt(resDecode.payload.exp);
        if(resDecode.signature === resDecode.checkSignature && expState){
            return true
        }

        return false
    }
}

module.exports = token;