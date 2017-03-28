$(function () {
    //控制面板
    $(".input-range").bind("input propertychange",function(){
       var $val=$(this).val()-20;
        var $scaleVal=0.03*$val+1;
       $(".content").css("transform","matrix("+$scaleVal+",0,0,"+$scaleVal+",0,0)");
        
        
    });
   
    
    $(".close-cp").bind("click", function () {
        if ($(".control-panel").css("marginLeft")>="0") {
            
            $(".control-panel").animate({
                marginLeft: "-263px"
            }, 300);
            $(".content").css({"marginLeft":"auto"});
        }
        else {
            $(".control-panel").animate({
                marginLeft: "0"
            }, 300);
            $(".content").css({"marginLeft":"262px"})
        }
    });
    $(".control-panel").find(".cp-2").find("p").bind("click", function () {
        var img = $(this).find("img");
        if (img.first().attr("src") == "images/control-panel/tree_open.png") {
            img.first().attr("src", "images/control-panel/tree_closed.png")
        }
        else {
            img.first().attr("src", "images/control-panel/tree_open.png");
        }
        if (img.last().attr("src") == "images/control-panel/folder_gray2.png") {
            img.last().attr("src", "images/control-panel/folder_gray.png")
        }
        else {
            img.last().attr("src", "images/control-panel/folder_gray2.png");
        }
        $(this).parent().find(".tree").toggle();
    });
    $(".control-panel").find(".updown").bind("click", function () {
        var imgsrc = $(this).find("img").attr("src");
        if (imgsrc == "images/control-panel/expand.png") {
            $(this).find("img").attr("src", "images/control-panel/expand-qr.png")
        }
        else {
            $(this).find("img").attr("src", "images/control-panel/expand.png")
        };
        $(this).parent().find(".updown-main").toggle();
    });

//控制菜单
    $(".control").mousedown(function(e1){
        var tog=1;
        var left=$(this).offset().left;
        var top=$(this).offset().top;
        var mousedownX=e1.pageX-left;
        var mousedownY=e1.pageY-top;
        $(this).mouseup(function(){
            tog=0;
        })
        $(this).mousemove(function(e2){
            
            
            if(tog){
                $(this).css({
                    "left":e2.pageX-mousedownX,
                    top:e2.pageY-mousedownY
                })
            }
        })
        
        
        
    })
    $(".hide-control").bind("click",function(){
        $(this).find("img").attr("src")=="images/control/shrink.png"?$(this).find("img").attr("src","images/control/blowup.png"):$(this).find("img").attr("src","images/control/shrink.png");
        $(this).parent().parent().find(".hide-menu").toggle();
    });
    $(".banner")
    
})