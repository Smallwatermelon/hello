var WINDOW_WIDTH=1024;
var WINDOW_HEIGHT=768;
var R=8;
TOP=60;
LEFT=30;

const endTime=new Date(2018 ,5,22,00,00,00);
var curShowTimeSeconds=0;

var balls=[];
const colors=["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","CC0000"];


window.onload=function () {
    var convas=document.getElementById("canvas");
    var context=canvas.getContext("2d");

    canvas.width=WINDOW_WIDTH;
    canvas.height=WINDOW_HEIGHT;

    curShowTimeSeconds= getCurShowTimeSeconds();
     setInterval(
         function () {
             render(context);
             update();

         },50
     )
}



function getCurShowTimeSeconds() {
    var curTime=new Date();
    var ret=endTime.getTime()-curTime.getTime();    //取得毫秒数
    ret=Math.round(ret/1000);  //转化为秒同时转化为整数

    return ret >=0?ret:0;

}

function update() {//时间的变化
    var nextShowTimeSeconds=getCurShowTimeSeconds();
    var nexthours=parseInt(nextShowTimeSeconds/3600);
    var nextminutes=parseInt((nextShowTimeSeconds-nexthours*3600)/60);
    var nextseconds=nextShowTimeSeconds%60;

    var curhours=parseInt(curShowTimeSeconds/3600);
    var curminutes=parseInt((curShowTimeSeconds-curhours*3600)/60);
    var curseconds=curShowTimeSeconds%60;

    if (curseconds != nextseconds) {
        if(parseInt(curhours/10)!=parseInt(nexthours/10)){
            addBalls(LEFT,TOP,parseInt(curhours/10));
        }
        if(parseInt(curhours%10)!=parseInt(nexthours%10)){
            addBalls(LEFT+15*(R+1),TOP,parseInt(curhours%10));
        }

        if(parseInt(curminutes/10)!=parseInt(nextminutes/10)){
            addBalls(LEFT+39*(R+1),TOP,parseInt(curminutes/10));
        }
        if(parseInt(curminutes%10)!=parseInt(nextminutes%10)){
            addBalls(LEFT+54*(R+1),TOP,parseInt(curminutes%10));
        }
        if(parseInt(curseconds/10)!=parseInt(nextseconds/10)){
            addBalls(LEFT+78*(R+1),TOP,parseInt(curseconds/10));
        }
        if(parseInt(curseconds%10)!=parseInt(nextseconds%10)){
            addBalls(LEFT+93*(R+1),TOP,parseInt(curseconds%10));
        }


        curShowTimeSeconds = nextShowTimeSeconds;
}

  updateBalls()

    console.log(balls.length)
}

function updateBalls(){
    for(var i=0;i<balls.length;i++){
        balls[i].x+=balls[i].vx;
        balls[i].y+=balls[i].vy;
        balls[i].vy+=balls[i].g;

        if(balls[i].y>=WINDOW_HEIGHT-R){
            balls[i].y=WINDOW_HEIGHT-R;
            balls[i].vy=-balls[i].vy*0.75;
    }
    }
    var cnt = 0
    for( var i = 0 ; i < balls.length ; i ++ )
        if( balls[i].x + R > 0 && balls[i].x -R < WINDOW_WIDTH )
            balls[cnt++] = balls[i]

    while( balls.length > cnt ){
        balls.pop();
    }

}


function addBalls(x,y,num) {
    for(var i=0;i<digit[num].length;i++)
        for(var j = 0; j < digit[num][i].length; j++)
            if(digit[num][i][j]==1){
                var aBall={
                    x:x+j*2*(R+1)+(R+1),
                    y:y+i*2*(R+1)+(R+1),
                    g:1.5+Math.random(),
                    vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,//pow 平方
                    vy:-5,
                    color:colors[Math.floor(Math.random()*colors.length)]
                }
                balls.push(aBall)
            }



}

function render(cxt) {

    cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT)

    var hours=parseInt(curShowTimeSeconds/3600);
    var minutes=parseInt((curShowTimeSeconds-hours*3600)/60);
    var seconds=curShowTimeSeconds%60;

    rederDigit(LEFT,TOP,parseInt(hours/10),cxt);
    rederDigit(LEFT+15*(R+1),TOP,parseInt(hours%10),cxt);
    rederDigit(LEFT+30*(R+1),TOP,10,cxt);
    rederDigit(LEFT+39*(R+1),TOP,parseInt(minutes/10),cxt);
    rederDigit(LEFT+54*(R+1),TOP,parseInt(minutes%10),cxt);
    rederDigit(LEFT+69*(R+1),TOP,10,cxt);
    rederDigit(LEFT+78*(R+1),TOP,parseInt(seconds/10),cxt);
    rederDigit(LEFT+93*(R+1),TOP,parseInt(seconds%10),cxt);

    for(var i=0;i<balls.length;i++){
        cxt.fillStyle=balls[i].color;

        cxt.beginPath();
        cxt.arc(balls[i].x,balls[i].y,R,0,2*Math.PI,true);
        cxt.closePath();

        cxt.fill();
    }


}
function rederDigit(x,y,num,cxt) {
     cxt.fillStyle="rgb(0,102,153)";

     for(var i=0;i<digit[num].length;i++)
         for(var j = 0; j < digit[num][i].length; j++)
             if(digit[num][i][j]==1){
                 cxt.beginPath();
                 cxt.arc(x + (R + 1) * 2 * j + (R + 1), y + (R + 1) * 2 * i + (R + 1), R, 0, 2 * Math.PI);
                 cxt.closePath();

                 cxt.fill();

             }


}