$(document).ready(function () {
    //Accordian
    $(".acc-card-header").click(function () {
        if ($(this).parent().hasClass("open")) {
            $(this).parent().addClass("close-item");
            $(this).parent().removeClass("open")
        } else {
            $(this).parent().siblings().removeClass("open");
        
            $(this).parent().addClass("open");
            $(this).parent().removeClass("close-item");
        }
    });   
});
   