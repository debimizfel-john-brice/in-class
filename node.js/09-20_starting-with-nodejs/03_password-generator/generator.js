
function generate(count = 10) {
    const charset = "abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789#$%^&*";
    let password = "";
    for (let i = 1; i <= count; ++i) {
        password += charset.charAt(Math.floor((Math.random() * charset.length)));
    }
    return password;

}

module.exports = {
    generate
}