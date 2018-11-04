const express=require("express");
const pool=require("../pool");
const router=express.Router();

/*底部*/
router.get("/footer",(req,res)=>{
  var sql=`SELECT site_name,icp,copyright FROM movie_footer_info`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})

module.exports=router;