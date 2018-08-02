// 一共多少条文章
var $number=$('#number');
var $li=$('.ul1 >li').length;//文章的总共数目
$number.html($li+'条');
//分页效果
var $lis=$('.ul1');//显示列表
var $last=$('#last');//下一页
var $next=$('#next');
var $pageNum=$('#pageNum');//增加分页的ul
var curNum=8;//每一页显示的数目
var ini=0;//初始化值
// 分页数目
var len = Math.ceil($li/curNum);
for (var i = 0; i < len; i++) {
     var str='<a>'+(i+1)+'</a>';
    $pageNum.append(str) ;
}
//默认页面
$pageNum.find('a:first').addClass('lor');
//点击a元素事件
 $pageNum.find('a').each(function(){
     $(this).click(function () {
         $pageNum.find('a').removeClass('lor');//移除样式
         $(this).addClass('lor');//给当前样式
         ini=$(this).index();//获取a 元素的当前索引
         $lis.find('li').hide();//全部隐藏
         for(var i=($(this).html()-1)*curNum;i<($(this).html()*curNum);i++){
             $lis.find('li').eq(i).show();
         }
     });
 });
/************首页的显示*********/
$lis.find("li").hide();
for (var i = 0; i < curNum; i++) {
    $lis.find("li").eq(i).show()

}
//下一页
$next.click(function(){
    $lis.find("li").hide();
    if(ini === len-1){
        for (var i = (len - 1) * curNum; i < len * curNum; i++) {
            $lis.find("li").eq(i).show()
        }
        return false;
    }else{
      $pageNum.find('a').removeClass('lor');//
      ini++;
      $pageNum.find('a').eq(ini).addClass('lor');
    }
    for(var i=ini*curNum;i<(ini+1)*curNum;i++){
        $lis.find('li').eq(i).show();
    }
});
//上一页
$last.click(function () {
    $lis.find('li').hide();
    if(ini===0){
        for(var i = 0; i < curNum; i++) {
            $lis.find("li").eq(i).show();
            }
        return false;
    }else{
        $pageNum.find('a').removeClass('lor');//
        ini--;
        $pageNum.find('a').eq(ini).addClass('lor');
    }
    for(var i=ini*curNum;i<(ini+1)*curNum;i++){
        $lis.find('li').eq(i).show();
    }
});