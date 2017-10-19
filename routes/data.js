const User = require('../model/user');


exports.form = (req,res)=>{
    res.render('data',{title:'data'});
};

exports.submit = function (req,res,next) {
    console.log(req.body);
    let account = req.body.account;
    let password = req.body.password;
    if(!account || !password)return next(function () {
        throw new Error('账号密码必填');
    });
    User.getByAccount(account,(err,user)=>{
        console.log(user);
        if(user){
            req.session.id = user.id;
            return res.jsonp(user);
        }

        next();
    });
};

/*
exports.submit = (req,res,next)=>{
    let data = req.body;
    /!*console.log(data);
    console.log(data.userName);
    User.getByName('Tobi',(err,id)=>{
       console.log(id) ;
    });*!/

    User.getByName(data.userName,(err,user)=>{
        if(err)return next(err);
        if(user.id){
            res.error("username already taken");
            res.redirect('back');
        }else{
            user = new User({
                name:data.userName,
                pass:data.userPassword
            });

            user.save((err)=>{
                if(err) return next(err);
                req.session.uid = user.id;
                res.redirect('/');
            });
        }
    });
};*/
