var express = require('express');
var router = express.Router();
var apiRouter=require("./getDoubanApi");
var fs = require('fs');
// var movieid="1291546";

/* GET home page. */
router.get('/v1/movie/subject', (req, res, next)=> {
  var movieId=req.query.id;
  const movieJson=movieId+".json";
  fs.exists("./mock/subject/"+movieJson,(exists)=>{
    console.log("file exists:"+exists);
    if(exists){
      var localJson=fs.readFileSync("./mock/subject/"+movieJson,(error)=>{
        console.log("error:"+error);
      });
      console.log("localread...")
      res.send(JSON.parse(localJson));
    }else{
      console.log("get read...")
      apiRouter.getDoubanApi(movieId,res);
    }
  })
  // res.send("Json data have been saved successfully.");
});

module.exports = router;
