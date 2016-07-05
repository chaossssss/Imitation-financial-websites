$(function(){
	$(".menu-hd").hover(function(){
		$(".menu-bd").css("display","block");
	  });
	 $(".menu-bd").hover(function(){
	 	$(this).css("display","block");
	 },function(){
	  	$(".menu-bd").css("display","none");
	 });

});