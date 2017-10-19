const data = require('./routes/data');


module.exports = (app)=>{

    app.get('/data',data.form);


    app.post('/data/startsession',data.submit);

};

