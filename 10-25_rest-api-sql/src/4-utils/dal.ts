import * as mysql from "mysql";
import AppConfig from "./app_config";

// create a connection to the database
const connection = mysql.createPool({
    host: AppConfig.my_sql_host,
    database: AppConfig.my_sql_database,
    user: AppConfig.my_sql_user,
    password: AppConfig.my_sql_password
});

// Execute sql query: