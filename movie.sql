SET NAMES UTF8;
DROP DATABASE IF EXISTS movie;
CREATE DATABASE movie CHARSET=UTF8;
USE movie;

/**网站基本信息表**/
CREATE TABLE movie_site_info(
  site_name VARCHAR(16),
  logo VARCHAR(64),
  admin_email VARCHAR(64),
  icp VARCHAR(32),
  copyright VARCHAR(64)
);
INSERT INTO movie_site_info VALUES("我的电影网",'img/logo.png','admin@mm.com','京090856788号','版权所有@2010-2018我的电影网');

/**导航表**/
CREATE TABLE movie_navbar_item(
  nid INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(16),
  title VARCHAR(32)
);
INSERT INTO movie_navbar_item VALUES
  (NULL,'首页','跳转到网站首页'),
  (NULL,'影讯','最新最热的电影资讯'),
  (NULL,'今日影视','查看周围院线动态'),
  (NULL,'电影票房','在线订票'),
  (NULL,'电视剧','电视剧分类');

/**首页广告轮播**/
CREATE TABLE movie_carousel_item(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(128),
  title VARCHAR(32)
);
INSERT INTO movie_carousel_item VALUES
  (NULL,'images/banner/pic1.jpg','战狼2'),
  (NULL,'images/banner/pic2.jpg','摔跤吧爸爸'),
  (NULL,'images/banner/pic3.jpg','FAN'),
  (NULL,'images/banner/pic4.jpg','神偷奶爸');

/**轮播右侧信息**/
CREATE TABLE movie_banner_right_info(
  rid INT PRIMARY KEY AUTO_INCREMENT,
  rname VARCHAR(128)
);
INSERT INTO movie_banner_right_info VALUES
  (NULL,'《三少爷的剑》徐克尔冬升联手淬炼 何润东'),
  (NULL,'《五女闹东京》发先导预告 五 “铁蜜”变身古惑仔'),
  (NULL,'《怨灵地下室》今天上映 民国背景融入'),
  (NULL,'《喵星人》定档2017暑期斥资2亿打造'),
  (NULL,'《游戏规则》发燃情版预告 黄子韬开启'),
  (NULL,'《中国好声音》全国十四强诞生');

/**首页楼层信息**/
CREATE TABLE movie_floor_info(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(32)
);
INSERT INTO movie_floor_info VALUES
  (NULL,'热播影视'),
  (NULL,'电视节目表'),
  (NULL,'电视剧'),
  (NULL,'电影'),
  (NULL,'动漫卡通'),
  (NULL,'综艺娱乐'),
  (NULL,'最新图片');

