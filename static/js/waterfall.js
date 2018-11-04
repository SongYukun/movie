(async function(){
  var res=await ajax({
    url:"http://localhost:3000/waterfall/waterfall_list/",
    type:"get",
    dataType:"json"
  });
  console.log(res)
  new Vue({
    el:"#main>div:first-child",
    data:{
      res
    }
  })
})()
$('#load>a.btnload').click(function(e){
  e.preventDefault();
  $('#load>div.load').css('display','block');
});

$('#load>div.load span.close').click(function(e){
  e.preventDefault();
  $('#load>div.load').css('display','none');
});

var ptArr=[0,0,0,0,0];
var ptLeft=['0','20%','40%','60%','80%'];
var pArr=$('div.waterfall>div');

for(var i=0;i<pArr.length;i++){
  $(pArr[i]).css({
    top:ptArr[coltop(ptArr)],
    left:ptLeft[coltop(ptArr)]
  });
  ptArr[coltop(ptArr)]+=($(pArr[i]).height()+20);
}
console.log(rc());
function rc(){
	var r=Math.random()*256|0;
	var g=Math.random()*256|0;
	var b=Math.random()*256|0;

	return "#"+r.toString(16)+""+g.toString(16)+""+b.toString(16);
}
function coltop(arr){
  var min=arr[0];
  var minc=0;
  for(var i=0;i<arr.length;i++){
    if(arr[i]<min){
      min=arr[i];
      minc=i;
    }
  };
  return minc;
}
$('div.waterfall').css({
  height:Math.max.apply(null,ptArr)
});

$('#main>div.waterfall').on('mouseenter','a',function(){
  $(this).css({
			boxShadow:"0px 0px 20px "+rc()
		}).parent().siblings().addClass('out');
});
$('#main>div.waterfall').on('mouseleave','a',function(){
  $(this).removeAttr('style').parent().siblings().removeClass('out');
});
$('#main>div.waterfall>div').one('transitionend',function(){
  $(this).next().addClass('in');
});
setTimeout(function(){
  $('#main>div.waterfall>div').first().addClass('in');
},100);