const express=require("express");
const pool=require("../pool");
const router=express.Router();

/*热播影视*/
router.get("/sort-hotmouse",(req,res)=>{
  var sql=`SELECT title,details,pic,href FROM movie_sort_hotmouse`;
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
/*主体部分基本信息*/
router.get("/sort-main",(req,res)=>{
  var sql=`SELECT sort FROM movie_sort_head WHERE arrival=1 OR arrival=2`;
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
/*手风琴*/
router.get("/sort-accordion",(req,res)=>{
  var sql=`SELECT title, details, pic, href FROM movie_sort_accordion`;
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})

module.exports=router;