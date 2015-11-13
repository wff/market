function alertMsg(nodeId,msg){ 
	$(nodeId).html('<span>'+msg+'</span>'); 
	$(nodeId).fadeIn(0.3,function(){ 
	setTimeout(autoplay,3000); 
		function autoplay(){ 
			$(nodeId).fadeOut(0.3) 
		}
	});
}