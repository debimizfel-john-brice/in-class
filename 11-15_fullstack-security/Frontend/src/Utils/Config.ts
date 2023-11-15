
class Config{

    public productsUrl = "http://localhost:4000/api/products/";
    public registerUrl = "http://localhost:4000/api/register/";
    public loginUrl = "http://localhost:4000/api/login/";
    public usersUrl = "http://localhost:4000/api/users/";
    
    public categoriesUrl = "http://localhost:4000/api/categories/";

}
const appConfig = new Config(); // Singleton
export default appConfig;
