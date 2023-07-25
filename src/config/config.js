require('dotenv').config(); // this is important!

module.exports = {
    development:{
        username: 'root',
        password: null,
        database: 'hoidanit',
        host: '127.0.0.1',
        dialect: 'mysql',
        logging: false
    },
    test: {
        username: 'root',
        password: null,
        database: 'database_test',
        host: '127.0.0.1',
        dialect: 'mysql',
        logging: false
    },
    production: {
        username: 'root',
        password: null,
        database: 'database_production',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
};