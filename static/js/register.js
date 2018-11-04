function text(){
  var str = 'ABCDEFGHJKLMNPQRSTWXY3456789';
  var ctx=c1.getContext('2d');
  ctx.fillStyle=rc();
  ctx.fillRect(0,0,100,40);
  var arr=[];
  for(var i= 0;i<4;i++){
    arr[i]=str[rn(27)];
  }
  ctx.textBaseline='top';
  ctx.font='30px 黑体';
  for(var i=0;i<arr.length;i++){
    var txt=arr[i];
    var fw=ctx.measureText(txt).width;
    var deg=(rn(80)-40);
    ctx.save();
    ctx.translate((i+1)*fw*1.3,20);
    ctx.rotate(deg*Math.PI/180);
    ctx.fillStyle=rc();
    ctx.fillText(arr[i],-fw/2,-15);
    ctx.restore();

  }
  for(var i=0;i<4;i++){
    var x1=rn(100);
    var yl=rn(40);
    var x2=rn(100);
    var y2=rn(40);
    ctx.beginPath();
    ctx.moveTo(x1,yl);
    ctx.strokeStyle=rc();
    ctx.lineTo(x2,y2);
    ctx.stroke();
  }
  for(var i=0;i<20;i++){
    var x1=rn(100);
    var y1=rn(40);
    ctx.fillStyle=rc();
    ctx.beginPath();
    ctx.arc(x1,y1,1,0,1*Math.PI);
    ctx.fill();
  }
  function rc(){
    var r=Math.random()*256|0;
    var g=Math.random()*256|0;
    var b=Math.random()*256|0;
    return "rgb("+r+","+g+","+b+")";
  }
  function rn(num){
    return Math.random()*(num+1)|0;
  }
  return arr.join("");
}
var test=text();
$('a.test').click(function(e){
    e.preventDefault();
    test=text();
  }
);
$('#main>div.main>form>div.test>input').blur(function(){
  if($(this).val()==""){
    $(this).next().html("").removeAttr('class');
    return;
  }
  if($(this).val().toUpperCase()==test){
    $(this).next().html('✔').removeClass('wrong').addClass('right');
  }else{
    $(this).next().html('✖').removeClass('right').addClass('wrong');
  }
});
$('#main>div.main>form>div.uname>input').blur(function(){
  var reg=/^[A-Za-z][A-Za-z0-9_]{3,19}$/;
  if($(this).val()==""){
    $(this).next().html("支持字母、数字和“_”,4-20个字符").removeAttr('class');
    return;
  }
  if(reg.test($(this).val())){
    $(this).next().html('<b></b>').removeAttr('class').children().html('✔').addClass('right');
  }else{
    $(this).next().html("请以字母开头，最少4位的合法组合").addClass('wrong').children().removeAttr('class');
  }
});
$('#main>div.main>form>div.upwd>input').blur(function(){
  var reg=/^[A-Za-z][A-Za-z0-9_]{5,19}$/;
  var regzm=/[0-9]/;
  var regfh=/[_]/;
  var issz=regzm.test($(this).val());
  var isfh=regfh.test($(this).val());
  if($(this).val()==""){
    $(this).next().html("支持字母、数字和“_”,6-20个字符").removeAttr('class');
    $('div.intensity>ul').children().removeAttr('class');
    return;
  }
  if(reg.test($(this).val())){
    $(this).next().html('<b></b>').removeAttr('class').children().html('✔').addClass('right');
    //console.log($(this).val().length);
    if($(this).val().length>=12){
      if(issz&&isfh){
        $('div.intensity>ul').children().removeAttr('class').addClass('green');
      }else{
        $('div.intensity>ul').children().removeAttr('class').first().addClass('yellow').next().addClass('yellow');
      }
    }else{
      if(issz||isfh){
        $('div.intensity>ul').children().removeAttr('class').first().addClass('yellow').next().addClass('yellow');
      }else{
        $('div.intensity>ul').children().removeAttr('class').first().addClass('red');
      }
    }
  }else{
    $(this).next().html("请以字母开头，最少6位的合法组合").addClass('wrong').children().removeAttr('class');
  }
});
$('#main>div.main>form>div.upwd1>input').blur(function(){
  var pword=$('#main>div.main>form>div.upwd>input').val();
  if($(this).val()==""){
    $(this).next().html("请再次输入一遍密码").removeAttr('class');
    return;
  }
  if($(this).val()==pword){
   $(this).next().html('<b></b>').removeAttr('class').children().html('✔').addClass('right');
  }else{
    $(this).next().html("请正确输入上一次的密码").addClass('wrong').children().removeAttr('class');
 }
});
$('#main>div.main>form>div.phone>input').blur(function(){
 var reg=/^1(3|4|5|7|8)\d{9}$/;
 if($(this).val()==""){
  $(this).next().html("请输入联系电话").removeAttr('class');
  return;
 }
 if(reg.test($(this).val())){
  $(this).next().html('<b></b>').removeAttr('class').children().html('✔').addClass('right');
 }else{
  $(this).next().html("请输入正确的联系电话").addClass('wrong').children().removeAttr('class');
 }
});

