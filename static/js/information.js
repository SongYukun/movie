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
$('#load>a.btnload').click(function(e){
  e.preventDefault();
  $('#load>div.load').css('display','block');
});

$('#load>div.load span.close').click(function(e){
  e.preventDefault();
  $('#load>div.load').css('display','none');
});