var config = {
    server: 'patrimonio.mssql.somee.com', 
    authentication: {
        type: 'default',
        options: {
            userName: 'gusalv_SQLLogin_1',
            password: 's1562othiw'
        }
    },
    options: {
        database: 'patrimonio',
        //instanceName: 'SQLEXPRESS',
        rowCollectionOnDone: true,
        useColumnNames: false,
        trustServerCertificate : true
    }
}


 var sqlConfig = {
    user: 'gusalv_SQLLogin_1',
    password: 's1562othiw',
    server: 'patrimonio.mssql.somee.com',
    database: 'patrimonio',
    options: {
        encrypt: false, 
        //instanceName: 'SQLEXPRESS'               
    }
}
exports.config = config;
exports.sqlConfig = sqlConfig;