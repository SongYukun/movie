$('#main>div.inforbody>div.header>ul>li>a').mouseenter(function(e){
    e.preventDefault();
    var $target=$(e.target);
    $target.addClass("hover")
      .parent().siblings().find(".hover")
      .removeClass("hover");
    $target.parent().parent().parent()
      .siblings("."+$target.attr('data-tab')).addClass("in")
      .siblings(".in").removeClass("in");
    if($target.hasClass("drama")){
      he($(".tvDramaheader .hover"));
    }
  }
);
$('#main>div.inforbody>div.header>ul>li>a').click(function(e){
  e.preventDefault();
});
$('#main>aside.inforrt>div.hotmouse>div.body h4').click(function(e){
  $target=$(e.target);
  $target.next().addClass('in').parent().siblings().find('.in').removeClass('in');
});

$('#load>a.btnload').click(function(e){
  e.preventDefault();
  $('#load>div.load').css('display','block');
});

$('#load>div.load span.close').click(function(e){
  e.preventDefault();
  $('#load>div.load').css('display','none');
});
var isStat=false;
$('#stat').on('mouseenter','b',function(e){
  if(!isStat){
    var x=$(e.target).index('#stat>b');
    for(var i=0;i<=x;i++){
      if(i%2){
        $('#stat').children(":eq("+i+")").css('background-position','-13px -29px');
      }else{
        $('#stat').children(":eq("+i+")").css('background-position','0px -29px');
      }
    }
    switch(x+1){
      case 10:
      case 9: $('#stat').next().html(x+1+"分 非常棒").css('color','#ff0000');
              break;
      case 8:
      case 7: $('#stat').next().html(x+1+"分 很好").css('color','#F0FF03');
        break;
      case 6:
      case 5: $('#stat').next().html(x+1+"分 一般").css('color','#00FF05');
        break;
      case 4:
      case 3: $('#stat').next().html(x+1+"分 较差").css('color','#005AFF');
        break;
      default : $('#stat').next().html(x+1+"分 很差").css('color','#080339');
        break;
    }
  }
});
$('#stat').on('mouseleave','b',function(e){
  var x=$(e.target).index('#stat>b');
  if(!isStat){
    for(var i=0;i<=x;i++){
      if(i%2){
        $('#stat').children(":eq("+i+")").css('background-position','-13px 0px');
      }else{
        $('#stat').children(":eq("+i+")").css('background-position','0px 0px');
      }
    }
    $('#stat').next().html("请选星评分");
  }
});
$('#stat').click(function(){
  if(!isStat){
    isStat=true;
    $('#content').html("感谢您的投票");
    $('#alert').addClass('in');
    //alert("感谢您的投票");
  }else{
    $('#content').html("谢谢您的再次投票，但每人每天只有一次投票机会。");
    $('#alert').addClass('in');
   // alert("谢谢您的再次投票，但每人每天只有一次投票机会。");
  }
});
$('#main>div.inforbody>div.body.tab2>div.tvDramaheader>ul').on("click","a",function(e){
  e.preventDefault();
  //console.log($(e.target).data('list'));
  he($(e.target));
});
function he(ah){
  var target=ah.data('list');
  ah.addClass("hover").parent().siblings().children(".hover").removeClass("hover");
  $('.'+target).addClass('in').siblings('.in').removeClass('in');
  var bh=$('.'+target).height();
  $('.'+target).parent().css({
    height:bh
  });
}
$('#alert span.close').click(function(e){
  $('#alert').removeClass('in');
});
$('#alert button').click(function(e){
  $('#alert').removeClass('in');
});