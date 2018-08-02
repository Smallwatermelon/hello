$(".lia").mousemove(function () {
    $(this).removeClass("style3");
    $(this).siblings().removeClass("style3");
    $(this).addClass("style1");
    $(this).siblings().addClass('style2');
});
$(".lia").mouseleave(function () {

    $(this).removeClass("style1");
    $(this).siblings().removeClass("style2");
    $(this).siblings().addClass("style3");

})