/**首页--热播影视**/
CREATE TABLE movie_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  details VARCHAR(128),
  pic VARCHAR(128),
  href VARCHAR(128),
  arrival TINYINT
);
INSERT INTO movie_index_product VALUES
  (NULL,'延禧攻略','70集全','images/hotmouse/a_100056295_m_601_m21_260_360.jpg','details.html?lid=1',1),
  (NULL,'再创世纪','更新至27集','images/hotmouse/a_100120704_m_601_m15_180_236.jpg','details.html?lid=2',1),
  (NULL,'等到烟暖收第一季','12集全','images/hotmouse/a_100178866_m_601_m7_180_236.jpg','details.html?lid=3',1),
  (NULL,'我和两个他','更新至13集','images/hotmouse/a_100101550_m_601_m17_260_360.jpg','details.html?lid=4',1),
  (NULL,'1006的房客','26集全','images/hotmouse/a_100147838_m_601_m3_260_360.jpg','details.html?lid=5',1),
  (NULL,'朕的刺客女友','24集全','images/hotmouse/a_100161325_m_601_m10_260_360.jpg','details.html?lid=6',1),
  (NULL,'芸汐传','50集全','images/hotmouse/a_100033091_m_601_m21_180_236.jpg','details.html?lid=7',1),
  (NULL,'天盛长歌','更新至63集','images/hotmouse/a_100089604_m_601_m10_180_236.jpg','details.html?lid=8',1),
  (NULL,'娘道','更新至23集','images/hotmouse/a2faf34fd5bc47f1abe8013caa04c159.jpg','details.html?lid=9',1),
  (NULL,'香蜜沉沉烬如霜','更新至63集','images/hotmouse/a_100158743_m_601_m5_180_236.jpg','details.html?lid=10',1),
  (NULL,'月嫂先生','更新至27集','images/hotmouse/a_100056295_m_601_m21_260_360.jpg','details.html?lid=11',1),
  (NULL,'桃花依旧笑春风','更新至46集','images/hotmouse/a_100162358_m_601_m6_180_236.jpg','details.html?lid=12',1),
  (NULL,'我们的千阙歌','更新至48集','images/tvplay/a_100172590_m_601_m5_180_236.jpg','details.html?lid=13',2),
  (NULL,'延禧攻略','更新至60集','images/tvplay/a_100056295_m_601_m21_180_236.jpg','details.html?lid=14',2),
  (NULL,'娘道','更新至22集','images/tvplay/a_100089604_m_601_m10_180_236.jpg','details.html?lid=15',2),
  (NULL,'月嫂先生','更新至40集','images/tvplay/a_100158743_m_601_m5_180_236.jpg','details.html?lid=16',2),
  (NULL,'天盛长歌','共56集全','images/tvplay/a_100033091_m_601_m21_180_236.jpg','details.html?lid=17',2),
  (NULL,'香蜜沉沉烬如霜','更新至50集','images/tvplay/a_100049913_m_601_m12_180_236.jpg','details.html?lid=18',2),
  (NULL,'桃花依旧笑春风','共60集全','images/tvplay/a_100162358_m_601_m6_180_236.jpg','details.html?lid=19',2),
  (NULL,'胜利之路','共38集全','images/tvplay/a_100084306_m_601_m8_180_236.jpg','details.html?lid=20',2),
  (NULL,'再创世纪','更新至24集','images/tvplay/a_100120704_m_601_m15_180_236.jpg','details.html?lid=21',2),
  (NULL,'芸汐传','共50集全','images/tvplay/a_100099292_m_601_m16_180_236.jpg','details.html?lid=22',2),
  (NULL,'等到烟暖雨收第一季','共12集全','images/tvplay/a_100178866_m_601_m7_180_236.jpg','details.html?lid=23',7),
  (NULL,'一代名相陈廷敬','更新至19集','images/tvplay/a_100182843_m_601_m3_180_236.jpg','details.html?lid=24',7),
  (NULL,'天盛长歌DVD版','共70集全','images/tvplay/a_100173767_m_601_m4_180_236.jpg','details.html?lid=25',7),
  (NULL,'舌害','更新至9集','images/tvplay/a_100179806_m_601_m8_180_236.jpg','details.html?lid=26',7),
  (NULL,'战犯','更新至21集','images/tvplay/a_100180312_m_601_m5_180_236.jpg','details.html?lid=27',6),
  (NULL,'为了你我愿意热爱整个世界','更新至33集','images/tvplay/a_100047251_m_601_m9_180_236.jpg','details.html?lid=28',6),
  (NULL,'啊父老乡亲','更新至8集','images/tvplay/a_100186609_m_601_m4_180_236.jpg','details.html?lid=29',6),
  (NULL,'再创世纪 粤语','更新至28集','images/tvplay/a_100178063_m_601_m3_180_236.jpg','details.html?lid=30',6),
  (NULL,'梅花儿香','共49集全','images/tvplay/a_100167733_m_601_m3_180_236.jpg','details.html?lid=31',6),
  (NULL,'龙门飞甲','共39集全','images/tvplay/a_62020536_m_601_m10_180_236.jpg','details.html?lid=32',6),
  (NULL,'猎毒人','更新至48集','images/tvplay/a_100156702_m_601_m8_180_236.jpg','details.html?lid=33',6),
  (NULL,'远方的家','更新至18集','images/tvplay/a_100179830_m_601_m3_180_236.jpg','details.html?lid=34',6),
  (NULL,'开封府','共54集全','images/tvplay/a_100082577_m_601_m11_180_236.jpg','details.html?lid=35',6),
  (NULL,'生于70年代','更新至6集','images/tvplay/a_100088765_m_601_m6_180_236.jpg','details.html?lid=36',6),
  (NULL,'爱情进化论','共40集全','images/tvplay/a_100098466_m_601_m9_180_236.jpg','details.html?lid=37',7),
  (NULL,'最美的青春','共36集全','images/tvplay/a_100167012_m_601_m7_180_236.jpg','details.html?lid=38',7),
  (NULL,'岁岁年年柿柿红','共39集全','images/tvplay/a_100159276_m_601_m6_180_236.jpg','details.html?lid=39',7),
  (NULL,'小棉袄','共36集全','images/tvplay/a_100168351_m_601_m4_180_236.jpg','details.html?lid=40',7),
  (NULL,'幸福就好','共25集全','images/tvplay/a_100180240_m_601_m3_180_236.jpg','details.html?lid=41',7),
  (NULL,'我和两个他','共24集全','images/tvplay/a_100101550_m_601_m17_180_236.jpg','details.html?lid=42',7),
  (NULL,'拥抱幸福','共49集全','images/tvplay/a_100108551_m_601_m7_180_236.jpg','details.html?lid=43',8),
  (NULL,'朕的刺客女友','共24集全','images/tvplay/a_100161325_m_601_m10_180_236.jpg','details.html?lid=44',8),
  (NULL,'阳光的快乐生活','共12集全','images/tvplay/a_100176426_m_601_m4_180_236.jpg','details.html?lid=45',8),
  (NULL,'硬骨头之绝地归途','共50集全','images/tvplay/a_100055981_m_601_m8_180_236.jpg','details.html?lid=46',8),
  (NULL,'失宠王妃之结缘','共36集全','images/tvplay/a_100124019_m_601_m5_180_236.jpg','details.html?lid=47',8),
  (NULL,'热血勇士','共39集全','images/tvplay/a_100029990_m_601_m4_180_236.jpg','details.html?lid=48',8),
  (NULL,'凤囚凰','共54集全','images/tvplay/a_100047459_m_601_m4_180_236.jpg','details.html?lid=49',8),
  (NULL,'一不小心吃定你','共12集全','images/tvplay/a_100168509_m_601_m8_180_236.jpg','details.html?lid=50',8),
  (NULL,'玄门大师','共46集全','images/tvplay/a_100037953_m_601_m11_180_236.jpg','details.html?lid=51',8),
  (NULL,'脱身','共46集全','images/tvplay/a_100097820_m_601_m12_180_236.jpg','details.html?lid=52',8),
  (NULL,'新乌龙院之笑闹江湖','电影推荐','images/mouse/v_114991190_m_601_m11_180_236.jpg','details.html?lid=53',3),
  (NULL,'的士快递','电影推荐','images/mouse/v_114736063_m_601_m7_180_236.jpg','details.html?lid=54',3),
  (NULL,'前任3：再见前任','电影推荐','images/mouse/v_112879818_m_601_m3_180_236.jpg','details.html?lid=55',3),
  (NULL,'降妖天师','电影推荐','images/mouse/v_118705905_m_601_m4_180_236.jpg','details.html?lid=56',3),
  (NULL,'狄仁杰之四大天王','电影推荐','images/mouse/v_112882267_m_601_m15_180_236.jpg','details.html?lid=57',3),
  (NULL,'灵魂摆渡黄泉','电影推荐','images/mouse/v_114709119_m_601_m3_180_236.jpg','details.html?lid=58',3),
  (NULL,'武侠','电影推荐','images/mouse/v_50123147_m_601_m9_180_236.jpg','details.html?lid=59',3),
  (NULL,'古墓兽影','电影推荐','images/mouse/v_118884014_m_601_m2_180_236.jpg','details.html?lid=60',3),
  (NULL,'道师爷','电影推荐','images/mouse/v_118575698_m_601_m5_180_236.jpg','details.html?lid=61',3),
  (NULL,'碟中谍5：神秘国度','电影推荐','images/mouse/v_109671668_m_601_m7_180_236.jpg','details.html?lid=62',3),
  (NULL,'英伦对决','电影推荐','images/mouse/v_112881096_m_601_m4_180_236.jpg','details.html?lid=63',9),
  (NULL,'反贪风暴','电影推荐','images/mouse/v_108598044_m_601_m4_180_236.jpg','details.html?lid=64',9),
  (NULL,'碟中谍4','电影推荐','images/mouse/v_62646607_m_601_m3_180_236.jpg','details.html?lid=65',9),
  (NULL,'机器之血','电影推荐','images/mouse/v_112876061_m_601_m4_180_236.jpg','details.html?lid=66',9),
  (NULL,'鲨卷风3','电影推荐','images/mouse/v_118857380_m_601_m2_180_236.jpg','details.html?lid=67',9),
  (NULL,'反贪风暴2','电影推荐','images/mouse/v_111077293_m_601_m4_180_236.jpg','details.html?lid=68',9),
  (NULL,'英雄本色2018','电影推荐','images/mouse/v_113673625_m_601_m5_180_236.jpg','details.html?lid=69',9),
  (NULL,'解码游戏','电影推荐','images/mouse/v_116526022_m_601_m4_180_236.jpg','details.html?lid=70',9),
  (NULL,'战狼2','电影推荐','images/mouse/v_113763212_m_601_m2_180_236.jpg','details.html?lid=71',9),
  (NULL,'碟中谍','电影推荐','images/mouse/v_50114284_m_601_m7_180_236.jpg','details.html?lid=72',9),
  (NULL,'红海行动','电影推荐','images/mouse/v_112882553_m_601_m4_180_236.jpg','details.html?lid=73',10),
  (NULL,'房奴试爱','电影推荐','images/mouse/v_114410830_m_601_m2_180_236.jpg','details.html?lid=74',10),
  (NULL,'碟中谍2','电影推荐','images/mouse/v_50112369_m_601_m5_180_236.jpg','details.html?lid=75',10),
  (NULL,'的士快递5(普通话)','电影推荐','images/mouse/v_118903199_m_601_m2_180_236.jpg','details.html?lid=76',10),
  (NULL,'脱皮爸爸','电影推荐','images/mouse/v_112875593_m_601_m5_180_236.jpg','details.html?lid=77',10),
  (NULL,'西游记女儿国','电影推荐','images/mouse/v_112874974_m_601_m3_180_236.jpg','details.html?lid=78',10),
  (NULL,'狄仁杰之神都龙王','电影推荐','images/mouse/v_50700828_m_601_m16_180_236.jpg','details.html?lid=79',10),
  (NULL,'夺命金','电影推荐','images/mouse/v_50181940_m_601_m2_180_236.jpg','details.html?lid=80',10),
  (NULL,'美人鱼','电影推荐','images/mouse/v_110281910_m_601_m4_180_236.jpg','details.html?lid=81',10),
  (NULL,'厨霸江湖','电影推荐','images/mouse/v_118024216_m_601_m5_180_236.jpg','details.html?lid=82',10),
  (NULL,'御龙修仙传','电影推荐','images/mouse/v_118076729_m_601_m4_180_236.jpg','details.html?lid=83',92),
  (NULL,'碟中谍3','电影推荐','images/mouse/v_50112692_m_601_m5_180_236.jpg','details.html?lid=84',92),
  (NULL,'天才枪手','电影推荐','images/mouse/v_113090405_m_601_m4_180_236.jpg','details.html?lid=85',92),
  (NULL,'十二生肖','电影推荐','images/mouse/v_50378683_m_601_m7_180_236.jpg','details.html?lid=86',92),
  (NULL,'笑林小子2：新乌龙院','电影推荐','images/mouse/v_50042995_m_601_m5_180_236.jpg','details.html?lid=87',92),
  (NULL,'大追铺','电影推荐','images/mouse/v_50189218_m_601_m6_180_236.jpg','details.html?lid=88',92),
  (NULL,'反贪风暴(粤语)','电影推荐','images/mouse/v_108598043_m_601_m10_180_236.jpg','details.html?lid=89',92),
  (NULL,'澳门风云3','电影推荐','images/mouse/v_110160448_m_601_m4_180_236.jpg','details.html?lid=90',92),
  (NULL,'前任攻略','电影推荐','images/mouse/v_62651697_m_601_m4_180_236.jpg','details.html?lid=91',92),
  (NULL,'大话西游之大圣娶亲','电影推荐','images/mouse/v_109655862_m_601_m5_180_236.jpg','details.html?lid=92',92),
  (NULL,'石榴说番就番','更新至2018-10-06期','images/manga/a_100114309_m_601_m1_180_236.jpg','details.html?lid=93',4),
  (NULL,'神兽金刚4','更新至第5集','images/manga/a_100192260_m_601_m2_180_236.jpg','details.html?lid=94',4),
  (NULL,'名侦探柯南','更新至第971集','images/manga/a_100006957_m_601_m13_180_236.jpg','details.html?lid=95',4),
  (NULL,'RanZar欢乐坦克世界','更新至第108集','images/manga/a_100175568_m_601_m2_180_236.jpg','details.html?lid=96',4),
  (NULL,'虚空魔镜','更新至第1集','images/manga/a_100158867_m_601_m3_180_236.jpg','details.html?lid=97',4),
  (NULL,'逆转裁判','更新至第1集','images/manga/a_50337961_m_601_m6_180_236.jpg','details.html?lid=98',4),
  (NULL,'小花仙 第四季','更新至第30集','images/manga/a_100155515_m_601_m7_180_236.jpg','details.html?lid=99',4),
  (NULL,'罗布奥特曼','更新至第14集','images/manga/a_100156211_m_601_m3_180_236.jpg','details.html?lid=100',4),
  (NULL,'猛兽战警','更新至第20集','images/manga/a_100173659_m_601_m5_180_236.jpg','details.html?lid=101',4),
  (NULL,'柯南3分钟事件','更新至第30集','images/manga/a_100143305_m_601_m8_180_236.jpg','details.html?lid=102',4),
  (NULL,'动漫MOMO','更新至第99集','images/manga/a_100093780_m_601_m12_180_236.jpg','details.html?lid=103',12),
  (NULL,'寄宿学校的朱丽叶','更新至第1集','images/manga/a_100176493_m_601_m2_180_236.jpg','details.html?lid=104',12),
  (NULL,'来自多彩世界的明天','更新至第1集','images/manga/a_100158527_m_601_180_236.jpg','details.html?lid=105',12),
  (NULL,'火之丸相补','更新至第1集','images/manga/a_100158495_m_601_m2_180_236.jpg','details.html?lid=106',12),
  (NULL,'X的天使','更新至第6集','images/manga/a_100137082_m_601_m7_180_236.jpg','details.html?lid=107',12),
  (NULL,'魔法禁书目录 第三季','更新至第1集','images/manga/a_100109733_m_601_m3_180_236.jpg','details.html?lid=108',12),
  (NULL,'霹雳惊涛下','更新至第8集','images/manga/a_100155635_m_601_m2_180_236.jpg','details.html?lid=109',12),
  (NULL,'橙心动漫速报','更新至第456集','images/manga/a_100031474_m_601_m2_180_236.jpg','details.html?lid=110',12),
  (NULL,'0号宿舍','更新至第2集','images/manga/a_100192344_m_601_m1_180_236.jpg','details.html?lid=111',12),
  (NULL,'别惹流氓兔马修','更新至第67集','images/manga/a_100129949_m_601_m1_180_236.jpg','details.html?lid=112',12),
  (NULL,'爱情保卫战','更新至2018-10-05期','images/variety/a_50907953_m_601_m7_180_236.jpg','details.html?lid=113',5),
  (NULL,'非诚勿扰','更新至2018-09-29期','images/variety/a_50907782_m_601_m12_180_236.jpg','details.html?lid=114',5),
  (NULL,'金牌调解','更新至2018-10-05期','images/variety/a_50907959_m_601_m7_180_236.jpg','details.html?lid=115',5),
  (NULL,'中国好声音','更新至2018-09-30期','images/variety/a_100118592_m_601_m18_180_236.jpg','details.html?lid=116',5),
  (NULL,'跨界喜剧王第3季','更新至2018-09-29期','images/variety/a_100170931_m_601_m9_180_236.jpg','details.html?lid=117',5),
  (NULL,'非常完美','更新至2018-10-05期','images/variety/a_50908283_m_601_m5_180_236.jpg','details.html?lid=118',5),
  (NULL,'奇葩说第5季','更新至2018-10-06期','images/variety/a_100092180_m_601_m20_180_236.jpg','details.html?lid=119',5),
  (NULL,'相声有新人','更新至2018-09-30期','images/variety/a_100170547_m_601_m4_180_236.jpg','details.html?lid=120',5),
  (NULL,'吉林卫视欢乐送','更新至2018-10-05期','images/variety/a_50909515_m_601_m6_180_236.jpg','details.html?lid=121',5),
  (NULL,'向往的生活第2季','更新至2018-07-06期','images/variety/a_100109335_m_601_m18_180_236.jpg','details.html?lid=122',5),
  (NULL,'奇妙的食光','更新至2018-10-06期','images/variety/a_100149243_m_601_m1_180_236.jpg','details.html?lid=123',13),
  (NULL,'王牌对王牌第2季','更新至2018-04-07期','images/variety/a_100041543_m_601_m2_180_236.jpg','details.html?lid=124',13),
  (NULL,'非你莫属','更新至2018-09-30期','images/variety/a_50907891_m_601_m4_180_236.jpg','details.html?lid=125',13),
  (NULL,'极限挑战第4季','更新至2018-07-15期','images/variety/a_100119576_m_601_m16_180_236.jpg','details.html?lid=126',13),
  (NULL,'经典传记','更新至2018-09-28期','images/variety/a_50908486_m_601_m3_180_236.jpg','details.html?lid=127',13),
  (NULL,'中国新说唱','更新至2018-10-06期','images/variety/a_100139805_m_601_m17_180_236.jpg','details.html?lid=128',13),
  (NULL,'路见不平来晚Fun','更新至2018-10-06期','images/variety/a_100106479_m_601_m3_180_236.jpg','details.html?lid=129',13),
  (NULL,'偶像练习生','更新至2018-04-06期','images/variety/a_100108143_m_601_m7_180_236.jpg','details.html?lid=130',13),
  (NULL,'乡约','更新至2018-09-29期','images/variety/a_100019605_m_601_m2_180_236.jpg','details.html?lid=131',13),
  (NULL,'笑傲帮','更新至2016-07-01期','images/variety/a_100024139_m_601_m1_180_236.jpg','details.html?lid=132',13),
  (NULL,'喜剧班的春天第2季','更新至2017-09-17','images/variety/a_100050645_m_601_m1_180_236.jpg','details.html?lid=133',14),
  (NULL,'今天我相亲','更新至2018-10-05期','images/variety/a_50909584_m_601_m5_180_236.jpg','details.html?lid=134',14),
  (NULL,'一站到底','更新至2018-10-01期','images/variety/a_50908505_m_601_m5_180_236.jpg','details.html?lid=135',14),
  (NULL,'金曲捞','更新至2017-06-30期','images/variety/a_100042145_m_601_m6_180_236.jpg','details.html?lid=136',14),
  (NULL,'全城热恋第十二季','更新至2018-09-30期','images/variety/a_50908484_m_601_m9_180_236.jpg','details.html?lid=137',14),
  (NULL,'高能少年团第2季','更新至2018-07-14期','images/variety/a_100109425_m_601_m19_180_236.jpg','details.html?lid=138',14),
  (NULL,'坑王驾到第2季','更新至2018-10-06期','images/variety/a_100107370_m_601_m5_180_236.jpg','details.html?lid=139',14),
  (NULL,'身临其境','更新至2018-03-17期','images/variety/a_100118588_m_601_m5_180_236.jpg','details.html?lid=140',14),
  (NULL,'中国音乐公告牌','更新至2018-10-05期','images/variety/a_100149186_m_601_m24_180_236.jpg','details.html?lid=141',14),
  (NULL,'笑声传奇','更新至2017-07-02期','images/variety/a_100048732_m_601_m4_180_236.jpg','details.html?lid=142',14);
