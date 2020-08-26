 var config = {
    server: 'LAPTOPLUIS', 
    authentication: {
        type: 'default',
        options: {
            userName: 'sa',
            password: 'chinchu'
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
    user: 'sa',
    password: 'chinchu',
    server: 'LAPTOPLUIS',
    database: 'patrimonio',
    options: {
        encrypt: false, 
        instanceName: 'SQLEXPRESS'               
    }
}
exports.config = config;
exports.sqlConfig = sqlConfig;