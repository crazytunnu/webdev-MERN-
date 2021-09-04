let fs=require("fs");
// fs.readFileSync("a.txt")
try{
    fs.readFileSync("a.txt")
}catch(err){
    console.log(err.message);
}
