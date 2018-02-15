
$(function() {
  $(".text-primary").find("a[aniid]").hover(function () {
    data = $(this).attr("aniid");
  	$(".tumb-ani > img[aniid=" + data + "]").css("display","block");
  },function(){
  	$(".tumb-ani > img").css("display","");
  });
  $(document).mousemove(function(e){
    var top = e.pageY - $(window).scrollTop() + ( window.innerHeight - e.clientY > 270 ? 10 : -260 );
	  $(".tumb-ani").css({left:e.pageX + 10 - $(window).scrollLeft(), top:top});
  });
  $(window).scroll(function () {
    $(".tumb-ani > img").css("display","");
  });
});
