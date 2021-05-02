let fs=require("fs");
let arr=["./f1.txt","./f2.txt","./f3.txt","./f4.txt"];
let frp=fs.promises.readFile(arr[0]);
for(let i=1;i<arr.length;i++)
{
    frp=frp.then(function(data){
        console.log(""+data);
        return fs.promises.readFile(arr[i]);
    })
}
frp.then(function(data){
    console.log(""+data);
})