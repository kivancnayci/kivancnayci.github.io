var moveTime;
var elemID = "#divs";
var id=0;
$().ready(function() {
    var top;
    var left;
    for(var i=0; i<10; i++) {
        left = Math.floor((Math.random() * 1000) + 1);
        top = Math.floor((Math.random() * 800) + 1);
        $(elemID).append(   
         "<div id='" + i + "' class='drugs' style='top:"
         + top + "px; left:" + left + "px;'>" +
         i + "</div>");
    }
     moveTime = setInterval(function() {
        left = Math.floor((Math.random() * 2000 ) + 1);
        top = Math.floor((Math.random() * 800) + 1);        
        $("#0").css("left",left+"px");
        $("#0").css("top",top+"px");
        $("#0").html(id++);
    },200);
    moveTime = setInterval(function() {
        left = Math.floor((Math.random() * 2000) + 1);
        top = Math.floor((Math.random() * 700) + 1);        
        $("#1").css("left",left+"px");
        $("#1").css("top",top+"px");
        $("#1").html(id++);
    },150);
    moveTime = setInterval(function() {
        left = Math.floor((Math.random() * 2000) + 1);
        top = Math.floor((Math.random() * 650) + 1);        
        $("#2").css("left",left+"px");
        $("#2").css("top",top+"px");
        $("#2").html(id++);
    },300);
    moveTime = setInterval(function() {
        left = Math.floor((Math.random() * 300) + 1);
        top = Math.floor((Math.random() * 300) + 1);        
        $("#3").css("left",left+"px");
        $("#3").css("top",top+"px");
        $("#3").html(id++);
    },200);
    moveTime = setInterval(function() {
        left = Math.floor((Math.random() * 2000) + 1);
        top = Math.floor((Math.random() * 700) + 1);        
        $("#4").css("left",left+"px");
        $("#4").css("top",top+"px");
        $("#4").html(id++);
    },400);
    moveTime = setInterval(function() {
        left = Math.floor((Math.random() * 1500) + 1);
        top = Math.floor((Math.random() * 700) + 1);        
        $("#5").css("left",left+"px");
        $("#5").css("top",top+"px");
        $("#5").html(id++);
    },600);
    moveTime = setInterval(function() {
        left = Math.floor((Math.random() * 1000) + 1);
        top = Math.floor((Math.random() * 800) + 1);        
        $("#6").css("left",left+"px");
        $("#6").css("top",top+"px");
        $("#6").html(id++);
    },100);
    moveTime = setInterval(function() {
        left = Math.floor((Math.random() * 900) + 1);
        top = Math.floor((Math.random() * 150) + 1);        
        $("#7").css("left",left+"px");
        $("#7").css("top",top+"px");
        $("#7").html(id++);
    },1000);
    moveTime = setInterval(function() {
        left = Math.floor((Math.random() * 1000) + 1);
        top = Math.floor((Math.random() * 600) + 1);        
        $("#8").css("left",left+"px");
        $("#8").css("top",top+"px");
        $("#8").html(id++);
    },500);
    moveTime = setInterval(function() {
        left = Math.floor((Math.random() * 1250) + 1);
        top = Math.floor((Math.random() * 400) + 1);        
        $("#9").css("left",left+"px");
        $("#9").css("top",top+"px");
        $("#9").html(id++);
    },700);
});