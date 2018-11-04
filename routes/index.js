const express=require("express");
const pool=require("../pool");
const router=express.Router();

/*轮播图*/
router.get("/carousel",(req,res)=>{
  var sql=`SELECT pic FROM movie_carousel_item`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
/*轮播右侧*/
router.get("/text",(req,res)=>{
  var sql=`SELECT rname FROM movie_banner_right_info`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
/*热播影视*/
router.get("/hotmouse",(req,res)=>{
  var sql=`SELECT pid,title,details,pic,href FROM hotmouse_index_product`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
/*电视节目*/
router.get("/tvprogram",(req,res)=>{
  var sql=`SELECT tid,pic,title,timer1,title1,timer2,title2,timer3,title3 FROM movie_tvprogram`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
module.exports=router;
/*右侧排行旁*/
router.get("/tvplay_RankList",(req,res)=>{
  var sql=`SELECT title FROM movie_right WHERE info=1`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
router.get("/mouse_RankList",(req,res)=>{
  var sql=`SELECT title FROM movie_right WHERE info=2`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
router.get("/manga_RankList",(req,res)=>{
  var sql=`SELECT title FROM movie_right WHERE info=3`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
router.get("/variety_RankList",(req,res)=>{
  var sql=`SELECT title FROM movie_right WHERE info=4`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
/*电视剧,电影,动漫,综艺*/
router.get("/tvplay_Left",(req,res)=>{
  var sql=`SELECT title,details,pic FROM movie_index_product WHERE arrival=2`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
router.get("/tvplay_Left2",(req,res)=>{
  var sql=`SELECT title,details,pic FROM movie_index_product WHERE arrival=6`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
router.get("/tvplay_Left3",(req,res)=>{
  var sql=`SELECT title,details,pic FROM movie_index_product WHERE arrival=7`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
router.get("/tvplay_Left4",(req,res)=>{
  var sql=`SELECT title,details,pic FROM movie_index_product WHERE arrival=8`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
router.get("/mouse_Left",(req,res)=>{
  var sql=`SELECT title,pic FROM movie_index_product WHERE arrival=3`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
router.get("/mouse_Left9",(req,res)=>{
  var sql=`SELECT title,pic FROM movie_index_product WHERE arrival=9`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
router.get("/mouse_Left10",(req,res)=>{
  var sql=`SELECT title,pic FROM movie_index_product WHERE arrival=10`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
router.get("/mouse_Left11",(req,res)=>{
  var sql=`SELECT title,pic FROM movie_index_product WHERE arrival=11`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
router.get("/manga_Left",(req,res)=>{
  var sql=`SELECT title,details,pic,href FROM movie_index_product WHERE arrival=4`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
router.get("/manga_Left12",(req,res)=>{
  var sql=`SELECT title,details,pic,href FROM movie_index_product WHERE arrival=12`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
router.get("/variety_Left",(req,res)=>{
  var sql=`SELECT title,details,pic,href FROM movie_index_product WHERE arrival=5`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
router.get("/variety_Left13",(req,res)=>{
  var sql=`SELECT title,details,pic,href FROM movie_index_product WHERE arrival=13`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
router.get("/variety_Left14",(req,res)=>{
  var sql=`SELECT title,details,pic,href FROM movie_index_product WHERE arrival=14`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
/*最新影片*/
router.get("/pic",(req,res)=>{
  var sql=`SELECT pic,title FROM movie_index_pic WHERE arrival=1`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
router.get("/pic2",(req,res)=>{
  var sql=`SELECT pic,title FROM movie_index_pic WHERE arrival=2`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})

module.exports=router;