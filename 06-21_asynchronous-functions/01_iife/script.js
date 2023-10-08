//^ esto evita que alguien use el mismo nombre para otra funcion o vairable y cambie el valor o funcionamiento
(() => {
    function hello_wolrd() {
        alert('hello world');
    }
})();