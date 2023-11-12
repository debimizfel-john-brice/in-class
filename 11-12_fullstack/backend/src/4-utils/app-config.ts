class AppConfig{

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

}
const appConfig = new AppConfig();
export default appConfig;