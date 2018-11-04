/*轮播右侧*/
(async function(){
	var res=await ajax({
		url:"http://localhost:3000/index/text",
		type:"get",
		dataType:"json"
	});
	var parent=document.querySelector("#advert>.advertlist>.advertlistmain");
	var html=``;
	for(var p of res){
		var {rname}=p;
		html+=`<li><a href="information.html">${rname}</a></li>`;
	}
	parent.innerHTML=html;
})();
/*热播影视动态加载*/
(async function(){
	var res=await ajax({
		url:"http://localhost:3000/index/hotmouse",
		type:"get",
		dataType:"json"
	});
	var parent=document.querySelector("#hotmouse>.hotmain");
	var html=``;
	for(var p of res){
		var {title,details,pic,href}=p;
		html+=`<dl>
		<dt>
			<a href="${href}">
				<img src="${pic}" alt="">
				<span>${title}</span>
				<div class="zz">
					加入收藏
				</div>
			</a>
		</dt>
		<dd><a href="${href}">${details}</a></dd>
	</dl>
		`;
	}
	parent.innerHTML=html;
	/*热播影视方向进入*/
	$('#hotmouse>div.hotmain>dl>dt').on("mouseenter","a",function(e){
		$('#hotmouse>div.hotmain>dl>dt').stop();
		var x=0; 
		x=e.offsetX;
		var  y=0;
		y=e.offsetY;
		//console.log(x,y);
		//console.log(e.target.pageX,e.target.pageY);
		if(e.offsetX<-1){
			return;
		}
		if(e.offsetY<-1){
			return;
		}
		//console.log($(this));
		//console.log($(e.target));
		if(y>240){
			$(e.target).attr('class','zz buttom');
			return;
		}
		if(y<10){
			$(e.target).attr('class','zz top');
			return;
		}
		if(x<10){
			$(e.target).attr('class','zz left');
			return;
		}
		if(x>170){
			$(e.target).attr('class','zz right');
			return;
		}
	});
	$('#hotmouse>div.hotmain>dl>dt').on("mouseleave","a",function(e){
		//ss1.setAttribute('class','');
		var x=e.offsetX;
		var y=e.offsetY;
		//console.log(x,y);
		if(y<0){
			$(e.target).attr('class','zz totop');
			return;
		}
		if(x<0){
			$(e.target).attr('class','zz toleft');
			return;
		}
		if(x>170){
			$(e.target).attr('class','zz toright');
			return;
		}
		if(y>252){
			$(e.target).attr('class','zz tobuttom');
			return;
		}
	});
})();
/*电视节目动态加载*/
(async function(){
	var res=await ajax({
		url:"http://localhost:3000/index/tvprogram",
		type:"get",
		dataType:"json"
	});
	var parent=document.querySelector("#tvprogram>.tvmain");
	var html=``;
	for(var p of res){
		var {pic,title,timer1,title1,timer2,title2,timer3,title3}=p;
		html+=`<dl>
				<dt><a href="#"><img src="${pic}" alt="">${title}</a></dt>
				<dd>
						<p>${timer1}<a href="#">${title1}</a></p>
						<p>${timer2}<a href="#">${title2}</a></p>
						<p>${timer3}<a href="#">${title3}</a></p>
				</dd>
		</dl>`;
	}
	parent.innerHTML=html;
})();
//电视节目获取当前日期
(async function(){
	var myDate = new Date();
	var year=myDate.getFullYear();   //获取完整的年份(4位,1970-????)
	var month=myDate.getMonth()+1;   //获取当前月份(0-11,0代表1月)
	var date=myDate.getDate();        //获取当前日(1-31)
	var str = "星期" + "日一二三四五六".charAt(new Date().getDay());
	//console.log("当前日期："+year+"-"+month+"-"+date+" "+str);
	$(".today").text("当前日期："+year+"-"+month+"-"+date+" "+str);
})();