/**首页电视节目表**/
CREATE TABLE movie_tvprogram(
  tid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(128),
  title VARCHAR(32),
  timer1 time,
  title1 VARCHAR(32),
  timer2 time,
  title2 VARCHAR(32),
  timer3 time,
  title3 VARCHAR(32)
);
INSERT INTO movie_tvprogram VALUES
  (NULL,'images/tvprogram/tv01.gif','CCTV1综合','21:02','淬火成钢25（首播）','22:00','晚间新闻','22:36','淬火成钢26（首播）'),
  (NULL,'images/tvprogram/tv02 (1).jpg','CCTV2财经','21:15','经济半小时','21:47','中国福利彩票公益开奖','21:50','央视财经评论'),
  (NULL,'images/tvprogram/tv03 (1).jpg','CCTV5体育','19:30','黄金赛场—2017/2018赛季','21:30','体育世界','22:15','体育人生'),
  (NULL,'images/tvprogram/tv04.gif','湖南卫视','20:15','金鹰独播剧场：放弃我抓紧我','21:44','广告','22:00','钻石独播剧场：兰陵王妃'),
  (NULL,'images/tvprogram/tv05.gif','江苏卫视','21:20','芝麻开门（20181027）','22:32','芝麻开门（20181027）','23:41','时代问答'),
  (NULL,'images/tvprogram/tv06 (1).jpg','浙江卫视','20:34','中国蓝剧场：北上广依然相爱情','21:30','今日评说','21:41','中国蓝速递'),
  (NULL,'images/tvprogram//tv07.gif','东方卫视','21:12','东方看大剧','21:25','直播上海（20180915）','21:36','妈妈咪呀精编版'),
  (NULL,'images/tvprogram/tv08.gif','北京卫视','20:34','红星剧场：我的岳父会武术','21:22','苗阜秀（20181120）','22:21','跨界喜剧王精华版'),
  (NULL,'images/tvprogram/tv09.gif','安徽卫视','21:20','超级诊疗室第三季','22:04','超级大首映精编版','23:17','时尚妈咪（20181108）'),
  (NULL,'images/tvprogram/tv10.gif','凤凰卫视','21:00','时事直通车(27/12/16)','22:00','凤凰冲击播：冷暖人生','22:30','大唐西市丝路文明(346)'),
  (NULL,'images/tvprogram/tv11.gif','TVB-翡翠台','20:30','流氓皇帝#12[粤]','21:30','巾帼枭雄之谍血长天#9[粤]','22:30','阿爷厨房[粤]'),
  (NULL,'images/tvprogram/tv12.jpg','中天综合台','21:00','SS小燕之夜 首播','22:00','小明星大跟班 首播','23:00','18岁不睡 首播');

