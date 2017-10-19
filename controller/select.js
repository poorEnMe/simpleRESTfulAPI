const db = require('./db');



exports.getData = function(req,res,next) {
    let id = '1';
    let sql = 'select sqlstring from APis where id = ?';
    const pool = db.pool;

    pool.query(sql,id,(err,row,fields)=>{
        if(err)return next(err);
        let user = req.query.user || 'null';
        console.log(row[0].sqlstring+'-'+user);

        if(row[0].sqlstring){
            pool.query(row[0].sqlstring,user,(err,result)=>{
                if(err)return next(err);
                res.jsonp(result);
            });
        }
    });
};

function getSession(req,res) {
    let data = req.body;

}