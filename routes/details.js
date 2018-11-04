const express=require("express");
const pool=require("../pool");
const router=express.Router();

router.get("/detail",(req,res)=>{
  var sql=`SELECT pic FROM movie_carousel_item`;
  pool.query(sql,(err,result)=>{
    if(err) 
      console.log(err);
    res.send(result);
  })
})

module.exports=router;