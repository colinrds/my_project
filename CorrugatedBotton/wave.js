$(function(){
  $(".ripple").click(function(e){
    if ($(this).find("#wave").length){
      $(this).find("#wave").remove();
    }
    $(this).append("<div id='wave'></div>");
    var wave=$(this).find("#wave");
    wave.css({
      "display": " block",
      "background": " rgba(0, 0, 0, 0.3)",
      "border-radius": " 50%",
      "position": " absolute",
      "-webkit-transform": " scale(0)",
      "transform": " scale(0)",
      "opacity": " 1",
      "transition": " all 0.7s",
      "-webkit-transition": " all 0.7s",
      "-moz-transition": " all 0.7s",
      "-o-transition": " all 0.7s",
      "z-index": " 1",
      "overflow": " hidden",
      "pointer-events": " none"
    });
    // 获取ripple的宽度和高度
    waveWidth = parseInt($(this).outerWidth());
    waveHeight = parseInt($(this).outerHeight());

    if(waveWidth < waveHeight){
      var R= waveHeight;
    }else {
      var R= waveWidth;
    }
    wave.css({
      "width":(R*2)+"px",
      "height":(R*2)+"px",
      "top": (e.pageY -$(this).offset().top - R)+'px',
      "left": ( e.pageX -$(this).offset().left -R)+'px',
      "transform":"scale(1)",
      "-webkit-transform":"scale(1)",
      "opacity":"0"
    });
  });
});