/**首页电视剧，电影，综艺，动漫左侧**/
CREATE TABLE tvplay_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  details VARCHAR(128),
  pic VARCHAR(128),
  href VARCHAR(128)
);

/**首页右侧内容*/
CREATE TABLE movie_right(
  rid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(500),
  info VARCHAR(32)
);
INSERT INTO movie_right VALUES
  (NULL,'<a href="details.html?lid=1"><b class="first">1</b>蓝色大海的传说<span>更新至13集</span></a>',1),
  (NULL,'<a href="details.html?lid=2"><b class="first">2</b>极品家丁<span>更新至13集</span></a>',1),
  (NULL,'<a href="details.html?lid=3"><b class="first">3</b>锦绣未央<span>更新至13集</span></a>',1),
  (NULL,'<a href="details.html?lid=4"><b>4</b>青云志2<span>更新至13集</span></a>',1),
  (NULL,'<a href="details.html?lid=5"><b>5</b>举重妖精金福珠<span>更新至13集</span></a>',1),
  (NULL,'<a href="details.html?lid=6"><b>6</b>我的岳父会武术<span>更新至13集</span></a>',1),
  (NULL,'<a href="details.html?lid=7"><b>7</b>嫉妒的化身<span>更新至13集</span></a>',1),
  (NULL,'<a href="details.html?lid=8"><b>8</b>西部世界第一季<span>更新至13集</span></a>',1),
  (NULL,'<a href="details.html?lid=9"><b>9</b>微能力者<span>更新至13集</span></a>',1),
  (NULL,'<a href="details.html?lid=10"><b>10</b>浪漫医生金实福<span>更新至13集</span></a>',1),
  (NULL,'<a href="details.html?lid=11"><b>11</b>七次的初吻<span>更新至13集</span></a>',1),
  (NULL,'<a href="details.html?lid=12"><b>12</b>北上广不相信眼泪<span>更新至13集</span></a>',1),
  (NULL,'<a href="details.html?lid=13"><b class="first">1</b>西虹市首富<span>2018年</span></a>',2),
  (NULL,'<a href="details.html?lid=14"><b class="first">2</b>碟中谍6：全面瓦解<span>2018年</span></a>',2),
  (NULL,'<a href="details.html?lid=15"><b class="first">3</b>快把我哥带走<span>2018年</span></a>',2),
  (NULL,'<a href="details.html?lid=16"><b>4</b>遗传厄运<span>2018年</span></a>',2),
  (NULL,'<a href="details.html?lid=17"><b>5</b>我不是药神<span>2018年</span></a>',2),
  (NULL,'<a href="details.html?lid=18"><b>6</b>一出好戏<span>2018年</span></a>',2),
  (NULL,'<a href="details.html?lid=19"><b>7</b>北方一片苍茫<span>2018年</span></a>',2),
  (NULL,'<a href="details.html?lid=20"><b>8</b>动物世界<span>2018年</span></a>',2),
  (NULL,'<a href="details.html?lid=21"><b>9</b>红海行动<span>2018年</span></a>',2),
  (NULL,'<a href="details.html?lid=22"><b>10</b>瞒天过海<span>2018年</span></a>',2),
  (NULL,'<a href="details.html?lid=23"><b>11</b>风语咒<span>2018年</span></a>',2),
  (NULL,'<a href="details.html?lid=24"><b>12</b>黄飞鸿之南北英雄<span>2018年</span></a>',2),
  (NULL,'<a href="details.html?lid=25"><b class="first">1</b>神偷奶爸2<span>更新至1集</span></a>',3),
  (NULL,'<a href="details.html?lid=26"><b class="first">2</b>机器人总动员<span>全集</span></a>',3),
  (NULL,'<a href="details.html?lid=27"><b class="first">3</b>浪客剑心<span>更新至96集</span></a>',3),
  (NULL,'<a href="details.html?lid=28"><b>4</b>逗鸟外传：萌宝满天飞<span>全集</span></a>',3),
  (NULL,'<a href="details.html?lid=29"><b>5</b>你的名字<span>全集</span></a>',3),
  (NULL,'<a href="details.html?lid=30"><b>6</b>倒霉熊第二部<span>更新至53集</span></a>',3),
  (NULL,'<a href="details.html?lid=31"><b>7</b>银魂<span>更新至317集</span></a>',3),
  (NULL,'<a href="details.html?lid=32"><b>8</b>疯狂动物城<span>更新至1集</span></a>',3),
  (NULL,'<a href="details.html?lid=33"><b>9</b>盖娜<span>全集</span></a>',3),
  (NULL,'<a href="details.html?lid=34"><b>10</b>美少女战士真人版<span>更新至49集</span></a>',3),
  (NULL,'<a href="details.html?lid=35"><b>11</b>头脑特工队<span>更新至1集</span></a>',3),
  (NULL,'<a href="details.html?lid=36"><b>12</b>猪猪侠<span>更新至52集</span></a>',3),
  (NULL,'<a href="details.html?lid=37"><b class="first">1</b>缘来非诚勿扰<span>2018-09-24期</span></a>',4),
  (NULL,'<a href="details.html?lid=38"><b class="first">2</b>天天向上<span>2018-10-05期</span></a>',4),
  (NULL,'<a href="details.html?lid=39"><b class="first">3</b>快乐大本营<span>2018-10-06期</span></a>',4),
  (NULL,'<a href="details.html?lid=40"><b>4</b>金星秀<span>2017-05-24期</span></a>',4),
  (NULL,'<a href="details.html?lid=41"><b>5</b>武林风<span>2018-08-24期</span></a>',4),
  (NULL,'<a href="details.html?lid=42"><b>6</b>鲁豫有约<span>2017-12-16期</span></a>',4),
  (NULL,'<a href="details.html?lid=43"><b>7</b>军情观察室<span>2018-11-20期</span></a>',4),
  (NULL,'<a href="details.html?lid=44"><b>8</b>锵锵三人行<span>2018-06-05期</span></a>',4),
  (NULL,'<a href="details.html?lid=45"><b>9</b>徐老师来巡山<span>全集</span></a>',4),
  (NULL,'<a href="details.html?lid=46"><b>10</b>我们结婚了<span>2018-12-24期</span></a>',4),
  (NULL,'<a href="details.html?lid=47"><b>11</b>非你莫属<span>2018-10-23期</span></a>',4),
  (NULL,'<a href="details.html?lid=48"><b>12</b>军情解码<span>2018-09-15期</span></a>',4);

