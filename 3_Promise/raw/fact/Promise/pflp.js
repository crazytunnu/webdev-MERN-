//promise for loop parallel 
// node pflp
let fs=require("fs");
let  arr=["./f1.txt","./f2.txt","./f3.txt"];
for(let i=0;i<arr.length;i++){
    let frp=fs.promises.readFile(arr[i]);
    frp.then(cb);
}
function cb(data)
{
    console.log(""+data);
}