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


 var sqlConfig = {
    user: 'gus',
    password: '123456',
    server: 'DESKTOP-M4CABEP',
    database: 'patrimonio',
    options: {
        encrypt: false, 
        instanceName: 'SQLEXPRESS'               
    }
}
exports.config = config;
exports.sqlConfig = sqlConfig;