/*首页最新影片*/
CREATE TABLE movie_index_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(128),
  title VARCHAR(128),
  arrival INT
);
INSERT INTO movie_index_pic VALUES
  (NULL,'images/pic/v_112874737_m_601_m14_180_236.jpg','苏丹',1),
  (NULL,'images/pic/v_115425986_m_601_m7_180_236.jpg','快把我哥带走',1),
  (NULL,'images/pic/v_118881982_m_601_m3_180_236.jpg','狄仁杰之幽冥道',1),
  (NULL,'images/pic/v_113554400_m_601_m10_180_236.jpg','动物世界',1),
  (NULL,'images/pic/v_115502937_m_601_m10_180_236.jpg','一出好戏',1),
  (NULL,'images/pic/v_113666168_m_601_m3_180_236.jpg','这就是命',1),
  (NULL,'images/pic/v_109762898_m_601_m6_180_236.jpg','夏洛特烦恼',1),
  (NULL,'images/pic/v_118681994_m_601_m3_180_236.jpg','侏罗纪世界2',1),
  (NULL,'images/pic/v_112855606_m_601_m7_180_236.jpg','24小时：末路重生',1),
  (NULL,'images/pic/v_113305727_m_601_m6_180_236.jpg','追龙',1),
  (NULL,'images/pic/v_119471018_m_601_m1_180_236.jpg','巨齿鲨',1),
  (NULL,'images/pic/v_114709119_m_601_m3_180_236.jpg','灵魂摆渡黄泉',1),
  (NULL,'images/pic/v_112882267_m_601_m15_180_236.jpg','狄仁杰之四大天王',2),
  (NULL,'images/pic/v_112879829_m_601_m3_180_236.jpg','捉妖记2',2),
  (NULL,'images/pic/v_112882553_m_601_m5_180_236.jpg','红海行动',2),
  (NULL,'images/pic/v_112882672_m_601_m7_180_236.jpg','羞羞的铁拳',2),
  (NULL,'images/pic/v_115720703_m_601_m12_180_236.jpg','风语咒',2),
  (NULL,'images/pic/v_112876061_m_601_m4_180_236.jpg','机器之血',2),
  (NULL,'images/pic/v_113673625_m_601_m5_180_236.jpg','英雄本色2018',2),
  (NULL,'images/pic/v_113158420_m_601_m5_180_236.jpg','唐人街探案2',2),
  (NULL,'images/pic/v_112881096_m_601_m4_180_236.jpg','英伦对决',2),
  (NULL,'images/pic/v_112879818_m_601_m3_180_236.jpg','前任3：再见前任',2),
  (NULL,'images/pic/v_114991190_m_601_m11_180_236.jpg','新乌龙院之笑闹江湖',2),
  (NULL,'images/pic/v_110281910_m_601_m4_180_236.jpg','美人鱼',2);