/*轮播*/
var imgs=[
	{"i":0,"img":"images/banner/pic1.jpg","span":"《决战食神》"},
	{"i":1,"img":"images/banner/pic2.jpg","span":"《掠夺者》"},
	{"i":2,"img":"images/banner/pic3.jpg","span":"《摆渡人》"},
	{"i":3,"img":"images/banner/pic4.jpg","span":"《蝙蝠侠大战超人》"},
	{"i":4,"img":"images/banner/pic2.jpg","span":"《倒霉特工熊》"},
];
$('div.header>ul>li>a').hover(
	function(e){
		var target=e.target;
		$(target).addClass('hover').parent()
							.siblings().children('.hover')
							.removeClass('hover');
		$(target).parent().parent().parent()
							.siblings("."+$(target).attr('data-tab'))
							.addClass('in').siblings(".in").removeClass('in');
	}
);
/*电视剧,电影,动漫,综艺*/
//电视剧左侧分类
(async function(){
	var res=await ajax({
		url:"http://localhost:3000/index/tvplay_Left",
		type:"get",
		dataType:"json"
	});
	var parent=document.querySelector("#tvplay>.tvplaylf>.tab1>ul");
	var html=``;
	for(var p of res){
		var {title,details,pic}=p;
		html+=`<li>
		<a href="#">
			<img src="${pic}" alt="">
			<span>${details}</span>
			<p>${title}</p>
		</a>
	</li>`;
	}
	parent.innerHTML=html;
})();
(async function(){
	var res=await ajax({
		url:"http://localhost:3000/index/tvplay_Left2",
		type:"get",
		dataType:"json"
	});
	var parent=document.querySelector("#tvplay>.tvplaylf>.tab2>ul");
	var html=``;
	for(var p of res){
		var {title,details,pic}=p;
		html+=`<li>
		<a href="#">
			<img src="${pic}" alt="">
			<span>${details}</span>
			<p>${title}</p>
		</a>
	</li>`;
	}
	parent.innerHTML=html;
})();
(async function(){
	var res=await ajax({
		url:"http://localhost:3000/index/tvplay_Left3",
		type:"get",
		dataType:"json"
	});
	var parent=document.querySelector("#tvplay>.tvplaylf>.tab3>ul");
	var html=``;
	for(var p of res){
		var {title,details,pic}=p;
		html+=`<li>
		<a href="#">
			<img src="${pic}" alt="">
			<span>${details}</span>
			<p>${title}</p>
		</a>
	</li>`;
	}
	parent.innerHTML=html;
})();
(async function(){
	var res=await ajax({
		url:"http://localhost:3000/index/tvplay_Left4",
		type:"get",
		dataType:"json"
	});
	var parent=document.querySelector("#tvplay>.tvplaylf>.tab4>ul");
	var html=``;
	for(var p of res){
		var {title,details,pic}=p;
		html+=`<li>
		<a href="#">
			<img src="${pic}" alt="">
			<span>${details}</span>
			<p>${title}</p>
		</a>
	</li>`;
	}
	parent.innerHTML=html;
})();
//电影左侧分类
(async function(){
	var res=await ajax({
		url:"http://localhost:3000/index/mouse_Left",
		type:"get",
		dataType:"json"
	});
	var parent=document.querySelector("#mouse>.mouself>.tab1>ul");
	var html=``;
	for(var p of res){
		var {title,pic,href}=p;
		html+=`<li>
		<a href="${href}">
			<img src="${pic}" alt="">
			<p>${title}</p>
		</a>
	</li>`;
	}
	parent.innerHTML=html;
})();
(async function(){
	var res=await ajax({
		url:"http://localhost:3000/index/mouse_Left9",
		type:"get",
		dataType:"json"
	});
	var parent=document.querySelector("#mouse>.mouself>.tab2>ul");
	var html=``;
	for(var p of res){
		var {title,pic,href}=p;
		html+=`<li>
		<a href="${href}">
			<img src="${pic}" alt="">
			<p>${title}</p>
		</a>
	</li>`;
	}
	parent.innerHTML=html;
})();
(async function(){
	var res=await ajax({
		url:"http://localhost:3000/index/mouse_Left10",
		type:"get",
		dataType:"json"
	});
	var parent=document.querySelector("#mouse>.mouself>.tab3>ul");
	var html=``;
	for(var p of res){
		var {title,pic,href}=p;
		html+=`<li>
		<a href="${href}">
			<img src="${pic}" alt="">
			<p>${title}</p>
		</a>
	</li>`;
	}
	parent.innerHTML=html;
})();
(async function(){
	var res=await ajax({
		url:"http://localhost:3000/index/mouse_Left11",
		type:"get",
		dataType:"json"
	});
	var parent=document.querySelector("#mouse>.mouself>.tab4>ul");
	var html=``;
	for(var p of res){
		var {title,pic,href}=p;
		html+=`<li>
		<a href="${href}">
			<img src="${pic}" alt="">
			<p>${title}</p>
		</a>
	</li>`;
	}
	parent.innerHTML=html;
})();
//动漫左侧分类
(async function(){
	var res=await ajax({
		url:"http://localhost:3000/index/manga_Left",
		type:"get",
		dataType:"json"
	});
	var parent=document.querySelector("#manga>.mangalf>.tab1>ul");
	var html=``;
	for(var p of res){
		var {title,details,pic,href}=p;
		html+=`<li>
		<a href="${href}">
			<img src="${pic}" alt="">
			<p>${title}</p>
		</a>
	</li>`;
	}
	parent.innerHTML=html;
})();
(async function(){
	var res=await ajax({
		url:"http://localhost:3000/index/manga_Left12",
		type:"get",
		dataType:"json"
	});
	var parent=document.querySelector("#manga>.mangalf>.tab2>ul");
	var html=``;
	for(var p of res){
		var {title,details,pic,href}=p;
		html+=`<li>
		<a href="${href}">
			<img src="${pic}" alt="">
			<p>${title}</p>
		</a>
	</li>`;
	}
	parent.innerHTML=html;
})();
//综艺左侧分类
(async function(){
	var res=await ajax({
		url:"http://localhost:3000/index/variety_Left",
		type:"get",
		dataType:"json"
	});
	var parent=document.querySelector("#variety>.varietylf>.tab1>ul");
	var html=``;
	for(var p of res){
		var {title,details,pic,href}=p;
		html+=`<li>
		<a href="${href}">
			<img src="${pic}" alt="">
			<p>${title}</p>
		</a>
	</li>`;
	}
	parent.innerHTML=html;
})();
(async function(){
	var res=await ajax({
		url:"http://localhost:3000/index/variety_Left13",
		type:"get",
		dataType:"json"
	});
	var parent=document.querySelector("#variety>.varietylf>.tab2>ul");
	var html=``;
	for(var p of res){
		var {title,details,pic,href}=p;
		html+=`<li>
		<a href="${href}">
			<img src="${pic}" alt="">
			<p>${title}</p>
		</a>
	</li>`;
	}
	parent.innerHTML=html;
})();
(async function(){
	var res=await ajax({
		url:"http://localhost:3000/index/variety_Left14",
		type:"get",
		dataType:"json"
	});
	var parent=document.querySelector("#variety>.varietylf>.tab3>ul");
	var html=``;
	for(var p of res){
		var {title,details,pic,href}=p;
		html+=`<li>
		<a href="${href}">
			<img src="${pic}" alt="">
			<p>${title}</p>
		</a>
	</li>`;
	}
	parent.innerHTML=html;
})();
//最新影片
(async function(){
	var res=await ajax({
		url:"http://localhost:3000/index/pic",
		type:"get",
		dataType:"json"
	});
	//console.log(res);
	var parent=document.querySelector("#pic>.tab1>ul");
	var html=``;
	for(var p of res){
		var {pic,title}=p;
		html+=`<li><a href="#"><img src="${pic}" alt=""><p>${title}</p></a></li>`;
	}
	parent.innerHTML=html;
})();
(async function(){
	var res=await ajax({
		url:"http://localhost:3000/index/pic2",
		type:"get",
		dataType:"json"
	});
	var parent=document.querySelector("#pic>.tab2>ul");
	var html=``;
	for(var p of res){
		var {pic,title}=p;
		html+=`<li><a href="#"><img src="${pic}" alt=""><p>${title}</p></a></li>`;
	}
	parent.innerHTML=html;
})();
/*右侧排行榜动态加载*/
//电视剧排行榜
(async function(){
	var res=await ajax({
		url:"http://localhost:3000/index/tvplay_RankList",
		type:"get",
		dataType:"json"
	});
	var parent=document.querySelector("#tvplay>.tvplayrt>.body>ul");
	var html=``;
	for(var p of res){
		var {title}=p;
		html+=`<li>${title}</li>`;
	}
	parent.innerHTML=html;
})();
//电影排行榜
(async function(){
	var res=await ajax({
		url:"http://localhost:3000/index/mouse_RankList",
		type:"get",
		dataType:"json"
	});
	var parent=document.querySelector("#mouse>.mousert>.body>ul");
	var html=``;
	for(var p of res){
		var {title}=p;
		html+=`<li>${title}</li>`;
	}
	parent.innerHTML=html;
})();
//动漫排行榜
(async function(){
	var res=await ajax({
		url:"http://localhost:3000/index/manga_RankList",
		type:"get",
		dataType:"json"
	});
	var parent=document.querySelector("#manga>.mangart>.body>ul");
	var html=``;
	for(var p of res){
		var {title}=p;
		html+=`<li>${title}</li>`;
	}
	parent.innerHTML=html;
})();
//综艺排行榜
(async function(){
	var res=await ajax({
		url:"http://localhost:3000/index/variety_RankList",
		type:"get",
		dataType:"json"
	});
	var parent=document.querySelector("#variety>.varietyrt>.body>ul");
	var html=``;
	for(var p of res){
		var {title}=p;
		html+=`<li>${title}</li>`;
	}
	parent.innerHTML=html;
})();
/*轮播*/
var slider={
	LIWIDTH:0,
	$imgs:null,
	$idxs:null,
	DURATION:1000,
	WAIT:5000,
	timer:null,
	init(){
		this.LIWIDTH=parseFloat($("#advert>.advertimg").css("width"));
		this.$imgs=$("#advert>.advertimg>.imgtable");
		this.$idxs=$("#advert>.advertimg>.imgtablesize");
		this.updateView();
		this.startAuto();
		this.$imgs.hover(
				function(e){
					$("body").stop(true);
					//$(e.target).next().animate({
						//height:'40px'
					//},500);
					//debugger;
				}.bind(this),
				function(e){
					$("body").stop(true);
					//$(e.target).next().animate({
						//height:'0px'
					//},500);
				}.bind(this)	
			);
		this.$idxs.on("click","li",function(e){
			if(!$(e.target).hasClass("hover")){
				clearTimeout(this.timer);
				this.timer=null;
				this.$imgs.stop(true);
				var start=this.$idxs.children(".hover").html();
				var end=$(e.target).html();
				this.move(end-start);
			}
		}.bind(this));
		//debugger;
	},
	updateView(){
		for(var i=0,imgsHTML="",idxsHTML="";i<imgs.length;i++){
			imgsHTML+="<li><img src='"+imgs[i].img+"'/><span>"+imgs[i].span+"</span></li>";
			idxsHTML+="<li>"+(i+1)+"</li>";
		}
		this.$imgs.html(imgsHTML).css("width",imgs.length*this.LIWIDTH);
		this.$idxs.html(idxsHTML);
		this.$idxs.children(":eq("+imgs[0].i+")").addClass("hover");
	},
	startAuto(){
		this.timer=setTimeout(function(){this.move(1)}.bind(this),this.WAIT);
	},
	move(n){
		if(n>0){
			this.$imgs.animate({
				left:-n*this.LIWIDTH
			},this.DURATION,function(){
				imgs=imgs.concat(imgs.splice(0,n));
				this.updateView();
				this.$imgs.css("left",0);
				this.startAuto();
			}.bind(this));
		}else{
			n*=-1;
			imgs=imgs.splice(-n,n).concat(imgs);
			this.updateView();
			var left=parseFloat(this.$imgs.css("left"));
			this.$imgs.css({
				"left":left-n*this.LIWIDTH
			});
			this.$imgs.animate({"left":0},this.DURATION,function(){this.startAuto()}.bind(this));
			//debugger;
		}
	}
}
slider.init();


