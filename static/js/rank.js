$('#main>aside.inforrt>div.hotmouse>div.body h4').click(function(e){
  $target=$(e.target);
  $target.next().addClass('in').parent().siblings().find('.in').removeClass('in');
});
var list=[
  {name:'西游伏妖篇',direct:'徐克',data:'2017-01-28',time:'2',boxoffice:'6.17亿',value:'61700'},
  {name:'大闹天竺',direct:'王宝强',data:'2017-01-28',time:'2',boxoffice:'3.26亿',value:'32600'},
  {name:'功夫瑜伽',direct:'唐季礼',data:'2017-01-28',time:'2',boxoffice:'2.99亿',value:'29900'},
  {name:'乘风破浪',direct:'韩寒',data:'2017-01-28',time:'2',boxoffice:'1.47亿',value:'14700'},
  {name:'熊出没之奇幻空间',direct:'丁亮',data:'2017-01-28',time:'2',boxoffice:'1.35亿',value:'13500'},
  {name:'降临',direct:'丹尼斯·维伦纽瓦',data:'2017-01-20',time:'10',boxoffice:'1.01亿',value:'6.17',value:'10100'},
  {name:'魔弦传说',direct:'特拉维斯·奈特',data:'2017-01-13',time:'17',boxoffice:'4292.7万',value:'4292.7'},
  {name:'少年巴比伦',direct:'相国强',data:'2017-01-13',time:'17',boxoffice:'307.2万',value:'307.2'},
  {name:'我的诗篇',direct:'吴飞跃/秦晓宇',data:'2017-01-13',time:'17',boxoffice:'304.9万',value:'304.9'},
  {name:'心惊胆战',direct:'陈鹏振',data:'2017-01-20',time:'10',boxoffice:'171.6万',value:'171.6'},
  {name:'蛋计划',direct:'李扬武',data:'2017-01-20',time:'10',boxoffice:'54.5万',value:'54.5'},
  {name:'大魔法师孟兜兜',direct:'孟晖',data:'2017-01-20',time:'10',boxoffice:'20.4万',value:'20.4'}
];
$('#sels').change(function(e){
  var value=$(e.target).val();
  switch (value){
    case 'tab':
      ranktab();
      break;
    case 'column':
      column(list);
      break;
    case 'pie':
      pie(list);
      break;
  }
});
ranktab();
function ranktab(){
  var html="";
  html+="<table><thead><tr><th></th><th>电影名称</th><th>导演</th><th>上映时间</th><th>上映天数</th><th>累计票房</th></tr></thead><tbody>";
  for(var i=0,length=list.length;i<length;i++){
    var one=list[i];
    html+="<tr><td>"+(i+1)+"</td><td>"+one.name+"</td><td>"+one.direct+"</td><td>"+one.data+"</td><td>"+one.time+"</td><td>"+one.boxoffice+"</td></tr>";
  }
  html+="</tbody></table>";
  $('#main>div>div.body').html(html);
}
function column(list){
  var arr=[];
  for(var i=0,length=list.length;i<length;i++){
    arr.push({label:list[i].name,value:parseFloat(list[i].value)});
  }
  var c = new FusionCharts({
    type: 'column2d',//'doughnut2d',//'pie2d',//'bar3d',//'bar2d',//'column3d',//'column2d',
    renderAt: 'chart',
    width: "800",
    height: "600",
    dataSource: {
      data: arr    //[{label:xx, value:xx}]
    }
  });
  c.render();
}
function pie(list){
  var arr=[];
  for(var i=0,length=list.length;i<length;i++){
    arr.push({label:list[i].name,value:parseFloat(list[i].value)});
  }
  var c = new FusionCharts({
    type: 'pie2d',//'doughnut2d',//'pie2d',//'bar3d',//'bar2d',//'column3d',//'column2d',
    renderAt: 'chart',
    width: "800",
    height: "600",
    dataSource: {
      data: arr    //[{label:xx, value:xx}]
    }
  });
  c.render();
}
$('#load>a.btnload').click(function(e){
  e.preventDefault();
  $('#load>div.load').css('display','block');
});

$('#load>div.load span.close').click(function(e){
  e.preventDefault();
  $('#load>div.load').css('display','none');
});