/**用户信息表**/
CREATE TABLE movie_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  user_name VARCHAR(32),
  gender INT
);
INSERT INTO movie_user VALUES
  (NULL, 'dingding', '123456', 'ding@qq.com', '13501234567','丁伟', '1'),
  (NULL, 'dangdang', '123456', 'dang@qq.com', '13501234568','林当', '1'),
  (NULL, 'doudou', '123456', 'dou@qq.com', '13501234569','窦志强', '1'),
  (NULL, 'yaya', '123456', 'ya@qq.com', '13501234560','秦小雅', '0');
/*分类页*/
/*热播影视*/
CREATE TABLE movie_sort_hotmouse(
  tid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  details VARCHAR(128),
  pic VARCHAR(128),
  href VARCHAR(128)
);
INSERT INTO movie_sort_hotmouse VALUES
  (NULL,'娘道','更新至19集','images/sort/a_100089604_m_601_m10_180_236.jpg','details.html?lid=1'),
  (NULL,'啊父老乡亲','更新至4集','images/sort/a_100186609_m_601_m4_180_236.jpg','details.html?lid=2'),
  (NULL,'一代名相陈廷敬','更新至13集','images/sort/a_100182843_m_601_m3_180_236.jpg','details.html?lid=3'),
  (NULL,'战犯','更新至17集','images/sort/a_100180312_m_601_m5_180_236.jpg','details.html?lid=4'),
  (NULL,'远方的家','更新至16集','images/sort/a_100179830_m_601_m3_180_236.jpg','details.html?lid=5'),
  (NULL,'天盛长歌','更新至66集','images/sort/a_100173767_m_601_m4_180_236.jpg','details.html?lid=6'),
  (NULL,'海角恋人','更新至10集','images/sort/a_100186053_m_601_m2_180_236.jpg','details.html?lid=7'),
  (NULL,'你','更新至1集','images/sort/a_100182870_m_601_m4_180_236.jpg','details.html?lid=8'),
  (NULL,'超级马丽','更新至6集','images/sort/a_100183342_m_601_m2_180_236.jpg','details.html?lid=9'),
  (NULL,'我们的千阙歌','更新至44集','images/sort/a_100172590_m_601_m5_180_236.jpg','details.html?lid=10'),
  (NULL,'生于70年代','更新至2集','images/sort/a_100088765_m_601_m5_180_236.jpg','details.html?lid=11'),
  (NULL,'再创世纪','更新至5集','images/sort/a_100185754_m_601_m2_180_236.jpg','details.html?lid=12');
