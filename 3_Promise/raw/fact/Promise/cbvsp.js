let fs=require("fs");
function mypromise(location)
{
    return new Promise(function(resolve,reject)
    {
        fs.readFile(location,function(err,data){
            if(err) reject(err);
            else resolve(data);
        })
    })
}
let mypromisedata=mypromise("f1.txt");
console.log(mypromisedata);
mypromisedata.then(function(data){
    console.log(""+data);
})