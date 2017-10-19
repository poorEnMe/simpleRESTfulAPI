const axios = require('axios');
/*
axios.post('http://localhost:3000/data/startsession', {
    username: 'A001',
    password: 'sdfaf'
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });*/

axios({
    method: 'post',
    url: 'http://localhost:3000/data/startsession',
    data: {
        account: 'A001',
        password: 'sdfaf'
    }
}).then(function (response) {
    console.log(response);
})
    .catch(function (error) {
        console.log(error);
    });