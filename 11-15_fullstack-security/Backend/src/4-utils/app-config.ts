class DevelopmentConfig{

    // Server Port:
    public port = 4000;

    // Server Url:
    public serverUrl = "http://localhost:" + this.port;

    // Images Url:
    public imagesUrl = this.serverUrl + "/api/products/images/";

    // Database Host:
    public mySqlHost = "localhost";

    // Database Name:
    public mySqlDataBase = "northwind";

    // Database User:
    public mySqlUser = "root";

    // Database Password:
    public mySqlPassword = "";

    public isProduction = false;

}

class PruductionConfig{
    public port = 5000;
    public serverUrl = "http://api-northwind.com:" + this.port;
    public imagesUrl = this.serverUrl + "/api/products/images/";
    public mySqlHost = "localhost";
    public mySqlDataBase = "northwind";
    public mySqlUser = "naftali";
    public mySqlPassword = "%&^G*^&%GFGFGFGF5";
    public isProduction = true;
}

const appConfig = process.env.NODE_ENV === "production" ? new PruductionConfig() : new DevelopmentConfig();
export default appConfig;