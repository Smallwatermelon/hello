function showPic(func){
    var source=func.getAttribute("href");
    var hrs=document.getElementById("hr");
    hrs.setAttribute("src",source);
    var text=func.getAttribute("title");
    var tit=document.getElementById("tit");
    tit.firstChild.nodeValue=text;
}