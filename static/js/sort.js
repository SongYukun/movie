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

var tv=[
  {name:'神秘的7普通话版',actor:'苏卡达·顾珑希 三吉彩花',type:'喜剧/青春剧',add:'泰国',time:'2018年',img:'images/sort/a_100178557_m_601_m1_180_236.jpg'},
  {name:'延禧攻略',actor:'秦岚 聂远',type:'古装剧/宫廷剧/剧情',add:'内地',time:'2018年',img:'images/sort/a_100056295_m_601_m21_180_236.jpg'},
  {name:'不朽者',actor:'张思帆 杨菲洋',type:'悬疑剧/青春剧/剧情',add:'内地',time:'2018年',img:'images/sort/a_100177395_m_601_m3_180_236.jpg'},
  {name:'爱情进化论',actor:'张若昀 张天爱',type:'都市爱情',add:'内地',time:'2018年',img:'images/sort/a_100098466_m_601_m9_180_236.jpg'},
  {name:'校花朵朵宠上瘾',actor:'宋昕冉 贾司特',type:'青春剧/网剧',add:'内地',time:'2018年',img:'images/sort/a_100176412_m_601_m3_180_236.jpg'},
  {name:'苏三传奇',actor:'隋俊波 吴若浦',type:'古装剧',add:'内地',time:'2017年',img:'images/sort/a_100164700_m_601_180_236.jpg'},
  {name:'梅花儿香',actor:'原雨 李修蒙',type:'家庭剧/都市',add:'内地',time:'2018年',img:'images/sort/a_100167733_m_601_m3_180_236.jpg'},
  {name:'夏日心跳',actor:'沈建宏 罗云熙',type:'青春剧',add:'内地',time:'2018年',img:'images/sort/a_100165669_m_601_m3_180_236.jpg'},
  {name:'吃货拯救世界第一季',actor:'袁百梓卉 王蕴凡',type:'网剧/言情剧',add:'内地',time:'2018年',img:'images/sort/a_100172675_m_601_m3_180_236.jpg'},
  {name:'执行利剑',actor:'吕佳容 王聪',type:'罪案剧',add:'内地',time:'2018年',img:'images/sort/a_100168808_m_601_m4_180_236.jpg'},
  {name:'芸汐传',actor:'鞠婧祎 张哲瀚',type:'言情剧/古装剧',add:'内地',time:'2018年',img:'images/sort/a_100099292_m_601_m16_180_236.jpg'},
  {name:'婚姻遇险记',actor:'韩雪 黄宥明',type:'家庭剧',add:'内地',time:'2018年',img:'images/sort/a_100165603_m_601_m2_180_236.jpg'},
  {name:'时尚之王国王的权杖',actor:'聂诗 齐浚羽',type:'商战剧/网剧',add:'内地',time:'2018年',img:'images/sort/a_100173042_m_601_m3_180_236.jpg'},
  {name:'冰火奇缘',actor:'柯有伦 安心亚',type:'国产剧',add:'内地',time:'2018年',img:'images/sort/a_100172497_m_601_m2_180_236.jpg'}
];
tvlist();
function tvlist(){
  //console.log($('#main>div.inforbody>div.body.tab1>ul'));
  var html='';
  for(var i=0,length=tv.length;i<length;i++){
    var one=tv[i];
    html+="<li><div class='bodylf'><a href=''><img src='"+one.img+"'/></a></div><div class='bodyrt'><h4><a href=''>"+one.name+"</a></h4><ul><li>主演：<span>"+one.actor+"</span></li><li>类型：<span>"+one.type+"</span></li><li>地区：<span>"+one.add+"</span></li><li>上映：<span>"+one.time+"</span></li></ul></div></li>";
  }
  $('#main>div.inforbody>div.body.tab1>ul').html(html);
}
var mu=[
  {name:'江湖学院',actor:'张浩 蓝波 一鸣',type:'喜剧',add:'华语',time:'2008年',img:'images/sort/v_115054861_m_601_m5_180_236.jpg'},
  {name:'脱皮爸爸',actor:'吴镇宇 古天乐',type:'喜剧',add:'香港',time:'2018年',img:'images/sort/v_112875593_m_601_m5_180_236.jpg'},
  {name:'黄金花',actor:'毛舜筠 凌文龙',type:'爱情',add:'香港',time:'2017年',img:'images/sort/v_115379845_m_601_m5_180_236.jpg'},
  {name:'英雄本色2018',actor:'王凯 马天宇',type:'动作',add:'香港',time:'2018年',img:'images/sort/v_113673625_m_601_m5_180_236.jpg'},
  {name:'金蝉脱壳2',actor:'西尔维斯特·史泰龙',type:'犯罪',add:'美国',time:'2018年',img:'images/sort/v_114411145_m_601_m9_180_236.jpg'},
  {name:'忌日快乐',actor:'杰西卡·罗德 伊瑟尔',type:'悬疑',add:'美国',time:'2018年',img:'images/sort/v_113756793_m_601_m4_180_236.jpg'},
  {name:'特种保镖',actor:'张博楠 李雨阳',type:'枪战',add:'华语',time:'2018年',img:'images/sort/v_114485056_m_601_m4_180_236.jpg'},
  {name:'午夜十二点',actor:'倪新宇 谭佑铭',type:'惊悚',add:'华语',time:'2018年',img:'images/sort/v_115482701_m_601_m3_180_236.jpg'},
  {name:'环太平洋',actor:'约翰·波耶加',type:'动作',add:'美国',time:'2018年',img:'images/sort/v_112855233_m_601_m7_180_236.jpg'},
  {name:'飞檐走壁',actor:'小沈龙 陆海涛',type:'喜剧',add:'华语',time:'2018年',img:'images/sort/a_100177395_m_601_m3_180_236.jpg'},
  {name:'济公之英雄归位',actor:'陈浩民 钟久夫',type:'喜剧',add:'华语',time:'2018年',img:'images/sort/v_114762460_m_601_m2_180_236.jpg'},
  {name:'英雄对决',actor:'成龙 皮尔斯·布鲁斯南',type:'动作',add:'华语',time:'2017年',img:'images/sort/v_112881096_m_601_m4_180_236.jpg'},
  {name:'战狼2',actor:'吴京 弗兰克·格里罗',type:'动作',add:'华语',time:'2017年',img:'images/sort/v_113763212_m_601_m2_180_236.jpg'},
  {name:'妈妈咪鸭',actor:'赵璐(配音)',type:'家庭',add:'美国',time:'2018年',img:'images/sort/v_113718460_m_601_m5_180_236.jpg'}
];
mulist();
function mulist(){
  //console.log($('#main>div.inforbody>div.body.tab1>ul'));
  var html='';
  for(var i=0,length=mu.length;i<length;i++){
    var one=mu[i];
    html+="<li><div class='bodylf'><a href=''><img src='"+one.img+"'/></a></div><div class='bodyrt'><h4><a href=''>"+one.name+"</a></h4><ul><li>主演：<span>"+one.actor+"</span></li><li>类型：<span>"+one.type+"</span></li><li>地区：<span>"+one.add+"</span></li><li>上映：<span>"+one.time+"</span></li></ul></div></li>";
  }
  $('#main>div.inforbody>div.body.tab2>ul').html(html);
}
$('#load>a.btnload').click(function(e){
  e.preventDefault();
  $('#load>div.load').css('display','block');
});

$('#load>div.load span.close').click(function(e){
  e.preventDefault();
  $('#load>div.load').css('display','none');
});


