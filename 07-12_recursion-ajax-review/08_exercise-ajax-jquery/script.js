/// <reference path="/home/deborah/.local/share/jquery-3.7.0.js"/>


$(() => {

    $("#load_users").on("click", load_users);


    function load_users() {

    }





    function get_json(url) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url,
                success: data => resolve(data),
                error: reject(err, status_text)
            });
        })
    }




});
