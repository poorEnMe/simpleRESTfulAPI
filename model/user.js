const db= require('../controller/db');

/*const bcrypt = require('bcrypt');*/
const pool = db.pool;

class User{
    constructor(obj){
        for (let key in obj){
            this[key] = obj[key];
        }
    }

    hashPassword(fn){
        let user = this;
        bcrypt.genSalt(12,function (err,salt) {
            if(err) return fn(err);
            user.salt = salt;
            bcrypt.hash(user.pass,salt,function (err,hash) {
                if(err) return fn(err);
                user.pass = hash;
                fn();
            });
        });
    }

    static getByAccount(account,fn){
        let sql =   'select id,userName,account,password ' +
                    'from APIuser where account=?';
        pool.query(sql,account,(err,rows,fileds)=>{
            //定义了account unique，所以只能查出一条记录，或没有
            if(err) return fn(err);

            let data = {};
            if(rows.length>0){
                data = {
                    userName:rows[0].userName,
                    account: rows[0].account,
                    password:rows[0].password
                };
            }

            fn(null,new User(data));
        });
    }
    /*static getId(name,fn){
        db.get('user:id:' + name,fn);
    }

    static get(id,fn){
        db.hgetall('user:'+id,(err,user)=>{
            if(err) return fn(err);
            fn(null,new User(user));
        });
    }
    static authenticate(name,pass,fn){
        let user = this;
        user.getByName(name,(err,user)=>{
            if(err) return fn(err);
            if(!user.id) return fn();
            bcrypt.hash(pass,user.salt,(err,hash)=> {
                if(err) return fn(err);
                if(hash === user.pass)return fn(null,user);
                fn();
            });
        });
    }*/
}
/*var tobi = new User({
    name: 'Tobi',
    pass: 'im a ferret',
    age: '2'
});
tobi.save(function(err){
    if (err) throw err;
    console.log('user id %d', tobi.id);
});*/

module.exports = User;


