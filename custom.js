$(document).ready(function() {
    $("div").click(function() {
        $(".turnRed").css({"color":"red", "border-color":"red"});
    });
    $("div").dblclick(function() {
        $(".blur").css({"color":"blue", "border-color":"blue"});
        $(".hidden").css({"visibility":"visible", "background-color":"yellow", "border-color":"yellow"});
    });
    $(".onEnter").mouseenter(function() {
        $(".onEnter").css("color","magenta");
    });    
    $(".onEnter").mouseleave(function() {
        $(".onEnter").css("color","aquamarine");
    });
});