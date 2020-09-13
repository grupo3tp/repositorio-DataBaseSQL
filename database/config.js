var config = {
    server: 'N-DES-DAGUILA', 
    authentication: {
        type: 'default',
        options: {
            userName: 'sa',
            password: 'Pescado05'
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
    password: 'Pescado05',
    server: 'N-DES-DAGUILA',
    database: 'patrimonio',
    options: {
        encrypt: false, 
        instanceName: 'SQLEXPRESS'               
    }
}
exports.config = config;
exports.sqlConfig = sqlConfig;