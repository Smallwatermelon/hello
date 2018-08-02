$(".list").mouseenter(function () {
    $(this).addClass("hit");
});
$(".list").mouseleave(function () {
    $(this).removeClass("hit");
});


var timer=setInterval(function () {
    var $index=Math.floor(Math.random()*8);
    $(".list").removeClass("hit");
    $(".art-a").eq($index).children(".list").addClass("hit")

},5000)
