var fs = require('fs');
var https=require("https");
// const doubanApiOption={
//     protocol:"http:",
//     hostname:"douban.uieee.com",
//     port:"80",
//     path:"/v2/movie/subject/"+movieId,
//     method:"GET",
//     header:{
//         "Content-Type":"application/json"
//     }
// };
const doubanNginx="https://douban.uieee.com";
const doubanParams="/v2/movie/subject/"

function getDoubanApi(movieId,resData){
    const movieUrl=doubanNginx+doubanParams+movieId;
    const movieJson=movieId+".json";
    var req=https.get(movieUrl,(res)=>{
        var jsonData='';
        res.on('data',(chunk)=>{
            jsonData += chunk;
        //   console.log("chunk:"+chunk);
        });
        res.on("end",()=>{
            fs.writeFileSync("./mock/subject/"+movieJson,jsonData);
            resData.send(jsonData);
        });
    });
    req.on('error',(e)=>{
        console.log("error:"+e.message);
    });
}

module.exports={getDoubanApi};