var $show=$('.span1');
var $hit=$('.center1');
$show.click(function(){
    if($hit.is(":visible")){

        $hit.css("display","none");
        console.log("1")
    }else{
        $hit.css("display","block");

    }
})
$(window).resize(function() {
    if(document.body.clientWidth>=1065){
        $hit.show()
    }
});

