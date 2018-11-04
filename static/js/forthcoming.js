$('#main>div.inforbody>div.header>ul>li>a').click(function(e){
	e.preventDefault();
});
$('#main>div.inforbody>div.header>ul>li>a').mouseenter(function(e){
    var $target=$(e.target);
    $target.addClass("hover")
      .parent().siblings().find(".hover")
      .removeClass("hover");
    $target.parent().parent().parent()
      .siblings("."+$target.attr('data-tab')).addClass("in")
      .siblings(".in").removeClass("in");
  }
);
$('#main>aside.inforrt>div.hotmouse>div.body h4').click(function(e){
  $target=$(e.target);
  $target.next().addClass('in').parent().siblings().find('.in').removeClass('in');
});
//+" 星期"+(new Date()).getDay()?((new Date()).getDay()==1?"一":((new Date()).getDay()==2?"二":((new Date()).getDay()==3?"三":((new Date()).getDay()==4?"四":((new Date()).getDay()==5?"五":"六"))))):"日"))
var dayweek="";
switch((new Date()).getDay()){
	case 0:
		dayweek="星期日";
		break;
	case 1:
		dayweek="星期一";
		break;
	case 2:
		dayweek="星期二";
		break;
	case 3:
		dayweek="星期三";
		break;
	case 4:
		dayweek="星期四";
		break;
	case 5:
		dayweek="星期五";
		break;
	case 6:
		dayweek="星期六";
		break;
}
$("#main>div.inforbody>div.body>p.today").html("今日:"+(new Date()).getFullYear()+"-"+((new Date()).getMonth()+1)+"-"+(new Date()).getDate()+"  "+dayweek);
$('#load>a.btnload').click(function(e){
  e.preventDefault();
  $('#load>div.load').css('display','block');
});

$('#load>div.load span.close').click(function(e){
  e.preventDefault();
  $('#load>div.load').css('display','none');
});