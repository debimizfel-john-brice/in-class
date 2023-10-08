/// <reference path="jquery-3.7.0.js"/>

function test_jquery() {
    //^ Animations
     $("div").fadeOut(2000);
     $("div").slideUp(2000).slideDown(2000).fadeOut(2000).fadeIn(2000);
    //  $("div").hide();
    //  $("div").show();

    //^ CSS
    // $(".cool").css("background-color", "yellow");
    // $(".cool").css({
    //     border: "3px dotted green",
    //     width: "300px"
    // });

    //^ HTML
    // $("div").append(":)");
    // $("div").append("<input type='text'>");
    // $("div:first-of-type").html("Hello<br>World");

    //^ Near by tags
    // $("#cool_div").prev().css("background-color", "orange");
    // $("#cool_div").next().css("background-color", "orange");
    // $("#cool_div").children().css("background-color", "orange");
    // $("#cool_div").parent().css("background-color", "orange");


    // const word = $(".input_box").val();
    // $("div:first-of-type").text(word);
    // $(".input_box").val("");


}

function play() {
    // const my_audio = document.getElementById("my_audio");
    // my_audio.play();

    const my_audio = $("#my_audio");
    my_audio.get(0).play();
}