/*主体：头部*/
CREATE TABLE movie_sort_head(
  tid INT PRIMARY KEY AUTO_INCREMENT,
  sort VARCHAR(8),
  country VARCHAR(16),
  ass VARCHAR(8),
  year VARCHAR(4),
  arrival INT
);
INSERT INTO movie_sort_head VALUES
  (NULL,'电视剧','地区','分类','年份',1),
  (NULL,'电影','全部','全部','全部',2),
  (NULL,NULL,'国产','动作片','2018',3),
  (NULL,NULL,'韩国','喜剧片','2017',4),
  (NULL,NULL,'美国','爱情片','2016',5),
  (NULL,NULL,'香港','科幻片','2016',6),
  (NULL,NULL,'台湾','恐怖片','2015',7),
  (NULL,NULL,'日本','战争片','2014',8),
  (NULL,NULL,'英国','剧情片','2013',9),
  (NULL,NULL,'泰国',NULL,'2012',10),
  (NULL,NULL,'海外',NULL,'2011',11),
  (NULL,NULL,NULL,NULL,'2010',12);
/*主体：电视剧，电影*/
/*手风琴*/
CREATE TABLE movie_sort_accordion(
  tid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  details VARCHAR(500),
  pic VARCHAR(128),
  href VARCHAR(128)
);
INSERT INTO movie_sort_accordion VALUES
  (NULL,'娘道','<p><b>主演：</b><span>岳丽娜/于毅</span></p><p><b>类型：</b><span>年代剧</span></p><p><b>上映：</b><span>2018年</span></p><p><b>状态：</b><span>更新至19集</span></p>','images/sort/a_100089604_m_601_m10_180_236.jpg','details.html?lid=1'),
  (NULL,'海贼王','<p><b>主演：</b><span>尾田荣一郎</span></p><p><b>类型：</b><span>少年漫画</span></p><p><b>上映：</b><span>1999年10月20日</span></p><p><b>状态：</b><span>更新至852集</span></p>','images/sort/a_100013977_m_601_m10_180_236.jpg','details.html?lid=2'),
  (NULL,'桃花依旧笑春风','<p><b>主演：</b><span>苗圃/陈龙</span></p><p><b>类型：</b><span>剧情</span></p><p><b>上映：</b><span>2018年</span></p><p><b>状态：</b><span>更新至28集</span></p>','images/sort/a_100162358_m_601_m6_180_236.jpg','details.html?lid=3'),
  (NULL,'胜利之路','<p><b>主演：</b><span>郭京飞/郭珍霓</span></p><p><b>类型：</b><span>战争</span></p><p><b>上映：</b><span>2018年</span></p><p><b>状态：</b><span>共38集全</span></p>','images/sort/a_100084306_m_601_m8_180_236.jpg','details.html?lid=4'),
  (NULL,'上海风云','<p><b>主演：</b><span>何炅/黄磊/刘宪华</span></p><p><b>类型：</b><span>综艺节目</span></p><p><b>上映：</b><span>2018年</span></p><p><b>状态：</b><span>更新至2018-07-06期</span></p>','images/sort/a_100118139_m_601_m3_180_236.jpg','details.html?lid=5'),
  (NULL,'向往的生活第2季','<p><b>主演：</b><span>岳丽娜/于毅</span></p><p><b>类型：</b><span>年代剧</span></p><p><b>上映：</b><span>2018年</span></p><p><b>状态：</b><span>更新至19集</span></p>','images/sort/a_100109335_m_601_m18_180_236.jpg','details.html?lid=6'),
  (NULL,'我不是差等生','<p><b>主演：</b><span>冯宪珍/杨丽晓</span></p><p><b>类型：</b><span>冯宪珍/杨丽晓</span></p><p><b>上映：</b><span>2004年</span></p><p><b>状态：</b><span>完结</span></p>','images/sort/a_100121087_m_601_m3_180_236.jpg','details.html?lid=7'),
  (NULL,'中国好声音','<p><b>主演：</b><span>李建/周杰伦</span></p><p><b>类型：</b><span>综艺节目</span></p><p><b>上映：</b><span>2018年</span></p><p><b>状态：</b><span>更新至2018-09-14期</span></p>','images/sort/a_100118592_m_601_m18_180_236.jpg','details.html?lid=8'),
  (NULL,'生于70年代','<p><b>主演：</b><span>姚笛/李佳航</span></p><p><b>类型：</b><span>都市</span></p><p><b>上映：</b><span>2018年</span></p><p><b>状态：</b><span>更新至2集</span></p>','images/sort/a_100088765_m_601_m5_180_236.jpg','details.html?lid=9'),
  (NULL,'青色花开终有时','<p><b>主演：</b><span>张鑫/张灵儿</span></p><p><b>类型：</b><span>言情剧</span></p><p><b>上映：</b><span>2018年</span></p><p><b>状态：</b><span>更新至12集</span></p>','images/sort/a_100183608_m_601_m3_180_236.jpg','details.html?lid=10');

/*waterfall*/
CREATE TABLE movie_waterfall(
  rid INT PRIMARY KEY AUTO_INCREMENT,
  href VARCHAR(50),
  img VARCHAR(50),
  detail VARCHAR(500)
);
INSERT INTO movie_waterfall VALUES
  (NULL,"details.html?lid=1","images/hotmou/hot01.jpg","简介：1943年，一份我党潜伏汪伪和军统的人员名单因负责人的被捕，被锁在上海银行保险箱。共产党员陈晓奉命利用指纹术制作指纹套以取出名单。行动失败，保险箱钥匙被汪伪特工部得到，联系人宋姐在牺牲前要陈晓务必拿到名单。");