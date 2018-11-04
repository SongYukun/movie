const express=require("express");
const pool=require("../pool");
const router=express.Router();

/*热播影视*/
router.get("/waterfall_list",(req,res)=>{
  var sql=`SELECT rid, href, img,detail FROM movie_waterfall`;
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})


module.exports=router;