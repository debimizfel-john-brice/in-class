/// <reference path="jquery-3.7.0.js"/>

//IIFE
$(() => {
    $("#my_button").click(() => {
        alert("Clicked!");
        $("section").append("<p>Paragraph 5</p>");
    });

    // $("p").click(() => {
    //     alert("Paragraph");
    // });

    $("section").on("click", "p", function () {
        const text = $(this).text();
        alert("Clicked on " + text);
    });
})

