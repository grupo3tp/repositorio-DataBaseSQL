var Connection = require('tedious').Connection;
var config = {
    server: 'DESKTOP-M4CABEP', 
    authentication: {
        type: 'default',
        options: {
            userName: 'gus',
            password: '123456'
        }
    },
    options: {
        database: 'patrimonio',
        instanceName: 'SQLEXPRESS',
        rowCollectionOnDone: true,
        useColumnNames: false
    }
}
var connection = new Connection(config);
connection.on('connect', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connect');
    }
});
module.exports = connection;