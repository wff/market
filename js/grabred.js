// JavaScript Document
$(function(){
	var maskwidth=$(document.body).width();
	var maskheight=$(document.body).height()
    
	//弹出层关闭按钮
	$(".maskclose").css({width:(maskwidth/720)*72+"px",top:(maskwidth/720)*140+"px",right:(maskwidth/720)*45+"px"});
	$(".maskclose").click(function(){
		$(".grabmask").hide()
	})
	
	
	$(".grabrebtn").click(function(){
		$(".grabmask").show()
	})
	//弹出层操作区
	$(".maskoperate").css({top:(maskwidth/720)*580+"px"})
	
	
	//推广代理
	$(".ko").css({"width":(maskwidth/720)*162+"px","margin-top":-(maskwidth/720)*30+"px"})
	$(".i01 img").css({"width":(maskwidth/720)*518+"px","margin-top":-(maskwidth/720)*100+"px","margin-left":(maskwidth/720)*25+"px"});
	$(".i02 img").css({"width":(maskwidth/720)*574+"px","margin-top":-(maskwidth/720)*100+"px"});
	$(".i03 img").css({"width":(maskwidth/720)*603+"px","margin-left":(maskwidth/720)*78+"px"});
	$(".i04 img").css({"width":(maskwidth/720)*421+"px","margin-left":(maskwidth/720)*125+"px"});
	$(".i05 img").css({"width":(maskwidth/720)*676+"px","margin-top":-(maskwidth/720)*100+"px"});
	$(".i06 img").css({"width":(maskwidth/720)*661+"px"});
	$(".i07 img").css({"width":(maskwidth/720)*541+"px","margin-right":(maskwidth/720)*50+"px"});
    
	$(".nominate").on("click",function(){
		$(".maskzz,.maskguide").css("display","block")
	})
	
	$(".maskzz").on("click",function(){
		$(".maskzz,.maskguide").css("display","none")
	})
	
	
})