$('div>div.header>ul>li>a').click(function(e){
	e.preventDefault();
});

$('div>div.header>ul>li>a').hover(
	function(e){
		var target=e.target;
		$(target).addClass('hover').parent()
							.siblings().children('.hover')
							.removeClass('hover');
		//console.dir($(target).parent().parent().parent().siblings("."+$(target).attr('data-tab')));
		$(target).parent().parent().parent()
							.siblings("."+$(target).attr('data-tab'))
							.addClass('in').siblings(".in").removeClass('in');
	}
);

$(document).scroll(function(){
	var lTop=$(document).scrollTop();
	if(lTop>1300&&lTop<1960){
		$('#navbar').css('display','block')
								.children(':first').children(':first')
								.children().addClass('hover')
								.parent().siblings().children().removeClass('hover');
	}else if(lTop>1960&&lTop<2530){
		$('#navbar').css('display','block')
								.children(':first').children(':first').next()
								.children().addClass('hover')
								.parent().siblings().children().removeClass('hover');
	}else if(lTop>2530&&lTop<3000){
		$('#navbar').css('display','block')
								.children(':first').children(':first').next().next()
								.children().addClass('hover')
								.parent().siblings().children().removeClass('hover');
	}else if(lTop>3000&&lTop<3550){
		$('#navbar').css('display','block')
								.children(':first').children(':last')
								.children().addClass('hover')
								.parent().siblings().children().removeClass('hover');
	}else if(lTop>500){
		$('#navbar').css('display','block').find('.hover').removeClass('hover');
	}else{
		$('#navbar').css('display','none');
	}
	//debugger;
}.bind(this));

$('#navbar').on("click","ul>li>a",function(e){
			e.preventDefault();
			var i=$('#navbar>ul>li').index($(e.target).parent());
			//console.dir($(e.target).parent());
			//console.dir(i);
			switch(i){
				case 0:
					$('body').stop();
					$('body,html').animate({
						scrollTop:1590
					},1000);
					break;
				case 1:
					$('body').stop();
					$('body,html').animate({
						scrollTop:2160
					},1000);
					break;
				case 2:
					$('body').stop();
					$('body,html').animate({
						scrollTop:2730
					},1000);
					break;
				case 3:
					$('body').stop();
					$('body,html').animate({
						scrollTop:3300
					},1000);
					break;
			}
}.bind(this));


/***登陆注册*******************/
$('#load>a.btnload').click(function(e){
  e.preventDefault();
  $('#load>div.load').css('display','block');
});

$('#load>div.load span.close').click(function(e){
  e.preventDefault();
  $('#load>div.load').css('display','none');
});